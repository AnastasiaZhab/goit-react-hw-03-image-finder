import "./App.css";
import { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    id: "",
    webformatURL: ,
    largeImageURL : 
  };

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12"
    )
      .then((res) => res.json())
      .then(console.log);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
