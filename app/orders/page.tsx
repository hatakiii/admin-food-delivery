"use client";
import React from "react";
import { AdminLayout } from "../_components";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { LuChevronsUpDown } from "react-icons/lu";

const page = () => {
  return (
    <>
      <AdminLayout>
        <div className="w-full h-full flex flex-col bg-[#E4E4E7] p-4">
          <div className="w-full h-19 flex items-center justify-between border-2 border-red-400 p-1 bg-white">
            <div className="w-121 h-11 flex-1">
              <h1>Orders</h1>
              <p>32 items</p>
            </div>
            <div className=" h-9 flex gap-3">
              <Button variant={"outline"}>13 June 2023 - 14 July 2023</Button>
              <Button>Change delivery state</Button>
            </div>
          </div>
          <div className="w-full h-13 flex border-2 border-red-400">
            <div className="flex items-center justify-center w-12 h-full">
              <Checkbox className="bg-white border-2 border-black" />
            </div>
            <div className="flex items-center justify-center w-14 h-full">
              <p className="text-foreground leading-5">№</p>
            </div>
            <div className="self-stretch px-4 border-b border-border-border-border inline-flex justify-start items-center gap-2.5">
              <p className="justify-start   font-medium  leading-5">Customer</p>
            </div>
            <div className="w-40 self-stretch px-4 border-b border-border-border-border inline-flex justify-start items-center gap-2.5">
              <p className="justify-start  font-medium  leading-5">Food</p>
            </div>
            <div className="w-40 self-stretch px-4 border-b border-border-border-border inline-flex justify-between items-center">
              <p className="justify-start font-medium  leading-5">Date</p>
              <LuChevronsUpDown />
            </div>
            <div className="w-40 self-stretch px-4 border-b border-border-border-border inline-flex justify-start items-center gap-2.5">
              <p className="justify-start  font-medium  leading-5">Total</p>
            </div>
            <div className="self-stretch h-12 px-4 border-b border-border-border-border inline-flex flex-1 justify-start items-center gap-2.5">
              <p className="justify-start   font-medium  leading-5 whitespace-nowrap">
                Delivery Address
              </p>
            </div>
            <div className="w-40 h-12 px-4 border-b border-border-border-border inline-flex justify-between items-center">
              <p className="justify-start  font-medium  leading-5">
                Delivery state
              </p>
              <LuChevronsUpDown />
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default page;
