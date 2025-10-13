import React from "react";
import { LuPen } from "react-icons/lu";

export const AddedDishes = () => {
  return (
    <div className="w-67.5 h-60 flex flex-col p-4 border-1 border-[#E4E4E7] rounded-xl gap-5">
      <div className="w-59 h-32 relative overflow-hidden object-contain">
        <div className="w-59 h-32  rounded-xl">
          <img
            src="./delicious-food.png"
            alt="food"
            className="w-59 h-32 object-cover shrink-fit rounded-2xl"
          />
        </div>
        <div className="absolute right-5 bottom-5 w-11 h-11 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4">
            <LuPen className="text-red-500" />
          </div>
        </div>
      </div>
      <div className="w-59.6 h-15 flex flex-col gap-2">
        <div className="w-59.6 h-5 flex text-red-500 text-sm font-medium leading-tight">
          <p className="flex-1">Brie Crostini Appetizer</p>
          <span className="text-black">$12.99</span>
        </div>
        <div className="w-59.6 h-8 text-text-text-foreground text-xs font-normal leading-none">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </div>
      </div>
    </div>
  );
};
