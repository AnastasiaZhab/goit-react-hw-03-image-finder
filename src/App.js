import "./App.css";
import { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
// import { Circles } from "react-loader-spinner";

class App extends Component {
  state = {
    image: null,
    imageName: null,
    status: "idle",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ status: "pending" });
      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=1&key=24939535-87b6ece9ab011f11d00db958e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(new Error("немає картинки на таку тему"));
        })
        .then((image) => {
          this.setState({ image, status: "resolved" });
          console.log(image);
        })
        .catch((error) => this.setState({ error }));
    }
  }

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    const { image } = this.state;
    console.log(image);
    console.log(image);

    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />;{/* <Circles /> */}
        {image && (
          //   <Circles
          //     height="80"
          //     width="80"
          //     radius="9"
          //     color="green"
          //     ariaLabel="three-dots-loading"
          //     wrapperStyle
          //     wrapperClass
          //   />
          // ) : (
          <ImageGallery image={image} />
        )}
      </div>
    );
  }
}

export default App;
