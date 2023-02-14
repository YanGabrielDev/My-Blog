"use client"
import { Inter } from '@next/font/google'
import { Content } from '@/components/content'
import { Wallpaper } from '@/components/Wallpaper'
import wallpaperImage from '../../public/images/wallpaper.jpg'
import profileImage from '../../public/images/profile.jpeg'
import { ProfileImage } from '@/components/ProfileImage'
import { PostContainer } from '@/components/PostContainer'
import { useEffect } from 'react'
import { usePostsContext } from '../context/postsContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const callPosts = async () => {
    const response = fetch('/api/posts')
    const data = (await response).json()
    const posts = data.then(p => console.log(p))
   
  }
  useEffect(() => {
    callPosts()
  },[])

  return (
   <Content>
    <div className='flex flex-col items-center'>
    <Wallpaper image={wallpaperImage} />
    <ProfileImage image={profileImage}/>
    </div>
    <PostContainer titlee='Title' prev='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure placeat soluta libero vel, pariatur quidem officiis quas expedita dignissimos beatae inventore praesentium quia deserunt earum quae recusandae obcaecati voluptatem.
'/>
   </Content>
    )
}
