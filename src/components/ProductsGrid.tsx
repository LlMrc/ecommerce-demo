"use client";

import ProductCard from "./ProductCard";
import { useQuery } from "react-query";

import { Product, Root } from "@/app/Type";
import Shimmer from "./Shimmer";

import { getProduct } from "@/app/api/ProductData";

const ProductsList = () => {
  const { data, isLoading } = useQuery<Root>("product", getProduct);
  const listOfProduct = data?.products;

  console.log(typeof listOfProduct);
  if (isLoading) {
    return <Shimmer/>;
  }

  return (
    <div className="bg-skin-bg lg:mx-44 md:mx-40 justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {listOfProduct?.map((item) =>
        (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            brand={item.brand}
            description={item.description}
            photo={item.photo}
            price={item.price}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
          />
        )
      )}
    </div>
  );
};

export default ProductsList;
