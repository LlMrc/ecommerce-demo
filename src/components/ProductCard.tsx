import Image from "next/image";
import { type } from "os";
import React from "react";
import img from "../img/apple-watch.png";

type Props = {
  src: String;
  alt: String;
};
const ProductCard = () => {
  return (
    <div className="w-[217.562px] h-[285px] gap-4 flex-shrink-0 rounded-[8px] justify-center bg-white shadow-bxs flex flex-col  content-center">
      <Image
        className="self-center"
        src={img}
        width={111}
        height={138}
        alt="apple watch"
      />
      <div className="block">
        <div className="flex justify-between  pl-[10px]  py-2">
          <div className="flex w-[200px] justify-center h-[38px] flex-shrink-0 text-[#2C2C2C] text-[16px] font-[400px] leading-[19px]">
            <span> Apple Watch Series 4 GPS </span>
            <div className="flex flex-wrap content-center justify-center rounded-[5px] w-[64px] h-[26px] flex-shrink-0 bg-[#2C2C2C] text-white text-[15px] leading-[15px] font-[700px]">
              R$399
            </div>
          </div>
        </div>
        <div className="w-[192px] h-[25px] pl-[10px] flex-shrink-0">
          <p className="text-[10px] font-[300px] leading-[12px]  text-[#2C2C2C] ">
            Redesigned from scratch and completely revised.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
