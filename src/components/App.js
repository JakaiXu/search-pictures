import React,{useState} from "react";
import SearchBar from "./SearchBar";
import searchImages from "../apis/Unsplash";
import ImageList from "./ImageList";
const App = () => {
  const [list, setList]=useState([])
  const handleSubmit = async(term) => {
  const result= await searchImages(term)
 
  setList(result)
  };
  return (
    <div>
      <SearchBar onSearchTerm={handleSubmit} />
      <ImageList result={list} />
    </div>
  );
};

export default App;
