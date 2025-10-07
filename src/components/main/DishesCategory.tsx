import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const DishesCategory = () => {
  const categoryArray = [
    { name: "All dishes", count: 112, id: 1234 },
    { name: "Appetizers", count: 6, id: 1235 },
    { name: "Salads", count: 3, id: 1236 },
  ];
  return (
    <div className="w-[1171px] h-[176px] mt-[84px] p-6 flex flex-col gap-4">
      <h1 className="text-foreground text-xl font-semibold leading-7">
        Dishes category
      </h1>
      <div className="w-[1123px] h-[84px] flex gap-3">
        {categoryArray.map((catergory) => (
          <div
            className="flex h-9 items-center justify-center gap-2 p-4 text-sm font-medium rounded-full border-[1px] border-[#E4E4E7]"
            key={catergory.id}
          >
            <span>{catergory.name}</span>{" "}
            <span className="bg-black text-white rounded-full px-[10px] flex justify-center items-center">
              {catergory.count}
            </span>
          </div>
        ))}
        {/* Add button*/}

        <Dialog>
          <form>
            <DialogTrigger asChild>
              <div className="w-9 h-9  bg-red-500 rounded-full flex  justify-center items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  +
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Username</Label>
                  <Input
                    id="username-1"
                    name="username"
                    defaultValue="@peduarte"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
};
