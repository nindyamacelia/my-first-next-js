function page() {
  return (
    <section className="login-page">
      <div className="login-panel">
        <div className="login-top">
           <div className="login-tag">SISTECH CAFE</div>
          <h1 className="login-heading">Masuk ke Akun</h1>
          <p className="login-subtitle">
            Masukkan username dan password untuk mengakses promo eksklusif dan pengalaman Sistech terbaik.
          </p>
        </div>

        <form className="login-form">
          <label className="login-label">
            Username
            <input className="login-input" type="text" placeholder="Masukkan username" />
          </label>

          <label className="login-label">
            Password
            <input className="login-input" type="password" placeholder="Masukkan password" />
          </label>

          <div className="login-meta">
            <a href="#" className="login-forgot">Lupa password?</a>
          </div>

          <button type="submit" className="login-submit">Masuk Sekarang</button>
        </form>

        <p className="login-register">
          Belum punya akun? <a href="#" className="login-link">Daftar sekarang</a>
        </p>
      </div>
    </section>
  )
}

export default page