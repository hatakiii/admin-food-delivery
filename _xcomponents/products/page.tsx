"use client";
import { Badge } from "@/components/ui/badge";
import { AdminLayout } from "../_components/AdminLayout";
import { CreateFoodDialog } from "../_components/CreateFoodDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { ProductCard } from "../_components/ProductCard";
import { FaPlus } from "react-icons/fa6";

export type CategoryType = {
  name: string;
  _id: string;
};

export default function ProductPage() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [newCategory, setNewCategory] = useState<string | undefined>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();
    console.log({ responseData });
    const { data } = responseData;
    console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
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
      <div>
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-xl">Dishes category</h1>
          <div className="flex gap-2 flex-wrap ">
            {categories.map((category, index) => (
              <div
                className="h-9 px-4 py-2 bg-background-bg-background rounded-full outline outline-offset-[-1px] outline-border-border-border inline-flex justify-start items-center gap-2"
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

        <div className="flex gap-2">
          {/* <CreateFoodDialog /> */}
          <ProductCard />
        </div>
      </div>
    </AdminLayout>
  );
}
