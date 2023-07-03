import { useState } from "react";

export const Book = ({ title, image, price, id, handleAddToFavorites, handleAddToCart, handleAddQuantity, isFavoriteBook, isBookInCart }) => {
    const [isFavorite, setIsFavorite] = useState(isFavoriteBook);
    const [isInCart, setIsInCart] = useState(isBookInCart);

    const handleFavoriteClick = (id) => {
        setIsFavorite(!isFavorite);
        handleAddToFavorites(id)
    };

    const handleAddToCartClick = (id, price) => {
        setIsInCart(!isInCart);
        handleAddToCart(id, price);
    };

    return (
        <div className="book-item">
            <img alt={title} src={image} />
            <h4>{title}</h4>
            <button onClick={() => handleFavoriteClick(id)}>
                {isFavorite ? '❤️' : '🤍'}
            </button>
            <p>{price}</p>
            <button id="add-to-cart" onClick={() => handleAddToCartClick(id, price)}>
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
            <button onClick={() => handleAddQuantity(id)}>➕</button>
        </div>
    )
}