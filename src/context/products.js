import React, { createContext } from "react";

import img1 from "../assets/img/judeus-samson-0UECcInuCR4-unsplash 1.jpg";
import img2 from "../assets/img/judeus-samson-0UECcInuCR4-unsplash 1-1.jpg";
import img3 from "../assets/img/judeus-samson-0UECcInuCR4-unsplash 2.jpg";
import img4 from "../assets/img/judeus-samson-0UECcInuCR4-unsplash 2-1.jpg";
import img5 from "../assets/img/judeus-samson-0UECcInuCR4-unsplash 3.jpg";
import img6 from "../assets/img/judeus-samson-0UECcInuCR4-unsplash 3-1.jpg";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const products = [
    { id: 1, name: 'Adele Top', price: 239, image: img1 },
    { id: 2, name: 'Adele Top', price: 239, image: img2 },
    { id: 3, name: 'Adele Top', price: 239, image: img3 },
    { id: 4, name: 'Adele Top', price: 239, image: img4 },
    { id: 5, name: 'Adele Top', price: 239, image: img5 },
    { id: 6, name: 'Adele Top', price: 239, image: img6 },
  ];

  return (
    <ProductsContext.Provider value={{ products }}>
      { children }
    </ProductsContext.Provider>
  )
}