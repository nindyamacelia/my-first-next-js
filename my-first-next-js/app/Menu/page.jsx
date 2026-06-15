"use client";

import { useState } from "react";

const menuItems = [
 
  {
    id: "bakso-urat",
    name: "Bakso Urat",
    category: "Makanan",
    price: "Rp 35.000",
    description: "Bakso dengan urat sapi jummbo 1 Pcs, bakso halus kecil 3 Pcs, mie, dan sayuran.",
    image: "/Resep-Bakso-urat.webp",
  },
  {
    id: "sistech-latte",
    name: "Sistech Latte",
    category: "Minuman",
    price: "Rp 20.000",
    description: "Kopi dengan susu creamy hangat ataupun dingin with creamy foam.",
    image: "/latte-italia.jpeg",
  },

  {
    id: "jus-friend",
    name: "Jus Friend",
    category: "Minuman",
    price: "Rp.15.000",
    description: "Terbuat dari buah Anggur segar, dengan rasa yang pernah ada dan sejuta kenangan",
    image: "/smoothies-berry.jpg",
  },

  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    category: "Minuman",
    price: "Rp 25.000",
    description: "Kopi dengan rasa karamel yang manis dan susu creamy kesukaan Gen Z.",
    image: "/starbucks-caramel.jpg",
  },
  
];

export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="menu-page">
      <h1 className="menu-heading">Sistech Menu</h1>
      <p className="menu-subtitle">
        Pilih makanan atau minuman favoritmu. Klik kartu untuk melihat pilihan.
      </p>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`menu-card ${selectedItem?.id === item.id ? "selected" : ""}`}
            onClick={() => setSelectedItem(item)}
          >
            <img className="menu-image" src={item.image} alt={item.name} />
            <div className="menu-card-body">
              <span className="menu-category">{item.category}</span>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <strong className="menu-price">{item.price}</strong>
            </div>
          </button>
        ))}
      </div>

      <div className={`menu-selection ${selectedItem ? "active" : "inactive"}`}>
        {selectedItem ? (
          <>
            Kamu memilih <strong>{selectedItem.name}</strong> seharga <strong>{selectedItem.price}</strong>.
          </>
        ) : (
          "Belum ada pilihan, klik menu di atas untuk memilih."
        )}
      </div>
    </section>
  );
}
