"use client";
import { Badge } from "@/components/ui/badge";
import { AdminLayout } from "./_components/AdminLayout";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { CategoryType, FoodType } from "@/lib/types";
import { CategorizedFoods } from "./_components/CategorizedFoods";
import { FaPlus } from "react-icons/fa6";

export default function Page() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [newCategory, setNewCategory] = useState<string | undefined>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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

  const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };
  const createCategoryHandler = async () => {
    await fetch("http://localhost:4000/api/categories", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newCategory,
      }),
    });
    setModalOpen(false);
    await getCategories();
  };

  const deleteCategoryHandler = async (category: string) => {
    await fetch("http://localhost:4000/api/categories/delete", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(category),
    });
  };

  return (
    <AdminLayout>
      <div className="bg-gray-100 h-full">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-xl">Dishes category</h1>
          <div className="flex gap-2 flex-wrap ">
            {categories.map((category) => (
              <div
                className="flex items-center border-2 rounded-full p-2 py-0"
                key={category._id}
              >
                {category.name}
                <X
                  className="hover:bg-gray-400/20 w-4"
                  onClick={() => deleteCategoryHandler(category._id)}
                />
              </div>
            ))}
            <Dialog open={modalOpen}>
              <DialogTrigger asChild>
                <Badge
                  onClick={() => setModalOpen(true)}
                  variant={"outline"}
                  className="cursor-pointer hover:bg-gray-500/20 bg-red-600 w-9 h-9 rounded-full"
                >
                  <FaPlus className="w-4 h-4 text-white" />
                </Badge>
              </DialogTrigger>
              <DialogContent className="w-[463px] p-6">
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                </DialogHeader>
                <Input
                  type="text"
                  placeholder="new category"
                  onChange={newCategoryNameChangeHandler}
                />
                <Button onClick={createCategoryHandler}>Create</Button>
              </DialogContent>
            </Dialog>
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
