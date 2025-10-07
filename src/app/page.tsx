import { DishesInfo } from "@/components/main";
import { AdminLayout } from "./_components/AdminLayout";

import { DishesCategory } from "@/components/main/DishesCategory";
import { AppetizersEdit } from "@/components/main/AppetizersEdit";

export default function Home() {
  return (
    <AdminLayout>
      <div>
        <DishesCategory />
        <AppetizersEdit />
      </div>
    </AdminLayout>
  );
}
