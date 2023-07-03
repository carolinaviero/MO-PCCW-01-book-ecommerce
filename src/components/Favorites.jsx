import React from "react";
import { Book } from './Book';

export const Favorites = ({ favoriteBooks, handleAddToFavorites, handleAddToCart, handleAddQuantity }) => {
  return (
    <div className="book-list">
      {favoriteBooks.map((book) => (
        <Book 
          key={book.isbn13} 
          id={book.isbn13}
          title={book.title} 
          image={book.image}
          price={book.price} 
          isFavoriteBook={true}
          handleAddToFavorites={handleAddToFavorites}
          handleAddToCart={handleAddToCart}
          handleAddQuantity={handleAddQuantity}
        />
      ))}
    </div>
  );
};
