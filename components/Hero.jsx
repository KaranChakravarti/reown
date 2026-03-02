"use client";
import { assets } from "@/assets/assets";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import CategoriesMarquee from "./CategoriesMarquee";

const Hero = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  return (
    <div className="mx-6">
      <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10">
        <div className="relative flex-1 flex flex-col bg-gradient-to-b from-green-400 to-green-900 shadow-2xl shadow-green-500/40 rounded-3xl xl:min-h-100 group">
          <div className="p-5 sm:p-16">
            <div className="inline-flex items-center gap-3 bg-white/30 text-white pr-4 p-1 rounded-full text-xs sm:text-sm font-medium">
              <span className="bg-black text-white px-3 py-1 max-sm:ml-1 rounded-full font-bold text-xs">
                NEWS
              </span>{" "}
              Free Shipping on Orders Above ₹500!{" "}
              <ChevronRightIcon
                className="group-hover:ml-2 transition-all"
                size={16}
              />
            </div>
            <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-bold text-black max-w-xs sm:max-w-md">
              Gadgets you'll love. Prices you'll trust.
            </h2>
            <div className="text-black/90 text-sm font-medium mt-4 sm:mt-8">
              <p>Starts from</p>
              <p className="text-3xl text-black font-bold">{currency}4.90</p>
            </div>
            <button className="bg-black text-white font-bold text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-gray-800 hover:scale-103 active:scale-95 transition">
              LEARN MORE
            </button>
          </div>
          <Image
            className="sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm"
            src={assets.hero_model_img}
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-black">
          <div className="flex-1 flex items-center justify-between w-full bg-gradient-to-r from-green-300 to-green-900 rounded-3xl p-6 px-8 group">
            <div>
              <p className="text-3xl font-bold text-black max-w-40">
                Best products
              </p>
              <p className="flex items-center gap-1 mt-4 font-semibold">
                View more{" "}
                <ArrowRightIcon
                  className="group-hover:ml-2 transition-all"
                  size={18}
                />{" "}
              </p>
            </div>
            <Image className="w-35" src={assets.hero_product_img1} alt="" />
          </div>
          <div className="flex-1 flex items-center justify-between w-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl p-6 px-8 group">
            <div>
              <p className="text-3xl font-bold text-black max-w-40">
                20% discounts
              </p>
              <p className="flex items-center gap-1 mt-4 font-semibold">
                View more{" "}
                <ArrowRightIcon
                  className="group-hover:ml-2 transition-all"
                  size={18}
                />{" "}
              </p>
            </div>
            <Image className="w-35" src={assets.hero_product_img2} alt="" />
          </div>
        </div>
      </div>
      <CategoriesMarquee />
    </div>
  );
};

export default Hero;
