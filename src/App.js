import "./App.css";
import { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import { Oval } from "react-loader-spinner";
import Button from "./components/Button";

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
    const { image, status } = this.state;
    console.log(image);
    console.log(image);

    let loader = null;
    if (status === "pending") {
      loader = (
        <Oval
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      );
    }

    return (
      <div className="div">
        <SearchBar onSubmit={this.handleFormSubmit} />;{loader}
        {image && <ImageGallery image={image} />}
        {image && <Button />}
      </div>
    );
  }
}

export default App;
