import React from "react";
import { Book } from './Book';

export const Cart = ({ booksInCart, handleAddQuantity, handleAddToCart, handleAddToFavorites, totalPrice }) => {
  return (
    <>
      <div className="book-list">
        {booksInCart.map((book) => (
          <Book 
            key={book.isbn13} 
            id={book.isbn13}
            title={book.title} 
            image={book.image}
            price={book.price} 
            isBookInCart={true}
            handleAddToFavorites={handleAddToFavorites}
            handleAddToCart={handleAddToCart}
            handleAddQuantity={handleAddQuantity}
          />
        ))}
      </div>
      <h3>Total price: ${totalPrice}</h3>
    </>
  );
};
