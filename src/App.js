import React, { useState } from "react";
import { initialProducts } from "./data";
import ProductCard from "./ProductCard.js";
import Cart from "./Cart";

export default function App() {
  const [products] = useState(initialProducts);
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filtered = products.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, qty: 1 },
      ];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  const buttonStyle = {
    padding: "8px 16px",
    margin: "4px",
    border: "1px solid grey",
    borderRadius: "15px",
    backgroundColor: "lightgrey",
    color: "black",
    cursor: "pointer",
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff",
  };

  const containerStyle = {
    display: "flex",
    gap: "20px",
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontFamily: "Segoe UI, sans-serif",
          color: "#333",
        }}
      >
        Dynamic Product Filter and Cart
      </h1>

      <div style={containerStyle}>
        <div style={{ flex: 2 }}>
          <div>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                style={
                  selectedCategory === c ? selectedButtonStyle : buttonStyle
                }
              >
                {c}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 12,
              marginTop: 12,
            }}
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
            ))}
          </div>
        </div>
        <div style={{ width: 320 }}>
          <Cart items={cart} onRemove={removeFromCart} />
        </div>
      </div>
    </div>
  );
}
