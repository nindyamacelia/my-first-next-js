const promoItems = [
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    description: "Kopi dengan rasa karamel yang manis dan susu creamy kesukaan semua Gen Z.",
    price: "Rp 20.000",
    image: "/starbucks-caramel.jpg",
    badge: "Special Promo",
  },
  {
    id: "sistech-latte",
    name: "Sistech Latte",
    description: "Kopi dengan susu creamy hangat ataupun dingin with creamy foam",
    price: "Rp 15.000",
    image: "/latte-italia.jpeg",
    badge: "Special Promo",
  },
];

export default function Page() {
  return (
    <section className="promo-page">
      <div className="promo-hero">
        <div>
          <p className="promo-label">Promo valid for 15 - 18 Juni 2026</p>
          <h1 className="promo-heading">Promo Muharam Penuh Berkah</h1>
          <p className="promo-text">
            Dapatkan minuman favorit dengan harga hemat. Pilih menu promo terbaik dan rasakan sensasi kopi
            creamy favorit semua Gen Z.
          </p>
        </div>
        <div className="promo-banner">
          <span>Save Your Money</span>
        </div>
      </div>

      <div className="promo-grid">
        {promoItems.map((item) => (
          <article key={item.id} className="promo-card">
            <div className="promo-badge">{item.badge}</div>
            <img className="promo-image" src={item.image} alt={item.name} />
            <div className="promo-card-body">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <strong className="promo-price">{item.price}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="promo-note">
        <p>
          Limited stock untuk setiap menu, dan hanya tersedia selama tanggal promo berlangsung
        </p>
      </div>
    </section>
  );
}