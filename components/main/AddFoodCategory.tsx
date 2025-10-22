import { useState, ChangeEvent } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaPlus } from "react-icons/fa6";
let backendUrl = "";

const env = process.env.NODE_ENV;
if (env == "development") {
  backendUrl = "http://localhost:4000";
} else if (env == "production") {
  backendUrl = "https://backend-food-delivery-one.vercel.app";
}

export const AddFoodCategory = ({
  getCategories,
}: {
  getCategories: () => Promise<void>;
}) => {
  const [newCategory, setNewCategory] = useState<string | undefined>();
  const createCategoryHandler = async () => {
    await fetch(`${backendUrl}/api/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newCategory }),
    });
    await getCategories();
  };
  const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Badge
            variant={"outline"}
            className="cursor-pointer hover:bg-gray-500/20 bg-red-600 w-9 h-9 rounded-full"
          >
            <FaPlus className="w-4 h-4 text-white" />
          </Badge>
        </DialogTrigger>
        <DialogContent className="w-[463px] p-6 ">
          <DialogHeader>
            <DialogTitle>Add new category</DialogTitle>
          </DialogHeader>
          <p>Category name</p>
          <Input
            type="text"
            placeholder="new category"
            onChange={newCategoryNameChangeHandler}
          />
          <Button onClick={createCategoryHandler}>Add category</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
