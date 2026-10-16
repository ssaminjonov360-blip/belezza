import React, { useState } from "react";
import "./App.css";

const HAIRSTYLES = [
  {
    id: 1,
    title: "Ukladka",
    price: "150/200 so'm",
    img: "/images/ukladka1.jpg",
  },
  {
    id: 2,
    title: "Ukladka 2",
    price: "150/200 so'm",
    img: "./public/images/ukladka2.jpg",
  },
  {
    id: 3,
    title: "Ukladka 3",
    price: "150/200 so'm",
    img: "public/images/ukladka3.jpg",
  },
  {
    id: 4,
    title: "Ukladka 4",
    price: "150/200 so'm",
    img: "public/images/ukladka4.jpg",
  },
  {
    id: 5,
    title: "Makyaj",
    price: "300/500 so'm",
    img: "public/images/makyaj.jpg",
  },
  {
    id: 6,
    title: "Makyaj 2",
    price: "300/500 so'm",
    img: "public/images/makyaj2.jpg",
  },
  {
    id: 7,
    title: "Makyaj 3",
    price: "300/500 so'm",
    img: "public/images/makyaj3.jpg",
  },
  {
    id: 8,
    title: "Depilyatsiya polniy",
    price: "700 000 so'm",
    img: "public/images/depilyatsiya.jpg",
  },
  {
    id: 9,
    title: "Kraska",
    price: "Sochga qarab",
    img: "public/images/kraska.jpg",
  },
  {
    id: 10,
    title: "Kraska 2",
    price: "Sochga qarab",
    img: "public/images/kraska2.jpg",
  },
  {
    id: 11,
    title: "Qosh yuz Terish",
    price: "50/100 so'm",
    img: "public/images/qow yuz .jpg",
  },
];

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [showCenterPage, setShowCenterPage] = useState(false);

  const toggleModal = (modalName) => {
    setActiveModal((prev) => (prev === modalName ? null : modalName));
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const openCenterPage = () => {
    setShowCenterPage(true);
    setActiveModal(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeCenterPage = () => {
    setShowCenterPage(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div
          className="logo"
          onClick={closeCenterPage}
          style={{ cursor: "pointer" }}
        >
          Belezza
        </div>

        <nav className="nav-menu">
          <button
            className={`nav-btn ${activeModal === "telefon" ? "active" : ""}`}
            onClick={() => toggleModal("telefon")}
          >
            TELEFON
          </button>
          <button
            className={`nav-btn ${activeModal === "filial" ? "active" : ""}`}
            onClick={() => toggleModal("filial")}
          >
            Filial
          </button>
          <button
            className={`nav-btn ${showCenterPage ? "active" : ""}`}
            onClick={openCenterPage}
          >
            Markaz
          </button>
        </nav>
      </header>

      {showCenterPage ? (
        <main className="main-content center-page-container">
          <div className="center-header">
            <button className="back-btn" onClick={closeCenterPage}>
              ← Ortga qaytish
            </button>
            <h1>Bosh Markazimiz va Joylashuv</h1>
            <p className="location-address">
              📍 Toshkent shahri, Chilonzor tumani, Bunyodkor ko'chasi 15/1
              (Novza metro yaqinida)
            </p>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Belezza Center Map"
              src="https://maps.google.com/maps?q=41.2858,69.2040&hl=uz&z=16&output=embed"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </main>
      ) : (
        <main className="main-content">
          <div className="hero-banner">
            <div className="banner-content">
              <span className="banner-badge">MAXSUS AKSIYA</span>
              <h2>Sizning Go'zalligingiz — Muvaffaqiyatingiz Kaliti!</h2>
              <p>
                Professional uslubchilarimizdan zamonaviy soch turmaklari va
                parvarish xizmatlari.
              </p>
              <button
                className="banner-btn"
                onClick={() => toggleModal("telefon")}
              >
                Navbatga yozilish
              </button>
            </div>

            <div className="banner-image-box">
              <video
                src="/video/hero-banner.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="banner-video"
              />
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <div>
                <h4>Tez va Sifatli</h4>
                <p>Tajribali ustalar xizmati</p>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✨</span>
              <div>
                <h4>Kafolatlangan Sifat</h4>
                <p>Premial parvarish vositalari</p>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💇‍♀️</span>
              <div>
                <h4>Har doim yangilik</h4>
                <p>Eng so'nggi trenddagi stillar</p>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✈️</span>
              <div>
                <h4>Telegram orqali navbat</h4>
                <p>Qulay va tezkor bron qilish</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">SOCH TURMAKLARI</h2>

          <div className="cards-grid">
            {HAIRSTYLES.map((style) => (
              <div key={style.id} className="card">
                <div className="card-image-wrapper">
                  <img src={style.img} alt={style.title} />
                </div>
                <div className="card-info">
                  <h3>{style.title}</h3>
                  <p className="price">{style.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <h2 className="footer-logo">Belezza</h2>
            <div className="social-links">
              <a href="#instagram" className="social-btn instagram-btn">
                <span>📸</span> Instagram
              </a>
              <a href="#telegram" className="social-btn telegram-btn">
                <span>✈️</span> Telegram
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>NAVIGATSIYA</h3>
            <ul className="hover-nav-list">
              <li onClick={() => toggleModal("filial")}>Filial</li>
              <li onClick={() => toggleModal("telefon")}>Telefon</li>
              <li onClick={openCenterPage}>Markaz</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>ALOQA</h3>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+998 95-005-00-66</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📸</span>
              <span>ШОХСАНАМ АБDUKAKHKHOROVA</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✈️</span>
              <span>✨ Belleza ✨</span>
            </div>
          </div>

          <div className="footer-col">
            <h3>ILOVANI YUKLAB OLISH</h3>
            <div className="store-buttons">
              <button className="store-btn">App Store</button>
              <button className="store-btn">Google Play</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="smile-text">Biz sizning tabassumingizni sevamiz</p>
        </div>
      </footer>

      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>

            {activeModal === "telefon" && (
              <div className="modal-body">
                <h2>TELEFON RAQAM</h2>
                <div className="phone-row">
                  <span className="phone-number">+998 95-005-00-66</span>
                  <a href="tel:+998950050066" className="call-btn">
                    QO'NG'IROQ
                  </a>
                </div>
              </div>
            )}

            {activeModal === "filial" && (
              <div className="modal-body">
                <h2>FILIALLAR</h2>
                <div className="branch-box">
                  <div className="branch-icon">📍</div>
                  <div className="branch-details">
                    <h3>Chilonzor filiali</h3>
                    <p>Bunyodkor 15/1 (Novza metro stansiyasi yaqinida)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
