import React, { useState } from "react";
import Footer from "./Footer";
import ProductsGrid from "./ProductsGrid";
import TopMenu from "./TopMenu";
import SideBar from "./SideBar";
import { openDrawer } from "@/app/management/store";

const HomePage = () => {
  let isOpen = openDrawer((state) => state.isOpen);
  const toggle = openDrawer((p) => p.toggle);
  return (
    <main>
      <div
        onClick={() => isOpen && toggle()}
        className={`w-full h-[1024px]  shrink-0 bg-skin-bg flex flex-col justify-between ${
          isOpen ? "opacity-30" : ""
        } `}
      >
        <TopMenu />
        <ProductsGrid />
        <Footer />
      </div>
      <SideBar />
    </main>
  );
};

export default HomePage;
