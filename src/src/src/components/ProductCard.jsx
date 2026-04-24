function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>

      <p className={inStock ? "stock in" : "stock out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
