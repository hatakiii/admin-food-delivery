import { Sidebar, Header } from "@/app/_components";
import { ReactNode } from "react";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};
