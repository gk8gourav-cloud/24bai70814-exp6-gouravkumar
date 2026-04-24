import ProductCard from "./components/ProductCard";
import "./styles.css";

function App() {
  const products = [
    { name: "Laptop", price: 55000, inStock: true },
    { name: "Headphones", price: 2000, inStock: false },
    { name: "Mobile", price: 15000, inStock: true },
  ];

  return (
    <div className="container">
      <h1>Product List</h1>

      {products.map((item, index) => (
        <ProductCard
          key={index}
          name={item.name}
          price={item.price}
          inStock={item.inStock}
        />
      ))}
    </div>
  );
}

export default App;
