import React from "react";
import  assets  from "../assets/assets";

export default function Footer() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div className="">
          <img src={assets.logo} alt="" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veniam
            perspiciatis aut explicabo nam neque nihil ratione fugiat saepe
            maxime?
          </p>
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500">
        Copyright 2025 &copy-
        <a
          href="https://github.com/outgoingrudra"
          className="text-black font-bold"
        >
          Rudra Verma
        </a>{" "}
        QuickBlog All Right Reserved .{" "}
      </p>
    </div>
  );
}
