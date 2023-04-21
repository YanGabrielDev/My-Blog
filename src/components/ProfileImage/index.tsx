import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { ModalImage } from "../ModalImage";

interface ProfileImageProps {
  image: string;
}
const inter = Inter({
  weight: [ "500"],
  subsets: ["latin"],
  display: "swap",
});
export const ProfileImage = ({ image }: ProfileImageProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const onClose = () => setOpenModal(false);
  
  return (
    <div
      className={`relative top-0 ml-8 text-center sm:flex `}
    >
      <div
        className={`h-[150px] w-[150px]  rounded-full bg-black flex justify-center items-center`}
      >
        <Image
          src={image}
          alt="profile"
          className="profile-image h-[136px] w-[136px] rounded-full cursor-pointer"
          onClick={() => setOpenModal(true)}
        />
        {openModal && <ModalImage image={image} alt="profile" close={onClose} />}
      </div>
      <div className=" flex flex-col sm:justify-center sm:ml-4 items-start sm:mt-0 mt-2">
      <h1 id="profile-name" className={`${inter.className} text-white text-5xl font-sans`}>Yan Gabriel</h1>
      <p className={`text-[#909090] ${inter.className} ml-[8px]`}>
        Front-end developer
      </p>
      </div>
    </div>
  );
};
