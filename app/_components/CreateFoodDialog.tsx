import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";
import { GoPlus } from "react-icons/go";
import { FoodType } from "@/lib/types";

type Props = {
  categoryId: string;
  refetchFoods: () => Promise<void>;
  categoryName: string;
  food?: FoodType; // optional — for edit mode
  triggerButton?: React.ReactNode; // for ✏️ icon trigger
};

export const CreateFoodDialog = ({
  categoryId,
  refetchFoods,
  categoryName,
  food,
  triggerButton,
}: Props) => {
  const isEditing = !!food;
  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string>(food?.name || "");
  const [price, setPrice] = useState<number>(food?.price || 0);
  const [ingredients, setIngredients] = useState<string>(
    food?.ingredients || ""
  );
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!name || !price || (!image && !isEditing) || !ingredients) {
      alert("All fields are required");
      return;
    }

    const form = new FormData();
    form.append("name", name);
    form.append("price", String(price));
    if (image) form.append("image", image);
    form.append("ingredients", ingredients);
    form.append("categoryId", categoryId);

    try {
      const response = await fetch(
        isEditing
          ? `http://localhost:4000/api/food/${food?._id}`
          : `http://localhost:4000/api/food`,
        {
          method: isEditing ? "PUT" : "POST",
          body: form,
        }
      );

      const data = await response.json();
      if (response.ok) {
        await refetchFoods();
        setOpen(false);
      } else {
        alert(data.error || "Failed to save food");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const handleDelete = async () => {
    if (!food) return;
    if (!confirm(`Delete "${food.name}"?`)) return;

    try {
      const res = await fetch(`http://localhost:4000/api/food/${food?._id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        await refetchFoods();
        setOpen(false);
      } else {
        alert("Failed to delete food");
      }
    } catch (err) {
      alert("Error deleting food");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isEditing ? (
          triggerButton
        ) : (
          <div
            onClick={() => setOpen(true)}
            className="w-[270.75px] h-[241px] py-2 px-4 border border-dashed border-red-500 flex flex-col items-center justify-center gap-6 rounded-[20px] cursor-pointer"
          >
            <Button
              type="button"
              variant="destructive"
              className="w-10 h-10 rounded-full bg-red-500"
            >
              <GoPlus size={16} />
            </Button>
            <p className="w-[154px] text-center text-sm leading-5 font-medium text-secondary-foreground">
              Add new Dish to “{categoryName}”
            </p>
          </div>
        )}
      </DialogTrigger>

      <DialogContent className="w-118 min-h-148 absolute gap-0">
        <DialogHeader className="w-103 h-13">
          <DialogTitle className="font-semibold text-[#09090B] text-xl leading-none w-103 h-13">
            {isEditing ? "Dishes Info" : "Create Food"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="w-103 h-15 flex gap-6">
            <div className="flex flex-col gap-3">
              <Label htmlFor="name" className="">
                Food name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-48"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-48"
              />
            </div>
          </div>

          <div className="w-103 h-28 flex flex-col gap-3">
            <Label htmlFor="ingredients">Ingredients</Label>
            <Input
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="h-22"
            />
          </div>

          <div className="flex flex-col w-103 h-40 gap-3">
            <Label htmlFor="picture">Food image</Label>
            <Input
              id="picture"
              type="file"
              onChange={handleFileChange}
              className="h-34"
            />
            {food?.imageUrl && !image && (
              <img
                src={food.imageUrl}
                alt=""
                className="w-full h-32 object-cover rounded-md mt-2"
              />
            )}
          </div>
          <div className="w-103 h-16"></div>
          <div className="flex justify-between w-106 h-10 absolute bottom-6 right-6">
            {isEditing ? (
              <Button
                variant="destructive"
                type="button"
                size="sm"
                onClick={handleDelete}
              >
                Delete
              </Button>
            ) : (
              <div className="w-12 h-10"></div>
            )}
            <Button
              type="button"
              size="sm"
              className="w-fit px-4 py-[10px] "
              onClick={handleSubmit}
            >
              {isEditing ? "Save changes" : "Create"}
            </Button>
          </div>
        </div>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
