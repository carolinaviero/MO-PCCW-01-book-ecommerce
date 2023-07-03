import { Book } from "./Book"
import { NavBar } from "./NavBar"

export const Books = ({ books, handleAddQuantity, handleAddToCart, handleAddToFavorites, numberOfBooksInCart, favorites, totalPrice }) => {
    return (
        <>
            <h1>Book e-commerce</h1>
            <div className="book-list">
            {books.map((book) => (
            <Book 
                key={book.isbn13} 
                id={book.isbn13}
                title={book.title} 
                image={book.image}
                price={book.price}
                handleAddToFavorites={handleAddToFavorites}
                handleAddToCart={handleAddToCart}
                handleAddQuantity={handleAddQuantity}
                />
            ))}
            </div>
        </>
    )
}