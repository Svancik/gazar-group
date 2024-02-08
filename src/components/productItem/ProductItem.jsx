import React, { useEffect, useState } from "react";
import "./productItem.scss";
import { descriptions } from "../../ps_descriptions";
import { categories } from "../../ps_category";

/* JE ZDE PROBLÉM ŽE SE V KARTĚ Products.jsx použilo mergedData a tyto mergedData nyní nemáme pokud přistupuji z ProductItemDetails.
 Je potřeba provést merged data zda na základě napojení z product.
 Upravit ProductList abychom sem předávali pouze id.
 merged data prakticky nepotřebujeme
*/

export const ProductItem = ({ product }) => {
  const foundProductDesc = descriptions.find(
    (description) => description.id_product === product.id_product
  );

  const foundProductCategory = categories.find(
    (category) => category.id_category === product.id_category_default
  );

  return (
    <div className="product-cell">
      <div className="product-img">
        <img
          src={require(`../../media/productImages/${product.id_product}-medium.jpg`)}
          alt={foundProductDesc.name}
        />
      </div>
      <div className="product-info">
        <div className="product-name">{foundProductDesc.name}</div>
        <div className="product-category">{foundProductCategory.name}</div>
      </div>
    </div>
  );
};
