import "./App.css";
import { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import { Oval } from "react-loader-spinner";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    image: [],
    imageName: null,
    status: "idle",
    error: null,
    showModal: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;

    if (prevState.imageName !== imageName || prevState.page !== page) {
      this.setState({ status: "pending" });

      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=24939535-87b6ece9ab011f11d00db958e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(new Error("немає картинки на таку тему"));
        })
        .then((image) => {
          this.setState({ status: "resolved" });
          this.setState((prevState) => ({
            image: [...prevState.image, ...image.hits],
          }));
          console.log(image);
        })
        .catch((error) => this.setState({ error }));
    }
  }

  handleFormSubmit = (imageName) => {
    this.setState({ imageName, image: [] });
  };

  handleLoadMore = (prevState) => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.page);
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    const { image, status, showModal } = this.state;

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
        {image && <ImageGallery onClick={this.openModal} image={image} />}
        {image.length > 0 && <Button onClick={this.handleLoadMore} />}
        {showModal && <Modal />}
      </div>
    );
  }
}

export default App;
