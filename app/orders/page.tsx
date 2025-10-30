"use client";
import React, { useEffect, useState } from "react";
import { AdminLayout } from "../_components";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { LuChevronsUpDown } from "react-icons/lu";

let backendUrl = "";

const env = process.env.NODE_ENV;
if (env === "development") {
  backendUrl = "http://localhost:4000";
} else if (env === "production") {
  backendUrl = "https://backend-food-delivery-two.vercel.app";
}

type OrderType = {
  _id: string;
  user: {
    email?: string;
    name?: string;
  };
  foodOrderItems: {
    food: {
      name: string;
      price: number;
      imageUrl?: string;
    };
    quantity: number;
  }[];
  totalPrice: number;
  status: "PENDING" | "DELIVERED" | "CANCELLED";
  address?: string;
  createdAt: string;
};

const Page = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  const getOrders = async () => {
    try {
      const result = await fetch(`${backendUrl}/api/order`);
      if (!result.ok) {
        throw new Error(`HTTP error: ${result.status}`);
      }
      const { data } = await result.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const changeStatus = () => {
    console.log("change status");
  };

  console.log("orders", orders);

  return (
    <AdminLayout>
      <div className="w-full h-full flex flex-col bg-[#E4E4E7] p-4">
        {/* Header */}
        <div className="w-full h-19 flex items-center justify-between  p-1 bg-white">
          <div className="w-121 h-11 flex-1">
            <h1>Orders</h1>
            <p>{orders.length} items</p>
          </div>
          <div className="h-9 flex gap-3">
            <Button variant="outline">13 June 2023 - 14 July 2023</Button>
            <Button>Change delivery state</Button>
          </div>
        </div>

        {/* Column headers */}
        <div className="w-full h-13 flex ">
          <div className="flex items-center justify-center w-12 h-full">
            <Checkbox className="bg-white border-2 border-black" />
          </div>
          <div className="flex items-center justify-center w-14 h-full">
            <p>№</p>
          </div>
          <div className="flex-1 flex items-center px-4">
            <p className="font-medium leading-5">Customer</p>
          </div>
          <div className="w-40 flex items-center px-4">
            <p className="font-medium leading-5">Food</p>
          </div>
          <div className="w-40 flex items-center justify-between px-4">
            <p className="font-medium leading-5">Date</p>
            <LuChevronsUpDown />
          </div>
          <div className="w-40 flex items-center px-4">
            <p className="font-medium leading-5">Total</p>
          </div>
          <div className="flex-1 flex items-center px-4">
            <p className="font-medium leading-5 whitespace-nowrap">
              Delivery Address
            </p>
          </div>
          <div className="w-40 flex items-center justify-between px-4">
            <p className="font-medium leading-5">Delivery state</p>
            <LuChevronsUpDown />
          </div>
        </div>

        {/* Dynamic order rows */}
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <div key={item._id} className="w-full h-13 flex border-b bg-white">
              <div className="flex items-center justify-center w-12 h-full">
                <Checkbox className="bg-white border-2 border-black" />
              </div>
              <div className="flex items-center justify-center w-14 h-full">
                <p>{index + 1}</p>
              </div>
              <div className="flex-1 flex items-center px-4">
                <p>{item.user?.email || "Unknown"}</p>
              </div>
              <div className="w-40 flex items-center px-4">
                <p>{item.foodOrderItems.length} item(s)</p>
              </div>
              <div className="w-40 flex items-center justify-between px-4">
                <p>{new Date(item.createdAt).toLocaleDateString()}</p>
                <LuChevronsUpDown />
              </div>
              <div className="w-40 flex items-center px-4">
                <p>${item.totalPrice}</p>
              </div>
              <div className="flex-1 flex items-center px-4">
                <p>{item.address || "—"}</p>
              </div>
              <div className="w-40 flex items-center justify-between px-4">
                <Button onClick={changeStatus}>{item.status}</Button>
                <LuChevronsUpDown />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-6">No orders found</div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Page;
