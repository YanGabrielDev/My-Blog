import Image from "next/image"
import {ButtonHTMLAttributes} from 'react'
interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: string,
    altIcon: string,
    heightIcon?: string,
}
export const ButtonIcon = ({altIcon, heightIcon, icon, ...props}:ButtonIconProps) => {
    return(
        <button style={{backgroundColor: "transparent"}} {...props}>
            <Image src={icon} alt={altIcon} className={heightIcon ? heightIcon : 'h-8'}/>
        </button>
    )
}