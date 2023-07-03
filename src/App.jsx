import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import { Favorites } from './components/Favorites';
import { Books } from './components/Books';
import { Cart } from './components/Cart';

const App = () => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
      .then((response) => response.json())
      .then((data) => setBooks(data.books));
  }, []);

  const handleAddToFavorites = (id) => {
    const foundBook = favorites.find(book => book.isbn13 === id);

    if (foundBook) {
      const favoriteBooks = favorites.filter(book => book.isbn13 !== id);
      setFavorites(favoriteBooks);
    } else {
      const bookToAdd = books.find(book => book.isbn13 === id);
      setFavorites([...favorites, bookToAdd]);
    }
  };

  const handleAddToCart = (id, price) => {
    const isBookInCart = cart.find(book => book.isbn13 === id);
    const totalCart = totalPrice + Number(price.substring(1));
    
    
    if (!isBookInCart) {
      // book is not in the cart -> we add it to our cart
      let bookToAdd = books.find(book => book.isbn13 === id);

      bookToAdd = {...bookToAdd, quantity: 1 }

      setTotalPrice(totalCart);

      setCart([...cart, bookToAdd]);
    } else {
      // book is in our cart -> we want to remove it
      const cartWithoutBook = cart.filter(book => book.isbn13 !== id);

      setTotalPrice(0);

      setCart(cartWithoutBook);
    }

  }
  
  const handleAddQuantity = (id) => {
    let bookInCart = cart.find(book => book.isbn13 === id);
    // let newCart = [...cart];
    
    // book is in our cart -> we want to add more quantity
    if (bookInCart) {
      bookInCart.quantity++;

      const totalCart = totalPrice + Number(bookInCart.price.substring(1));

      setTotalPrice(totalCart);
    }
  }


  const numberOfBooksInCart = cart.map(book => book.quantity).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0);

  return (
    <>
      <NavBar 
        numberOfBooksInCart={numberOfBooksInCart}
        numberOfFavoriteBooks={favorites.length} 
        totalCost={totalPrice.toFixed(2)} 
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <Books 
              books={books} 
              handleAddQuantity={handleAddQuantity} 
              handleAddToCart={handleAddToCart} 
              handleAddToFavorites={handleAddToFavorites} 
              numberOfBooksInCart={numberOfBooksInCart}
              favorites={favorites}
              totalPrice={totalPrice} />} 
              />
        <Route 
          path="/favorites" 
          element={
            <Favorites 
              favoriteBooks={favorites} 
              handleAddQuantity={handleAddQuantity} 
              handleAddToCart={handleAddToCart} 
              handleAddToFavorites={handleAddToFavorites} />} />
        <Route 
          path="/cart" 
          element={
          <Cart 
            booksInCart={cart} 
            handleAddQuantity={handleAddQuantity} 
            handleAddToCart={handleAddToCart} 
            handleAddToFavorites={handleAddToFavorites}
            totalPrice={totalPrice.toFixed(2)} />} />
      </Routes>
    </>
  );
}

export default App;
