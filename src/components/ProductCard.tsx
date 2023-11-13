import Image from "next/image";

import React from "react";
import { Product } from "@/app/Type";
import { useCounter } from "@/app/management/counterState";
import { openDrawer } from "@/app/management/store";
import { useAddToList } from "@/app/management/comprar";

const ProductCard = (product: Product) => {
  const { increaseCounter } = useCounter();
  const addProduct = useAddToList((state) => state.add);
  const toggle = openDrawer((p) => p.toggle);

  return (
    <>
      <div
        key={product.id}
        className="w-[217.562px]  h-[285px] gap-4 flex-shrink-0 rounded-[8px] justify-between bg-white shadow-bxs flex flex-col  content-center hover:shadow"
      >
        <Image
          className="self-center h-[auto] w-[auto]"
          src={product.photo}
          width={111}
          height={138}
          alt={product.brand}
          priority={true}
        />
        <div className="block ">
          <div className="flex justify-between  pl-[10px]  py-2">
            <div className="flex w-[200px] items-baseline h-[38px] flex-shrink-0 text-[#2C2C2C] text-[16px] font-[400px] leading-[19px]">
              <span className="w-3/4"> {product.name} </span>
              <div className="flex flex-wrap  content-center justify-center rounded-[5px] w-[66px] overflow-x-hidden h-[26px] flex-shrink-0 bg-[#2C2C2C] text-white text-[12px] leading-[15px] font-[700px]">
                {`R$${product.price}`}
              </div>
            </div>
          </div>
          <div className="w-[192px] h-[25px] pl-[10px] flex-shrink-0">
            <p className="text-[10px] line-clamp-4 font-[300px] leading-[12px]  text-[#2C2C2C] ">
              {product.description}
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            increaseCounter(1);
            toggle();
            addProduct(product);
          }}
          className="w-[218px] h-[31.907px] flex-shrink-0 bg-[#0F52BA] flex justify-center items-center  rounded-br-[8px] rounded-bl-[8px] cursor-pointer hover:bg-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
          >
            <path
              opacity="0.737212"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            />
            <path
              opacity="0.737212"
              d="M1 4.375H13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.737212"
              d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="w-[77px] pl-3 h-[14px] flex-shrink-0 text-white text-[14px] not-italic font-[600px] leading-[18px]">
            COMPRAR
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
