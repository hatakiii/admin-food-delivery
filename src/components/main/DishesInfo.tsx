export const DishesInfo = () => {
  return (
    <div className="w-[424px] h-[584px] bg-background-bg-background rounded-xl inline-flex flex-col justify-start items-start gap-3">
      <div className="self-stretch inline-flex justify-center items-center gap-2.5">
        <div className="flex-1 justify-start text-text-text-foreground text-lg font-semibold  leading-7">
          Dishes info
        </div>
        <div className="w-9 h-9 px-4 py-2 bg-background-bg-secondary rounded-full flex justify-center items-center gap-2">
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-2 h-2 left-[4px] top-[4px] absolute outline  outline-offset-[-0.50px] outline-text-text-secondary-foreground"></div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="self-stretch py-3 inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Dish name
          </div>
          <div className="w-72 self-stretch px-3 py-2 bg-background-bg-background rounded-md outline outline-offset-[-1px] outline-border-border-input flex justify-start items-center overflow-hidden">
            <div className="flex-1 justify-start text-text-text-foreground text-sm font-normal  leading-tight">
              Brie Crostini Appetizer
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Dish category
          </div>
          <div className="w-72 px-3 py-2 bg-background-bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline  outline-offset-[-1px] outline-border-border-input flex justify-between items-center overflow-hidden">
            <div className="w-28 px-2.5 py-0.5 bg-background-bg-secondary-90/90 rounded-full flex justify-start items-start gap-2.5">
              <div className="justify-start text-text-text-foreground text-xs font-semibold leading-none">
                Appetizer
              </div>
            </div>
            <div className="w-4 h-4 relative opacity-50 overflow-hidden">
              <div className="w-1.5 h-2.5 left-[5.12px] top-[3.25px] absolute bg-fill-foreground border border-border-border-foreground"></div>
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Ingredients
          </div>
          <div className="w-72 self-stretch min-h-20 px-3 py-2 bg-background-bg-background rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline  outline-offset-[-1px] outline-border-border-input inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch justify-start text-text-text-foreground text-sm font-normal  leading-tight">
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </div>
          </div>
        </div>
        <div className="self-stretch py-3 inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Price
          </div>
          <div className="w-72 self-stretch px-3 py-2 bg-background-bg-background rounded-md outline outline-offset-[-1px] outline-border-border-input flex justify-start items-center overflow-hidden">
            <div className="flex-1 justify-start text-text-text-foreground text-sm font-normal  leading-tight">
              $12.99
            </div>
          </div>
        </div>
        <div className="self-stretch h-36 py-3 relative inline-flex justify-start items-start gap-4">
          <div className="flex-1 justify-start text-text-text-muted-foreground text-xs font-normal  leading-none">
            Image
          </div>
          <img
            className="w-72 self-stretch min-h-20 p-4 rounded-md outline  outline-offset-[-1px] outline-blue-primary-20/20 inline-flex flex-col justify-center items-center gap-2"
            src="https://placehold.co/288x116"
          />
          <div className="w-9 h-9 px-4 py-2 left-[380px] top-[20px] absolute bg-background-bg-background rounded-full outline outline-offset-[-1px] outline-border-border-input flex justify-center items-center gap-2">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-2 h-2 left-[4px] top-[4px] absolute outline outline-offset-[-0.50px] outline-text-text-secondary-foreground"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch pt-6 inline-flex justify-between items-center">
        <div className="h-10 px-4 py-2 bg-background-bg-background rounded-md outline  outline-offset-[-1px] outline-border-border-destructive/50 flex justify-center items-center gap-2">
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-3 h-3.5 left-[2px] top-[1.33px] absolute outline  outline-offset-[-0.50px] outline-text-text-destructive"></div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="h-10 px-4 py-2 bg-zinc-900 rounded-md flex justify-center items-center gap-2">
            <div className="justify-start text-text-text-primary-foreground text-sm font-medium  leading-tight">
              Save changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
