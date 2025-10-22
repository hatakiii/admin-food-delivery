"use client";

import { AdminLayout } from "./_components/AdminLayout";

import { useEffect, useState } from "react";

import { CategoryType, FoodType } from "@/lib/types";
import { CategorizedFoods } from "./_components/CategorizedFoods";

import { FoodCategories } from "@/components/main";

export default function Page() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [foods, setFoods] = useState<FoodType[]>([]);

  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
  };

  const getFoods = async () => {
    const result = await fetch("http://localhost:4000/api/food");
    const responseData = await result.json();
    setFoods(responseData.data);
  };

  useEffect(() => {
    getCategories();
    getFoods();
  }, []);

  console.log("categories", categories);

  return (
    <AdminLayout>
      <div className="bg-gray-100 h-full">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-xl">Dishes category</h1>
          <div className="flex gap-2 flex-wrap ">
            <FoodCategories
              getCategories={getCategories}
              categories={categories}
              foods={foods}
            />
          </div>
        </div>
        {categories.map((category) => {
          return (
            <CategorizedFoods
              key={category._id}
              refetchFoods={() => getFoods()}
              foods={foods.filter(
                (food) => food.categoryId._id == category._id
              )}
              category={category}
            />
          );
        })}
      </div>
    </AdminLayout>
  );
}
