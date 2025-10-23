"use client";

import { AdminLayout } from "./_components/AdminLayout";

import { useEffect, useState } from "react";

import { CategoryType, FoodType } from "@/lib/types";
import { CategorizedFoods } from "./_components/CategorizedFoods";

import { FoodCategories } from "@/components/main";

import { Badge } from "@/components/ui/badge";
import { FaPlus } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";
import { Divide } from "lucide-react";

let backendUrl = "";

const env = process.env.NODE_ENV;
if (env == "development") {
  backendUrl = "http://localhost:4000";
} else if (env == "production") {
  backendUrl = "https://backend-food-delivery-two.vercel.app";
}

export default function Page() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [foods, setFoods] = useState<FoodType[]>([]);
  const [categoryLoading, setCategoryLoading] = useState<boolean>(false);
  const [foodLoading, setFoodLoading] = useState<boolean>(false);

  const getCategories = async () => {
    setCategoryLoading(true);
    const result = await fetch(`${backendUrl}/api/categories`);
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
    setCategoryLoading(false);
  };

  const getFoods = async () => {
    setFoodLoading(true);
    const result = await fetch(`${backendUrl}/api/food`);
    const responseData = await result.json();
    setFoods(responseData.data);
    setFoodLoading(false);
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
            {categoryLoading ? (
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-9 w-24 rounded-full bg-gray-300"
                  />
                ))}
              </div>
            ) : (
              <FoodCategories
                getCategories={getCategories}
                categories={categories}
                foods={foods}
              />
            )}
          </div>
        </div>
        {foodLoading ? (
          [...Array(5)].map((_, h) => (
            <div key={h} className="flex flex-col gap-4 p-5">
              <Skeleton className="w-25 h-7 rounded-2xl bg-gray-300" />
              <div className="flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <Skeleton
                    key={i}
                    className="w-68 h-60 rounded-xl bg-gray-300"
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <>
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
          </>
        )}
      </div>
    </AdminLayout>
  );
}
