"use client";
import React from "react";
import { AdminLayout } from "../_components";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <AdminLayout>
        <div className="max-w-292 h-full flex flex-col bg-[#E4E4E7]">
          <div className="w-full h-19 flex items-center justify-between">
            <div className="w-121 h-11">
              <h1>Orders</h1>
              <p>32 items</p>
            </div>
            <div className="w-123 h-9 flex gap-3">
              <Button variant={"outline"}>13 June 2023 - 14 July 2023</Button>
              <Button>Change delivery state</Button>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default page;
