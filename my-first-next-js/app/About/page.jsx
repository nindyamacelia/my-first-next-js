function page() {
  return (
    <section className="about-page">
      <div className="about-intro">
        <p className="about-tag">Tentang Sistech Cafe</p>
        <h1 className="about-heading">Enjoy Your Mood</h1>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p className="about-text">
           Sistech Cafe is a local coffee shop that serves local coffee with a warm and welcoming atmosphere. What makes it special is that the cafe is fully operated by talented and inspiring women who bring creativity, care, and teamwork into every part of the business.
            All drinks are crafted with a creative touch by a talented team of women who prioritize taste and quality.
          </p>

          <p className="about-text about-text-strong">
            Kami percaya bahwa setiap cangkir kopi adalah pengalaman. Saat Anda datang, Anda bukan hanya memesan minuman, Anda merasakan cerita, inspirasi, dan semangat baru.
          </p>
        </div>

        <aside className="about-card">
          <span className="about-card-badge">Pilihan Unggulan</span>
          <h2 className="about-card-title">Mengapa Sistech Cafe?</h2>
          <ul className="about-features">
            <li>Minuman kopi dan signature latte yang creamy dan balanced.</li>
            <li>Cozy untuk Work From Cafe, nugas, atau hanya sekedar untuk  nongkrong.</li>
            <li>Harga dan kualitas terjamin</li>
          </ul>
          <p className="about-card-note">SISTECH CAFE, ENJOY YOUR MOOD.</p>
        </aside>
      </div>
    </section>
  )
}

export default page