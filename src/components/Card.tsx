import { useAddToList } from "@/app/management/comprar";
import Image from "next/image";
import React from "react";

const Card = () => {
  const comprar = useAddToList((state) => state.product);
  return (
    <>
      {comprar.map((item) => (
        <div
          key={item.id}
          className="md:w-[372px] sm:w-[100%] mt-2 h-[95px] px-2 flex-shrink-0 rounded-[8px] justify-center flex-col items-center flex bg-white shadow-md;
]"
        >
          <div className="text-[5px]  font-[400px]  mx-[auto] text-center text-black">
            Qtd
          </div>
          <div className="flex justify-between  w-full items-center">
            <div className="w-[auto] h-[auto] flex-shrink-0">
              <Image
                src={item.photo}
                alt={item.name}
                height={57}
                width={46}
                className=" h-[auto] w-[auto]"
              />
            </div>
            <div className="w-[113px] p-2 line-clamp-1 h-[33px] flex-shrink-0 ">
              <p className="text-[13px] sm:text-[10px] font-[400px] md:leading-[17px] text-[#2C2C2C] not-italic">
                {item.name}
              </p>
            </div>
            <div className="w-[50px] p-2 h-[19px] overflow-hidden flex justify-between items-center flex-shrink-0 rounded-[4px] border-solid border-x-[0.3px] border-y-[0.3px] border-[#BFBFBF]">
              <div className="border-r-[0.3px] p-1"> - </div>
              <div className="">1</div>
              <div className="border-l-[0.3px] p-1"> + </div>
            </div>
            <div className="w-[63px] pl-2 h-[17px flex-shrink-0 text-[14px] text-black leading-[17] font-[700]">
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
