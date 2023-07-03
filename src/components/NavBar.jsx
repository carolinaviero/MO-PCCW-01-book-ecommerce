import { Link } from 'react-router-dom';

export const NavBar = ({ numberOfFavoriteBooks, numberOfBooksInCart, totalCost }) => {
  return (
    <div className="navbar">
      <Link to="/">Home </Link>
      <Link to="/favorites">Favorites {numberOfFavoriteBooks > 0 ? `(${numberOfFavoriteBooks})` : ''}</Link>
      <Link to="/cart">Cart ${totalCost} {numberOfBooksInCart > 0 ? `(${numberOfBooksInCart})` : ''}</Link>
    </div>
  );
};
