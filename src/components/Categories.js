import React from "react";
import ImgCategory1 from "../Images/categorias-destacadas-moda-infantil.png";
import ImgCategory2 from "../Images/categorias-destacadas-proteccion.png";

function Categories(props) {
  return (
    <div className="Categories__container">
      <div className="Categories__box">
        <div className="Categories__text">MODA INFANTIL</div>
        <img
          className="Categories__image"
          src={ImgCategory1}
          alt="img-ClothesStore"
        />
      </div>
      <div className="Categories__box">
        <div className="Categories__text">PROTECCIÓN</div>
        <img
          className="Categories__image"
          src={ImgCategory2}
          alt="img-ClothesStore"
        />
      </div>
    </div>
  );
}

export default Categories;
