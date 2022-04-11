import React from "react";
const Product = ({ title, price, desc, brand }) => {
  if (!price) throw new Error("Price is required");
  return (
    <>
      <div style={{ width: 300, border: "2px solid cyan" }}>
        <h3>{title}</h3>
        <h3>{brand}</h3>
        <h3>Price{price}</h3>
        <h3>{desc}</h3>
      </div>
    </>
  );
};

export default Product;
