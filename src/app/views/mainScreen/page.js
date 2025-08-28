"use client";
import BackButton from "@/app/components/BackButton";
import Drawer from "@/app/components/drawer";
import PrimaryButton from "@/app/components/PrimaryButton";
import { useState } from "react";

export default function MainScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BackButton />
      <p className="text-black text-center text-[12px] font-inter font-normal pt-[63px]">
        SELL VINTAGE
      </p>
      <h1 className="text-black text-center text-[32px] leading-[42px] font-affairstest font-normal pt-[10px]">
        Instant offers available
      </h1>
      <p className="text-black text-center text-[15px] leading-[20px] font-graphik font-light pt-[18px]">
        Describe your item, get an offer, ship it, get paid.
      </p>

      <PrimaryButton />

      <p className="text-black text-center text-[15px] leading-[20px] font-graphik font-normal pt-[24px] pb-[64px]">
        Check out <span className="underline">the most wanted items list</span>
      </p>

      <hr className="w-4/5 border-t-1 border-black mx-auto " />

      <h1 className="text-black text-center text-[32px] leading-[42px] font-affairstest font-normal pt-[60px]">
        You are not signed in
      </h1>

      <p className="text-black text-center text-[15px] leading-[20px] font-graphik font-light pt-[18px]">
        Sign in or create and account to submit items, see offers and track
        progress + many more benefits.
      </p>

      <div className="flex justify-center items-center lg:gap-4 gap-2 pt-[22px] p-2">
        <div
          onClick={() => setIsOpen(true)}
          className="border w-[200px] h-[42px] flex justify-center items-center rounded-[2px] cursor-pointer"
        >
          <button>SIGN IN</button>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="border bg-black text-white w-[200px] h-[42px] flex justify-center items-center rounded-[2px] font-graphik text-[14px] font-normal cursor-pointer"
        >
          <button>CREATE ACCOUNT</button>
        </div>
      </div>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
