"use client";
import { RiExpandUpDownLine } from "react-icons/ri";
import { FiTrash } from "react-icons/fi";
import { X } from "lucide-react";
import { useState } from "react";

export const DishesInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preview, setPreview] = useState("");
  return (
    <div className="max-w-[424px] max-h-[584px] bg-background-bg-background rounded-xl inline-flex flex-col justify-start items-start gap-3">
      <div className="self-stretch inline-flex justify-center items-center gap-2.5">
        <div className="flex-1 justify-start text-lg font-semibold text-black leading-7">
          Dishes info
        </div>
        <div className="w-9 h-9 px-4 py-2 bg-background-bg-secondary rounded-full flex justify-center items-center gap-2">
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-2 h-2 left-[4px] top-[4px] absolute outline  outline-offset-[-0.50px] outline-text-text-secondary-foreground">
              x
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="self-stretch py-3 inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Dish name
          </div>
          <div className="w-72 self-stretch px-3 py-2 bg-background-bg-background rounded-md outline outline-offset-[-1px] outline-border-border-input flex justify-start items-center overflow-hidden">
            <div className="flex-1 justify-start text-black  text-sm font-normal  leading-tight">
              Brie Crostini Appetizer
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Dish category
          </div>
          <div className="w-72 px-3 py-2 bg-background-bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline  outline-offset-[-1px] outline-border-border-input flex justify-between items-center overflow-hidden">
            <div className="w-28 px-2.5 py-0.5 rounded-full flex justify-start items-start gap-2.5 bg-[#F4F4F5E5]">
              <div className="justify-start text-black  text-xs font-semibold leading-none ">
                Appetizer
              </div>
            </div>
            <div className="w-4 h-4 relative opacity-50 overflow-hidden">
              <RiExpandUpDownLine />
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Ingredients
          </div>
          <div className="w-72 self-stretch min-h-20 px-3 py-2 bg-background-bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline  outline-offset-[-1px] outline-border-border-input inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch justify-start text-black  text-sm font-normal  leading-tight">
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Price
          </div>
          <div className="w-72 self-stretch px-3 py-2 bg-background-bg-background rounded-md outline outline-offset-[-1px] outline-border-border-input flex justify-start items-center overflow-hidden">
            <div className="flex-1 justify-start text-black  text-sm font-normal  leading-tight">
              $12.99
            </div>
          </div>
        </div>
        <div className="w-full h-36 py-3 relative inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Image
          </div>
          <div className="w-[288px] h-[116px] rounded-full relative">
            <img
              className="w-full h-full  outline   inline-flex flex-col justify-center items-center"
              src="/Users/25LP5598/Documents/food-delivery-app/admin-food-delivery/public/delicious-food.png"
            />
            <div className="w-9 h-9 flex justify-center items-center absolute top-2 right-2 bg-amber-200 rounded-full">
              <X className="w-4 h-4  " />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch pt-6 inline-flex justify-between items-center">
        <div className="h-10 px-4 py-2 bg-background-bg-background rounded-md outline  outline-offset-[-1px] outline-border-border-destructive/50 flex justify-center items-center gap-2 border-1 border-red-400">
          <div className="w-4 h-4 relative overflow-hidden">
            <FiTrash className="text-red-400" />
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="h-10 px-4 py-2 bg-zinc-900 rounded-md flex justify-center items-center gap-2">
            <div className="justify-start text-white text-sm font-medium  leading-tight">
              Save changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
