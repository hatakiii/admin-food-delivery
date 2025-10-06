import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="bg-red-500 w-1/6 h-screen">
      Sidebar
      <div>
        <Image
          src="public/NomNomLogo.png"
          alt="main logo"
          width={40}
          height={40}
        />
        <span>Nom Nom</span>
        <span>Swift delivery</span>
      </div>
    </div>
  );
};
