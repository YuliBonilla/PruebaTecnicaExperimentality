import React from "react";
import IconTwiter from "../Images/icon-twitter.svg";
import IconYouTube from "../Images/icon-youtube.svg";
import IconInstagram from "../Images/icon-instagram.svg";
import IconFacebook from "../Images/icon-facebook.svg";
import { useMediaQuery } from "react-responsive";

function Footer(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  function footerResponsive() {
    return (
      <div className="footer__container">
        <div className="footer__container--items">
          <div className="footer__title">POLÍTICAS</div>
          <div className="footer__plus">+</div>
        </div>
        <div className="footer__hline"></div>
        <div className="footer__container--items">
          <div className="footer__title">SOBRE NOSOTROS</div>
          <div className="footer__plus">+</div>
        </div>

        <div className="footer__hline"></div>
        <div className="footer__container--items">
          <div className="footer__title">MEDIOS DE PAGO</div>
          <div className="footer__plus">+</div>
        </div>
        <div className="footer__hline"></div>
        <div className="footer__title">SÍGUENOS EN:</div>
        <img src={IconTwiter} className="footer__icon" alt="IconTwiter" />
        <img src={IconYouTube} className="footer__icon" alt="IconYouTube" />
        <img src={IconInstagram} className="footer__icon" alt="IconInstagram" />
        <img
          src={IconFacebook}
          className="footer__icon--facebook"
          alt="IconFacebook"
        />
      </div>
    );
  }

  function footerDesktop() {
    return (
      <div className="footer__container">
        <div className="footer__container--items">
          <div>
            <div className="footer__title">POLÍTICAS</div>
            <div className="footer__item">Políticas de privacidad</div>
            <div className="footer__item">Políticas de cambio</div>
            <div className="footer__item">Políticas de envío</div>
            <div className="footer__item">Términos y condiciones</div>
            <div className="footer__item">Responsabilidad social</div>
          </div>
          <div>
            <div className="footer__title">SOBRE NOSOTROS</div>
            <div className="footer__item">Encuentra tu tienda</div>
            <div className="footer__item">Contáctanos</div>
            <div className="footer__item">Trabaja con nosotros</div>
          </div>
          <div>
            <div className="footer__title">SÍGUENOS EN:</div>
            <img src={IconTwiter} className="footer__icon" alt="IconTwiter" />
            <img src={IconYouTube} className="footer__icon" alt="IconYouTube" />
            <img
              src={IconInstagram}
              className="footer__icon"
              alt="IconInstagram"
            />
            <img
              src={IconFacebook}
              className="footer__icon--facebook"
              alt="IconFacebook"
            />
          </div>
        </div>
        <div className="footer__hline"></div>
        <div className="footer__copyright">
          © Copyright Colombia. Todos los derechos reservados
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      {isTabletOrMobile ? footerResponsive() : footerDesktop()}
    </React.Fragment>
  );
}

export default Footer;
