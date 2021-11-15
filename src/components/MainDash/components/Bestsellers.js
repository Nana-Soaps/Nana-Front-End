import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import BestsellerItem from "./BestsellerItem.js";
import chevronLeft from "../../../assets/chevron-left-large.svg";
import chevronRight from "../../../assets/chevron-right-large.svg";
function Bestsellers(props) {
  const [offset, setOffset] = useState(0);
  const [cardsOnScreen, setCardsOnScreen] = useState(0);
  const cardsWrap = useRef(null);
  const fixedWrap = useRef(null);

  const setCardNumber = () => {
    const width = window.innerWidth;
    if (width > 1200) {
      setCardsOnScreen(5);
    } else if (width <= 1200 && width > 990) {
      setCardsOnScreen(4);
    } else if (width <= 990 && width > 767) {
      setCardsOnScreen(3);
    } else if (width <= 767) {
      setCardsOnScreen(2);
    }
  };

  window.onresize = setCardNumber;

  useEffect(() => {
    setCardNumber();
  }, []);

  const slideLeft = () => {
    const bestsellerCard = cardsWrap.current.children[0];
    const cardWidth = bestsellerCard.scrollWidth;
    const maxWidth = cardsWrap.current.scrollWidth - cardWidth * cardsOnScreen;

    if (offset < (-1 * cardWidth) / 2) {
      cardsWrap.current.style.transform = `translateX(${offset + cardWidth}px)`;
      setOffset(() => offset + cardWidth);
    } else {
      cardsWrap.current.style.transform = `translateX(${-1 * maxWidth}px)`;
      setOffset(() => -1 * maxWidth);
    }
  };
  const slideRight = () => {
    const bestsellerCard = cardsWrap.current.children[0];
    const cardWidth = bestsellerCard.scrollWidth;
    const maxWidth = cardsWrap.current.scrollWidth - cardWidth * cardsOnScreen;
    console.log(maxWidth, -1 * offset);
    if (offset > -1 * (maxWidth - cardWidth / 2)) {
      cardsWrap.current.style.transform = `translateX(${offset - cardWidth}px)`;
      setOffset(() => offset - cardWidth);
    } else {
      cardsWrap.current.style.transform = `translateX(0px)`;
      setOffset(0);
    }
  };
  return (
    <div className="bestsellers py-5">
      <div className="container">
        <div>
          <h1 className="bestsellers-header">Explore our Bestsellers</h1>
          <div className="d-flex justify-content-center align-items-center content-wrap">
            <div className="arrow-wrap-left" onClick={slideLeft}>
              <img src={chevronLeft} alt="chevron left" />
            </div>
            <div className="fixed-wrap" ref={fixedWrap}>
              <div className="cards-wrap" ref={cardsWrap}>
                {props.products.map((product) => (
                  <BestsellerItem product={product} />
                ))}
              </div>
            </div>
            <div className="arrow-wrap-right" onClick={slideRight}>
              <img src={chevronRight} alt="chevron right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Bestsellers);
