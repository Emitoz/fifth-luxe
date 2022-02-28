import React from "react";

import favIcon from "../assets/icons/heart 1.svg";
import cartIcon from "../assets/icons/shopping-cart 1.svg";

const Product = ({ product }) => {
  const { name, price, image } = product;

  return ( 
    <div className="product">
      <div className="thumbnail">
        <img src={ image } alt={ name } />
      </div>
      <div className="details">
        <div className="name-price">
          <h4 className="name">{ name }</h4>
          <p className="price">${ price }.00</p>
        </div>
        <div className="actions">
          <img src={ cartIcon } alt="cart" style={{ marginBottom: 10 }}/>
          <img src={ favIcon } alt="fav" />
        </div>
      </div>
    </div>
   );
}
 
export default Product;