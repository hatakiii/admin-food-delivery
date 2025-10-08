import { useEffect, useState } from "react";
import { AdminLayout } from "../_components/AdminLayout";

export const productsPage = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const getCategories = async()=>{
    const result = await fetch("http://localhost:4000/categories")
    const responseData = result.json()
    // const {data} = responseData
  }
  useEffect(()=>{
    getCategories()
  },[])
  return (
    <AdminLayout>
      <div>Products page</div>
    </AdminLayout>
  );
};
export default productsPage;
