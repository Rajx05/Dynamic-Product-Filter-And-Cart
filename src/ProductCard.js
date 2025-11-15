const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "12px",
  backgroundColor: "white",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const addButtonStyle = {
  marginTop: "8px",
  padding: "6px 12px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "15px",
  cursor: "pointer",
};

export default function ProductCard({ product, onAdd }) {
  return (
    <div style={cardStyle}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "6px",
          marginBottom: "8px",
        }}
      />
      <h4>{product.name}</h4>
      <div>
        <strong>Category:</strong> {product.category}
      </div>
      <div>
        <strong>Price:</strong> ${product.price}
      </div>
      <button onClick={onAdd} style={addButtonStyle}>
        Add to Cart
      </button>
    </div>
  );
}
