import React from "react";
import IconCart from "../Images/icon-cart.svg";

function BoxProducts(props) {
  const { name, img, detailPrice } = props;
  return (
    <div className="BoxProducts__container">
      {detailPrice.percent && <div className="BoxProducts__tagDiscount">{detailPrice.percent}</div>}
      <img className="BoxProducts__image" src={img} alt="BoxProducts__image" />
      <div className="BoxProducts__detail">
        <div className="BoxProducts__name">{name}</div>
        <div className="BoxProducts__container__numbers">
          <div className="BoxProducts__cost">${detailPrice.price}</div>
          <div className="BoxProducts__discount">
            {detailPrice.discount ? '$'+detailPrice.discount : ""}
          </div>
        </div>
        <button className="BoxProducts__button-cart"><img className="BoxProducts__iconCart" src={IconCart} alt="img-IconCart" />Agregar al carrito</button>
      </div>
    </div>
  );
}

export default BoxProducts;
