import React, { useState } from "react";
import "./App.css";

const HAIRSTYLES = [
  {
    id: 1,
    title: "BOB CUT",
    price: "200 000 so'm",
    img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "BOX BRAIDS",
    price: "350 000 so'm",
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "PIXIE CUT",
    price: "180 000 so'm",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "LAYERED CUT",
    price: "220 000 so'm",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "BALAYAGE COLOR",
    price: "600 000 so'm",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    title: "UPDO STYLING",
    price: "400 000 so'm",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    title: "AFRO CURLS",
    price: "300 000 so'm",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    title: "LONG WAVY",
    price: "250 000 so'm",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    title: "HOLLYWOOD WAVE",
    price: "450 000 so'm",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    title: "HIGH PONYTAIL",
    price: "190 000 so'm",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 11,
    title: "OMBRE HIGHLIGHTS",
    price: "550 000 so'm",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 12,
    title: "FRENCH BRAID",
    price: "150 000 so'm",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 13,
    title: "SHAG CUT",
    price: "230 000 so'm",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 14,
    title: "BRIDAL HAIR",
    price: "700 000 so'm",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 15,
    title: "KERATIN CARE",
    price: "800 000 so'm",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 16,
    title: "BEACH WAVES",
    price: "210 000 so'm",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
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
