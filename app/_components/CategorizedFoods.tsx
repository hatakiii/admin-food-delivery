import { CategoryType, FoodType } from "@/lib/types";
import { CreateFoodDialog } from "./CreateFoodDialog";
import { LuPen } from "react-icons/lu";

import Image from "next/image";

export const CategorizedFoods = ({
  foods,
  category,
  refetchFoods,
}: {
  foods: FoodType[];
  category: CategoryType;
  refetchFoods: () => Promise<void>;
}) => {
  return (
    <div className=" border p-5 flex flex-col gap-4 rounded-lg bg-white">
      <h2>{category.name}</h2>
      <div className="flex flex-wrap gap-2">
        <CreateFoodDialog
          categoryId={category._id}
          refetchFoods={refetchFoods}
          categoryName={category.name}
        />

        {foods.map((food: FoodType) => (
          <div
            key={food._id}
            className="w-68 h-60 rounded-2xl flex flex-col border-1 p-4 gap-5"
          >
            <div className="w-60 h-32 relative">
              <Image
                src={food.imageUrl}
                alt="sth"
                fill
                className="w-full h-full object-fill rounded-xl "
              />
              <CreateFoodDialog
                categoryId={category._id}
                refetchFoods={refetchFoods}
                categoryName={category.name}
                food={food}
                triggerButton={
                  <button className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <LuPen className="w-4 h-4 text-red-500" />
                  </button>
                }
              />
            </div>

            <div className="w-60 h-15 flex flex-col gap-2">
              <div className="w-full h-5 flex">
                <h1 className="flex-1 text-red-600">{food.name}</h1>
                <p>${food.price}</p>
              </div>
              <div className="w-full h-8 ">{food.ingredients}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
