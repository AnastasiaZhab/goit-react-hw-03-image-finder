import "./App.css";
import { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {};

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
