import { DishesInfo } from "@/components/main";
import { AdminLayout } from "./_components/AdminLayout";

import { DishesCategory } from "@/components/main/DishesCategory";
import { AppetizersEdit } from "@/components/main/AppetizersEdit";
import { AddNewDishes } from "@/components/main";
import { AddedDishes } from "@/components/main/AddedDishes";
import { Container } from "@/components/container/Container";

export default function Home() {
  return (
    <AdminLayout>
      <div>
        <DishesCategory />
        {/* <AppetizersEdit />
        <AddedDishes /> */}
        <Container />
      </div>
    </AdminLayout>
  );
}
