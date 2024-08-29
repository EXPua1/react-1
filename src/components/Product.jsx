// src/components/Product.jsx

export default function Product({ books }) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <h2>{book.name}</h2>
          <img src={book.img} alt={book.name} />
        </li>
      ))}
    </ul>
  );
}
