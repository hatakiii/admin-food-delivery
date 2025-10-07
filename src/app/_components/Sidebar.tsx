import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className=" sm:w-[205px] w-[1/6] h-screen flex flex-col items-center">
      <div className="flex w-[165px] h-[44px] gap-2 mb-10 mt-9">
        <div className="w-10 h-10 flex items-center justify-center">
          <img src="./NomNomLogo.svg" alt="main logo" width={40} height={40} />
        </div>
        <div className="flex flex-col">
          <p className="text-text-text-foreground text-lg font-semibold leading-7">
            Nom Nom
          </p>
          <p className="text-muted-foreground text-xs font-normal leading-none">
            Swift delivery
          </p>
        </div>
      </div>
      <div className="w-[165px] h-[104px]">
        {/* Food menu */}
        <button className="w-[165px] h-[40px] rounded-full px-6 gap-[10px] flex items-center bg-[#18181B] text-white mb-6">
          <img src="./Dashboard Icon.svg" alt="" width={22} height={22} />

          <span className="text-text-text-primary-foreground text-sm font-medium leading-tight whitespace-nowrap">
            Food menu
          </span>
        </button>
        {/* Orders button */}
        <button className="w-[165px] h-[40px] rounded-full pr-6 gap-[10px] flex items-center  ">
          <img
            src="./Truck Icon.svg"
            alt=""
            width={22}
            height={22}
            className="ml-6"
          />

          <span className="text-text-text-primary-foreground text-sm font-medium leading-tight whitespace-nowrap">
            Orders
          </span>
        </button>
      </div>
    </div>
  );
};
