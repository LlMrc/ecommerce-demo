import Card from "./Card";
import { openDrawer } from "@/app/management/store";
import { useAddToList } from "@/app/management/comprar";

const SideBar = () => {
  const { isOpen, toggle } = openDrawer();
  const total = useAddToList((state) => state.product);

  let prices = 0;

  total.forEach(function (obj) {
    const el = Number(obj.price).toFixed(2);
    prices += parseFloat(el);
    console.log(prices);
  });

  return (
    <div
      className={`fixed  flex flex-col justify-between  top-0 right-0 bg-skin-base h-screen w-[80%] lg:w-[486px] flex-shrink-0 shadow-2xl ${
        isOpen ? "right-0" : "right-[-100%]"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <p className="w-[180px] not-italic  h-[56px] text-white flex-shrink-0 text-[27px] text-clip ">
          Carrinho de compras
        </p>
        <div
          onClick={() => {
            toggle();
          }}
          className="w-[38px] h-[38px] flex justify-center items-center rounded-full bg-black"
        >
          <p className=" flex-shrink-0 text-[28px] font-[400px]  text-white">
            x
          </p>
        </div>
      </div>
      <div className=" h-full pt-8 mx-[auto]">
        <Card />
      </div>

      <div className=" block ">
        <div className="flex justify-around py-4">
          <span className="text-[28px] font-[700px] leading-[15px] text-white">
            Total:
          </span>
          <span className="text-[28px] font-[700px] leading-[15px] text-white">
            {`${prices}`}
          </span>
        </div>
        <div className="lg:w-[486px] h-[97px] flex-shrink-0 flex justify-center items-center bg-black">
          <span className="text-white lg:text-[28px]  font-[700px] leading-[15px]">
            Finalizar Compra
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
