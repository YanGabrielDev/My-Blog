"use client"
import { Content } from '@/components/content'
import { Wallpaper } from '@/components/Wallpaper'
import wallpaperImage from '../../public/images/wallpaper.jpg'
import profileImage from '../../public/images/profile.jpeg'
import { ProfileImage } from '@/components/ProfileImage'
import { PostContainer } from '@/components/PostContainer'
import { useEffect } from 'react'
import { usePostsContext } from '../context/PostContext/postsContext'
import logo from '../../public/assets/icons/logo.svg'
import Image from 'next/image'

export default function Home() {
  const { update, title} = usePostsContext()
  const callPosts = async () => {
    const response = fetch('/api/posts', {
      next: {
        revalidate: 60
      }
    })
    const data = (await response).json()
    const posts = data.then(p => update(p))
   
  }
  useEffect(() => {
    callPosts()
  },[])
  console.log(title)
  return (
   <Content>
    <div className='flex flex-col items-center'>
    {/* <Image src={logo} alt="logo"/> */}
    <Wallpaper image={wallpaperImage} />
    <ProfileImage image={profileImage}/>
    </div>
    <PostContainer title={'teste'} prev='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure placeat soluta libero vel, pariatur quidem officiis quas expedita dignissimos beatae inventore praesentium quia deserunt earum quae recusandae obcaecati voluptatem.
'/>
    <PostContainer title='Title' prev='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure placeat soluta libero vel, pariatur quidem officiis quas expedita dignissimos beatae inventore praesentium quia deserunt earum quae recusandae obcaecati voluptatem.
'/>
   </Content>
    )
}
