import Image from "next/image"

interface WallpaperProps{
    image: string
}

export const Wallpaper = ({image}:WallpaperProps) => {
    return(
        <div className="w-full h-48 overflow-hidden relative mt-8 rounded-[14px]">
            <Image src={image} alt="forest" className="absolute rounded-2xl wallpaper h-full object-cover"/>
        </div>
    )
}