import Image from "next/image";
import { useState } from "react";
import { ModalImage } from "../ModalImage";

interface WallpaperProps {
  image: string;
}

export const Wallpaper = ({ image }: WallpaperProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const onClose = () => setOpenModal(false);

  return (
    <div className="w-full h-48 overflow-hidden relative mt-8 rounded-[14px]">
      <Image
        src={image}
        alt="forest"
        className={`absolute rounded-2xl wallpaper h-full object-cover cursor-pointer`}
        onClick={() => setOpenModal(true)}
      />
      {openModal && (
        <ModalImage alt="wallpaper" close={onClose} image={image} />
      )}
    </div>
  );
};
