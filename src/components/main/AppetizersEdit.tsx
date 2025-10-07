import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { DishesInfo } from "@/components/main";

export const AppetizersEdit = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-[270.15px] h-[241px] self-stretch px-4 py-2 rounded-[20px] outline inline-flex flex-col justify-center items-center gap-6 overflow-hidden border-dashed">
            <button className="w-10 h-10  bg-red-500 rounded-full flex  justify-center items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">+</div>
            </button>

            <div className="w-[154px] h-[40px] text-center justify-start text-text-text-secondary-foreground text-sm font-medium leading-tight">
              Add new Dish to Appetizers
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription asChild className="w-[472px] h-[596px]">
              <DishesInfo />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
