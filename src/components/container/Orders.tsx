import { Button } from "../ui/button";
export const Orders = () => {
  return (
    <div className="w-293 h-19 flex items-center justify-between">
      <div className="w-121 h-11 ">
        <p className="text-foreground text-xl font-bold leading-7">Orders</p>
        <h1 className="text-muted-foreground text-xs font-medium leading-none">
          32 items
        </h1>
      </div>
      <div className="w-132 h-9 flex items-center justify-between">
        {/* Orders Date */}
        <div className="w-75 h-9 flex items-center">
          13-June-2023 - 14-July-2023
        </div>
        <Button>
          Change delivery state <span>1</span>
        </Button>
      </div>
    </div>
  );
};
