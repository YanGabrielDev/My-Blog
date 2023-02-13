import Image from "next/image";
import { Roboto, Raleway } from '@next/font/google'


interface ProfileImageProps {
  image: string;
}
const relaway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
  });
export const ProfileImage = ({image}: ProfileImageProps) => {

  return (
    <div className={`relative bottom-40 text-center flex flex-col items-center`}>
    <div
      className={`h-[150px] w-[150px]  rounded-full bg-black flex justify-center items-center`}
    >
        <Image src={image} alt="profile" className="profile-image h-[136px] w-[136px] rounded-full"/>
    </div>
    <h3 className={`${relaway.className} text-white`}>Yan Gabriel</h3>
    <p className={`text-[#909090] ${relaway.className}`}>Front-end developer</p>
    </div>
  );
};
