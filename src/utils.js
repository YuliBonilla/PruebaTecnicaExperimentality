function getDetailPrice(objPrices, totalPrice) {
  if (!objPrices) {
    return { price: totalPrice };
  }
  var promotionPrice = objPrices.find((item) => item.type == "promotion");
  if (promotionPrice) {
    return {
      price: promotionPrice.regular_amount,
      discount: promotionPrice.regular_amount - promotionPrice.amount,
      percent: getPercent(promotionPrice.regular_amount, promotionPrice.amount),
    };
  } else {
    var standardPrice = objPrices.find((item) => item.type == "standard");
    return { price: standardPrice?.amount };
  }
}

function getPercent(total, lessPromotion) {
  var percent = 100 - (lessPromotion * 100) / total;
  return Math.round(percent) + "%";
}

function getNumberRandom(min, max) {
  return Math.round(Math.random() * (max - min) + parseInt(min));
}

export { getDetailPrice, getPercent, getNumberRandom };
