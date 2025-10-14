import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="h-21 bg-secondary flex justify-end items-center pr-10">
      <div className="w-9 h-9 rounded-full absolute top-6 right-10">
        <Image src="./Morty.svg" alt="profile picture" width={36} height={36} />
      </div>
    </div>
  );
};
