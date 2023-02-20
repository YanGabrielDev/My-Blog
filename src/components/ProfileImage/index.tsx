import Image from "next/image";
import { Roboto, Raleway } from "@next/font/google";
import { useState } from "react";
import { ModalImage } from "../ModalImage";

interface ProfileImageProps {
  image: string;
}
const relaway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const ProfileImage = ({ image }: ProfileImageProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const onClose = () => setOpenModal(false);
  
  return (
    <div
      className={`relative bottom-20 text-center flex flex-col items-center`}
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
      <h3 className={`${relaway.className} text-white`}>Yan Gabriel</h3>
      <p className={`text-[#909090] ${relaway.className}`}>
        Front-end developer
      </p>
    </div>
  );
};
