"use client";

import React, { useEffect, useState } from "react";
import { AdminLayout } from "../_components";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { LuChevronsUpDown } from "react-icons/lu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

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
  deliveryAddress?: string;
  createdAt: string;
};

const Page = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    try {
      const result = await fetch(`${backendUrl}/api/order`);
      if (!result.ok) throw new Error(`HTTP error: ${result.status}`);
      const { data } = await result.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const changeStatus = async (orderId: string, newStatus: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${backendUrl}/api/order/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update status");

      const { order } = await response.json();

      setOrders((prev) =>
        prev.map((o) =>
          o._id === orderId ? { ...o, status: order.status } : o
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="w-full h-full flex flex-col bg-[#E4E4E7] p-4">
        {/* Header */}
        <div className="w-full flex items-center justify-between p-1 bg-white">
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Orders</h1>
            <p className="text-sm text-gray-600">{orders.length} items</p>
          </div>
          <div className="h-9 flex gap-3">
            <Button variant="outline">13 June 2023 - 14 July 2023</Button>
            <Button>Change delivery state</Button>
          </div>
        </div>

        {/* Column headers */}
        <div className="w-full h-13 flex bg-gray-100 mt-2">
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
            <div key={item._id} className="w-full flex border-b bg-white">
              <div className="flex items-center justify-center w-12 h-13">
                <Checkbox className="bg-white border-2 border-black" />
              </div>
              <div className="flex items-center justify-center w-14 h-13">
                <p>{index + 1}</p>
              </div>
              <div className="flex-1 flex items-center px-4">
                <p>{item.user?.email || "Unknown"}</p>
              </div>

              {/* Food Items */}
              <div className="w-40 flex items-center justify-between px-4">
                <p>{item.foodOrderItems.length} item(s)</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <LuChevronsUpDown />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 flex flex-col gap-2">
                    {item.foodOrderItems.map((orderItem) => (
                      <div
                        key={orderItem.food.name}
                        className="w-full flex items-center gap-3 border-b pb-2"
                      >
                        <Image
                          src={orderItem.food.imageUrl || "/placeholder.png"}
                          alt={orderItem.food.name}
                          width={32}
                          height={32}
                          className="rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{orderItem.food.name}</p>
                        </div>
                        <div className="font-semibold">
                          $
                          {(orderItem.food.price * orderItem.quantity).toFixed(
                            2
                          )}
                        </div>
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </div>

              {/* Date */}
              <div className="w-40 flex items-center justify-between px-4">
                <p>{new Date(item.createdAt).toLocaleDateString()}</p>
                <LuChevronsUpDown />
              </div>

              {/* Total */}
              <div className="w-40 flex items-center px-4">
                <p>${item.totalPrice}</p>
              </div>

              {/* Address */}
              <div className="flex-1 flex items-center px-4">
                <p>{item.deliveryAddress || "—"}</p>
              </div>

              {/* Status + Popover */}
              <div className="w-40 flex items-center justify-between px-4">
                <Button
                  disabled={loading}
                  // variant={
                  //   item.status === "DELIVERED"
                  //     ? "success"
                  //     : item.status === "CANCELLED"
                  //     ? "destructive"
                  //     : "secondary"
                  // }
                >
                  {item.status}
                </Button>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <LuChevronsUpDown />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 flex flex-col gap-2">
                    {["PENDING", "DELIVERED", "CANCELLED"].map((status) => (
                      <Button
                        key={status}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => changeStatus(item._id, status)}
                      >
                        {status}
                      </Button>
                    ))}
                  </PopoverContent>
                </Popover>
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
