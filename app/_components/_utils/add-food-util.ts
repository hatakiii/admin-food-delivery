let backendUrl = "";

const env = process.env.NODE_ENV;
if (env == "development") {
  backendUrl = "http://localhost:4000";
} else if (env == "production") {
  backendUrl = "https://backend-food-delivery-two.vercel.app";
}

export const addFoodHandler = async (
  name: string,
  price: number,
  image: File,
  ingredients: string,
  category: string
) => {
  if (!name || !price || !image || !ingredients || !category) {
    alert("All fields are required");
    return;
  }

  const form = new FormData();

  form.append("name", name);
  form.append("price", String(price));
  form.append("image", image); // File object
  form.append("ingredients", ingredients);
  form.append("category", category);

  try {
    const response = await fetch(`${backendUrl}/api/food`, {
      method: "POST",
      body: form,
    });

    return await response.json();
  } catch (error) {
    alert("Failed to create food");
    console.log("error", error);
  }
};
