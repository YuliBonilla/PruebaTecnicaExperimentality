import React, { useState } from "react";
import ClothesStore from "../Images/ClothesStore.png";
import IconSearch from "../Images/Icon-ionic-ios-search.png";
import IconCart from "../Images/icon-cart.svg";
import IconUser from "../Images/icon-user.png";
import IconClose from "../Images/closeIcon.svg";
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
function Header(props) {
  const [inputValue, setInputValue] = useState("");
  const [openHamburguer, setOpenHamburguer] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const history = useHistory()

  function getHamburguer() {
    return (
      <div
        className={
          openHamburguer
            ? "hamburguer__container hamburguer__container--open"
            : "hamburguer__container hamburguer__container--close"
        }
      >
        <div
          className="hamburguer__close"
          onClick={() => setOpenHamburguer(!openHamburguer)}
        >
          <img
            src={IconClose}
            className="hamburguer__close--img"
            alt="img-close"
          />
        </div>
        <div>Hombre</div>
        <div>Mujer</div>
        <div>Junior</div>
        <div>Niños</div>
        <div>Accesorios</div>
        <div>Ofertas</div>
      </div>
    );
  }

  function headerResponsive() {
    return (
      <header className="header__container">
        <div
          className="header__hamburguerContainer"
          onClick={() => setOpenHamburguer(!openHamburguer)}
        >
          <div className="hamburguer"></div>
          <div className="hamburguer"></div>
          <div className="hamburguer"></div>
        </div>
        <img
          src={ClothesStore}
          className="header__imgTitle"
          alt="img-ClothesStore"
          onClick={() =>history.push('/home')}
        />
        <img className="header__iconCart" src={IconCart} alt="img-IconCart" />
        <div className="header__boxOptions">
          <div className="header__boxInputSearch">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="header__inputSearch"
              placeholder="Buscar aquí producto"
            />
            <Link to={"/resultSearch?q=" + inputValue}>
              <img
                className="header__inputSearch--iconSearch"
                src={IconSearch}
                alt="img-IconSearch"
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }

  function headerDesktop() {
    return (
      <header className="header__container">
        <img
          src={ClothesStore}
          className="header__imgTitle"
          alt="img-ClothesStore"
          onClick={() =>history.push('/home')}
        />
        <div className="header__boxOptions">
          <div className="header__boxInputSearch">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="header__inputSearch"
              placeholder="Buscar aquí producto"
            />
            <Link to={"/resultSearch?q=" + inputValue}>
              <img
                className="header__inputSearch--iconSearch"
                src={IconSearch}
                alt="img-IconSearch"
              />
            </Link>
          </div>
          <img className="header__iconCart" src={IconCart} alt="img-IconCart" />
          <img className="header__iconUser" src={IconUser} alt="img-IconUser" />
          <button className="header__button header__button--login">
            Iniciar sesión
          </button>
          )
        </div>
      </header>
    );
  }

  return (
    <React.Fragment>
      {isTabletOrMobile ? headerResponsive() : headerDesktop()}
      {isTabletOrMobile && getHamburguer()}
    </React.Fragment>
  );
}

export default Header;
