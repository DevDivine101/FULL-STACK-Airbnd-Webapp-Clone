"use client";
import Profile from "../../public/images/logo (2).png"
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full "
      height="39"
      width="39"
      alt="Avatar"
      src={Profile}
    
    />
  );
};

export default Avatar;
