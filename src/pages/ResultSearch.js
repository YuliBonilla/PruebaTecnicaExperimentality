import React, { useEffect, useState } from "react";
import BoxProducts from "../components/BoxProducts";
import { getDetailPrice, getLoad } from "../utils";

function ResultSearch(props) {
  const [data, setData] = useState([]);
  const[load, setLoad] = useState(false)
  const queryString = require("query-string");

  useEffect(() => {
    const parsed = queryString.parse(props.location.search);
    setLoad(true)
    fetch(
      "https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&q=" +
        parsed.q
    )
      .then((response) => response.json())
      .then((dataJson) => {
        setLoad(false)
        if (dataJson.results.length > 0) {
          var dataFormated = dataJson.results.map((item) => {
            return {
              id: item.id,
              name: item.title,
              img: item.thumbnail,
              detailPrice: getDetailPrice(item.prices.prices, item.price),
            };
          });
          setData(dataFormated);
        }
      });
  }, [props.location.search]);

  function getItems() {
    var itemProducts = data.map((item) => {
      return (
        <BoxProducts
          key={item.id}
          name={item.name}
          img={item.img}
          detailPrice={item.detailPrice}
        />
      );
    });
    return itemProducts;
  }

  return (
    <div className="resultSearch__container">
      {data.length > 0 && getItems()}
      {load && getLoad(true)}
    </div>
  );
}
export default ResultSearch;
