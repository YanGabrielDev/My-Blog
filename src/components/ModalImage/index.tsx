import Image from "next/image";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import closeIcon from "../../../public/assets/icons/close.svg";
import { ButtonIcon } from "../ButtonIcon";
interface ModalImageProps {
  image: string;
  alt: string;
  close: () => void;
}
export const ModalImage = ({ image, alt, close }: ModalImageProps) => {
  return (
    <div
      className={`fixed w-full h-full bg-opacity-80 bg-black flex justify-center items-center z-30 top-0 left-0`}
    >
      <Image alt={alt} src={image} className="max-w-md"/>
      <ButtonIcon icon={closeIcon} altIcon='close' onClick={() => close()} className="top-2 right-4 absolute"/>
    </div>
  );
}
