"use client";

import { CategoryType, FoodType } from "@/lib/types";

import { Badge } from "@/components/ui/badge";

import { X } from "lucide-react";
import { FaPen } from "react-icons/fa6";

import { AddFoodCategory } from "./AddFoodCategory";
let backendUrl = "";

const env = process.env.NODE_ENV;
if (env == "development") {
  backendUrl = "http://localhost:4000";
} else if (env == "production") {
  backendUrl = "https://backend-food-delivery-two.vercel.app";
}

export const FoodCategories = ({
  getCategories,
  categories,
  foods,
}: {
  getCategories: () => Promise<void>;
  categories: CategoryType[];
  foods: FoodType[];
}) => {
  const deleteCategoryHandler = async (id: string) => {
    if (!window.confirm("Delete this category?")) return;
    const res = await fetch(`${backendUrl}/api/categories?id=${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error);
      return;
    }
    alert("Category deleted");
    await getCategories();
  };

  const editCategoryHandler = async (id: string, currentName: string) => {
    const newName = prompt("Enter new category name:", currentName);
    if (!newName || newName.trim() === "") return;
    const res = await fetch(`${backendUrl}/api/categories`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, newName }),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "Failed to edit category");
      return;
    }
    alert("Category updated successfully!");
    await getCategories();
  };

  return (
    <div className="flex">
      {categories.map((category) => {
        const foodCount = foods.filter(
          (food) => food.categoryId._id === category._id
        ).length;

        return (
          <div
            key={category._id}
            className="flex items-center gap-2 border-2 rounded-full px-3 py-1"
          >
            <span>{category.name}</span>
            <Badge className="bg-white text-sm text-amber-500">
              {foodCount}
            </Badge>
            <X
              className="hover:bg-gray-400/20 w-4 cursor-pointer"
              onClick={() => deleteCategoryHandler(category._id)}
            />
            <FaPen
              className="cursor-pointer"
              onClick={() => editCategoryHandler(category._id, category.name)}
            />
          </div>
        );
      })}
      <AddFoodCategory getCategories={getCategories} />
    </div>
  );
};
