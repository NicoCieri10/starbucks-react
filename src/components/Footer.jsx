import React from 'react';
import '../css/footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links-user">
          <a className="footer__links" href={"/"}>inicia sesión</a>
          <a className="footer__links" href={"/"}>registrate</a>
        </div>
        <div className="footer__network">
          <a className="footer__network-i" href={"/"}>
            <i className="bi bi-whatsapp"></i>
          </a>
          <a className="footer__network-i" href={"/"}>
            <i className="bi bi-facebook"></i>
          </a>
          <a className="footer__network-i" href={"/"}>
            <i className="bi bi-twitter"></i>
          </a>
        </div>
        <div className="footer__container-contact-us">
          <a className="footer__contact-us" href={"/"}>contáctanos aquí</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer