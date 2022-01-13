import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [displayedListings, setDisplayedListings] = useState([]);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(listing => {
        setDisplayedListings(listing)
      })
  }, []);

  function handleDeleteListing(deletedListing) {
    const updatedListings = displayedListings.filter(listing => {
      return (listing.id !== deletedListing.id)
    })
    setDisplayedListings(updatedListings)
  }

  function handleSearch(currentSearch) {
    setSearch(currentSearch)
  }

  const searchedListings = displayedListings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })
  

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer listings={searchedListings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
