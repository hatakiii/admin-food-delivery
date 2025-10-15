"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useEffect, useState } from "react";
import { CategoryType } from "../products/page";
import { GoPlus } from "react-icons/go";

export const CreateFoodDialog = () => {
  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [ingredients, setIngredients] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const getCategories = async () => {
    const response = await fetch("http://localhost:4000/api/categories");
    const data = await response.json();
    setCategories(data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const addFoodHandler = async () => {
    if (!name || !price || !image || !ingredients || !selectedCategory) {
      alert("All fields are required");
      return;
    }

    const form = new FormData();

    form.append("name", name);
    form.append("price", String(price));
    form.append("image", image); // File object
    form.append("ingredients", ingredients);
    form.append("categoryId", selectedCategory);

    try {
      const response = await fetch("http://localhost:4000/api/foods", {
        method: "POST",
        body: form,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Food created successfully!");
        setName("");
        setPrice(0);
        setImage(undefined);
        setIngredients("");
        setSelectedCategory(null);
      } else {
        alert(data.error || "Failed to create food");
      }
    } catch (error) {
      alert("Failed to create food");
    }
  };
  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  const ingredientsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIngredients(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="w-[270.75px] h-[241px] py-2 px-4 border border-dashed border-red-500 flex flex-col items-center justify-center gap-6 rounded-[20px]"
          // onClick={() => setIsOpen(true)}
        >
          <Button
            type="button"
            variant="destructive"
            className="w-10 h-10 rounded-full bg-red-500"
          >
            <GoPlus size={16} />
          </Button>
          <p className="w-[154px] text-center text-sm leading-5 font-medium text-secondary-foreground">
            Add new Dish to "{"Appetizers"}"
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Food</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              // defaultValue={name}
              value={name}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              // defaultValue="0"
              value={price}
              onChange={priceChangeHandler}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" onChange={fileChangeHandler} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="ingredients">Ingredients</Label>
            <Input
              id="ingredients"
              name="ingredients"
              value={ingredients}
              onChange={ingredientsChangeHandler}
            />
          </div>
          <div className="flex gap-3">
            {categories.length > 0 && (
              <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => {
                    return (
                      <SelectItem key={category._id} value={category._id}>
                        {category.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            )}
          </div>
          <Button
            type="submit"
            size={"sm"}
            className="w-fit px-4 py-[10px]"
            onClick={addFoodHandler}
          >
            <p className="leading-5"> Save changes</p>
          </Button>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
