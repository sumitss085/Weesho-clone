import React from "react";
import styles from "./Styles/WomenSaree.css";

const WomenSareeCart = ({ data }) => {
  return (
    <div className="main-box">
      {/* product description on products page- */}

      <div className="div-img">
        <img src={data.images[0]} alt="dress" />
      </div>
      <h3>
        <b>{data.title}</b>
      </h3>
      <p>
        {data.original_price} {" onwards"}
      </p>
      <h2>Free Deliver</h2>
      <h1>
        {data.rating} {"Rating"}
      </h1>
      <p>
        <b> {data.offerPrice}</b>
      </p>
    </div>
  );
};

export default WomenSareeCart;
