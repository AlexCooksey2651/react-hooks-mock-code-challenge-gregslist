import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {
  
  
  const listingCards = listings.map(listing => {
    return (
      <ListingCard key={listing.id} listingData={listing} onDeleteListing={onDeleteListing}/>
    )
  }) 

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
