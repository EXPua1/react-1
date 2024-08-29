import './App.css';
import Product from './Product';
import favouriteBooks from './favouriteBooks';

export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <Product books={favouriteBooks} />
    </div>
  );
}
