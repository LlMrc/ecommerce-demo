import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductsGrid from "@/components/ProductsGrid";
import TopMenu from "@/components/TopMenu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-skin-bg ">
      <div className="w-full h-[1024px] shrink-0 bg-skin-bg flex flex-col justify-between">
        <TopMenu />
        <ProductsGrid />
        <Footer />
      </div>
    </main>
  );
}
