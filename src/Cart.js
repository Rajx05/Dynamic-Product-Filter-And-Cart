const cartStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
};

const removeButtonStyle = {
  marginLeft: "8px",
  padding: "4px 8px",
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default function Cart({ items, onRemove }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div style={cartStyle}>
      <h3>🛒 Shopping Cart</h3>
      {items.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        items.map((it) => (
          <div key={it.id} style={itemStyle}>
            <div>
              {it.name} (x{it.qty})
            </div>
            <div>
              ${it.price * it.qty}
              <button onClick={() => onRemove(it.id)} style={removeButtonStyle}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <hr />
      <div>
        <strong>Total: ${total}</strong>
      </div>
    </div>
  );
}
