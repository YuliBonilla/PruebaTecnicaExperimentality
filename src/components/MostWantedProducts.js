import React, { useRef, useState, useEffect } from "react";
import BoxProducts from "./BoxProducts";
import ImgLeft from "../Images/Trazado 49.png";
import ImgRigth from "../Images/Trazado 50.png";
import { getDetailPrice, getNumberRandom } from "../utils";
import { useMediaQuery } from "react-responsive";

function MostWantedProducts(props) {
  const [dataProdcuts, setDataproducts] = useState([]);
  const refContainerItems = useRef();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  function moveLeft() {
    refContainerItems.current.scroll({
      left: refContainerItems.current.scrollLeft - 500,
      behavior: "smooth",
    });
  }

  function moveRigth() {
    refContainerItems.current.scroll({
      left: refContainerItems.current.scrollLeft + 500,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MCO/search?category=MCO1430")
      .then((response) => response.json())
      .then((dataJson) => {
        if (dataJson.results.length > 0) {
          var numbersRandom = [];
          for (let index = 0; index < 10; index++) {
            var aleatorio = getNumberRandom(1, dataJson.results.length - 1);
            var numberExist = numbersRandom.find((item) => item === aleatorio);
            if (!numberExist) {
              numbersRandom.push(aleatorio);
            }
          }
          var dataFormated = [];
          for (let index = 0; index < numbersRandom.length; index++) {
            dataFormated.push({
              id: dataJson.results[numbersRandom[index]].id,
              name: dataJson.results[numbersRandom[index]].title,
              img: dataJson.results[numbersRandom[index]].thumbnail,
              detailPrice: getDetailPrice(
                dataJson.results[numbersRandom[index]].prices.prices,
                dataJson.results[numbersRandom[index]].price
              ),
            });
          }
          setDataproducts(dataFormated);
        }
      });
  }, []);

  return (
    <React.Fragment>
      <div className="mostWantedProducts__title">PRODUCTOS MÁS BUSCADOS</div>
      <div className="mostWantedProducts__container">
        <button
          type="button"
          className="mostWantedProducts__button"
          onClick={moveLeft}
        >
          <img
            src={ImgLeft}
            className="mostWantedProducts__img"
            alt="BoxProducts__image"
          />
        </button>
        <div
          className="mostWantedProducts__scroll-items"
          ref={refContainerItems}
        >
          {dataProdcuts.map((item) => {
            return (
              <BoxProducts
                key={item.id}
                name={item.name}
                img={item.img}
                detailPrice={item.detailPrice}
              />
            );
          })}
        </div>
        <button
          type="button"
          className="mostWantedProducts__button"
          onClick={moveRigth}
        >
          <img
            src={ImgRigth}
            className="mostWantedProducts__img"
            alt="BoxProducts__image"
          />
        </button>
      </div>
    </React.Fragment>
  );
}

export default MostWantedProducts;
