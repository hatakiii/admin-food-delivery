import React from "react";
import Image from "next/image";
import { UserLogout } from "./UserLogout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const router = useRouter();
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      router.push("/login");
    } else {
      setUserEmail(email);
    }
  }, [router]);

  const onLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("/login");
  };
  return (
    <div className="h-21 bg-secondary flex justify-end items-center pr-10">
      <div className="w-9 h-9 rounded-full absolute top-6 right-10">
        <UserLogout userEmail={userEmail} onLogout={onLogout} />
      </div>
    </div>
  );
};
