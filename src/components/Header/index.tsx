"use client"
import logo from '../../../public/assets/icons/logo.svg'
import home from '../../../public/assets/icons/home.svg'
import Image from 'next/image'
import { useRouter} from 'next/navigation'
export const Header = () => {
    const route = useRouter()
    return(
        <header className={`w-full bg-opacity-60 bg-black h-10 fixed z-20 flex justify-between items-center px-4`}>
            <div>
              <Image alt='logo' src={logo} className='h-7 w-7'/>
            </div>
            <div>
            <Image alt='home' src={home} className='h-7 w-7 cursor-pointer' onClick={() => {route.push('/')}}/>
            </div>
        </header>
    )
}