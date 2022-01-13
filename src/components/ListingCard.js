import React, { useState } from "react";

function ListingCard({ listingData, onDeleteListing }) {
  const [favoriteStatus, setFavoriteStatus] = useState("true")

  function handleFavoriteClick() {
    setFavoriteStatus(!favoriteStatus)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listingData.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => onDeleteListing(listingData))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listingData.image} alt={listingData.description} />
      </div>
      <div className="details">
        {favoriteStatus ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{listingData.description}</strong>
        <span> · {listingData.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
