import Image from "next/image";
import { ReactNode, useState } from "react";
import { ModalImage } from "../ModalImage";

interface WallpaperProps {
  image: string;
  children: ReactNode
}

export const Wallpaper = ({ image, children }: WallpaperProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const onClose = () => setOpenModal(false);

  return (
    <div className="w-full h-[14rem] overflow-hidden relative mt-14 rounded-[14px] flex flex-col justify-center">
      <Image
        src={image}
        alt="forest"
        className={`absolute rounded-2xl wallpaper h-full object-cover cursor-pointer`}
        onClick={() => setOpenModal(true)}
      />
      {children}
      {openModal && (
        <ModalImage alt="wallpaper" close={onClose} image={image} />
      )}
    </div>
  );
};
