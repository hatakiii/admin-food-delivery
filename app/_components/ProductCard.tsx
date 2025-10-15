import React from "react";
import Image from "next/image";

interface Food {
  _id?: string;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: string;
  category?: string;
  createdAt?: Date;
  updated?: Date;
}

export const ProductCard = () => {
  const [foods, setFoods] = React.useState<Food[]>([]);

  const getFoods = async () => {
    const res = await fetch("http://localhost:4000/api/foods");
    const resData = await res.json();
    const { data } = resData;
    console.log(data, "data");

    setFoods(data);
  };
  React.useEffect(() => {
    getFoods();
  }, []);

  console.log("foods", foods);
  return (
    <div className="flex gap-2 flex-wrap">
      {foods.map((food) => (
        <div
          key={food._id}
          className="w-[270.75px] p-4 border border-border rounded-[20px] flex flex-col gap-5"
        >
          <div className="w-full h-[129px] rounded-xl relative overflow-hidden">
            {food.imageUrl && (
              <Image
                src={food.imageUrl}
                alt="imagePreview"
                fill
                objectFit="cover"
              />
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="text-sm leading-5 font-medium text-red-500 flex-1 items-center">
                {food.name}
              </div>
              <div className="text-xs leading-4 text-foreground">
                ${food.price}
              </div>
            </div>
            <div className="text-xs leading-4 text-foreground">
              {food.ingredients}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
