"use client";
import React, { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { GoImage } from "react-icons/go";

export const AddNewDishes = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];
      const filePreview = URL.createObjectURL(file);
      setSelectedImage(filePreview);
    }
  }

  function addFoodHandler() {
    console.log();
  }

  return (
    <div className="w-115 h-148 p-6 flex flex-col">
      <div className="w-full h-7 pb-4 text-text-text-foreground text-lg font-semibold leading-7">
        Add new Dish to Appetizers
      </div>

      {/* Food name and price */}
      <div className="py-6 flex gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-text-text-foreground text-sm font-medium leading-none">
            Food name
          </p>
          <input
            type="text"
            placeholder="Type food name"
            className="border rounded px-2 py-1"
            defaultValue={name}
            value={name}
            // onChange={nameChangeHandler}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-text-foreground text-sm font-medium leading-none">
            Food price
          </p>
          <input
            type="text"
            placeholder="Enter price..."
            className="border rounded px-2 py-1"
          />
        </div>
      </div>

      {/* Ingredients */}
      <div className="w-103 h-28 flex flex-col gap-2">
        <p className="text-text-text-foreground text-sm font-medium leading-none">
          Ingredients
        </p>
        <textarea
          name="List ingredients"
          placeholder="List ingredients"
          id="123"
          className="w-103 h-22.5 border rounded px-2 py-1"
        ></textarea>
      </div>

      {/* Image Upload Section */}
      <div className="w-103 flex flex-col gap-2 mt-6">
        <p className="text-text-text-foreground text-sm font-medium leading-none">
          Food image
        </p>

        {/* Conditional rendering */}
        {!selectedImage ? (
          <label
            htmlFor="imageUpload"
            className="h-34.5 cursor-pointer self-stretch p-4 bg-blue-600/5 rounded-md outline outline-offset-[-1px] outline-blue-primary-20/20 inline-flex flex-col justify-center items-center gap-2 overflow-hidden hover:bg-blue-600/10 transition"
          >
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <div className="p-2 bg-background-bg-background rounded-full inline-flex justify-start items-center gap-2.5">
                <div className="w-4 h-4 relative overflow-hidden">
                  <GoImage />
                </div>
              </div>
              <div className="self-stretch text-center text-text-text-primary text-sm font-medium leading-tight">
                Choose a file or drag & drop it here
              </div>
            </div>

            <input
              id="imageUpload"
              type="file"
              name="myImage"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </label>
        ) : (
          <div className="h-34.5 flex flex-col items-center gap-2 relative">
            <img
              alt="Selected"
              src={selectedImage}
              className="rounded-lg border object-cover w-103 h-34.5"
            />
            <button
              className="absolute mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={() => setSelectedImage(null)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
      <div className="w-103 h-16 flex items-end justify-end mt-6">
        <Button className="px-4 py-2 " onClick={addFoodHandler}>
          Add Dish
        </Button>
      </div>
    </div>
  );
};
