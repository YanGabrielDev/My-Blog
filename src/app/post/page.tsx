"use client"
import { Content } from "@/components/content"
import { useContext, useEffect, useState } from "react"
import {PostContext} from '../../context/PostContext/postsContext'
import { useRouter, useSearchParams } from "next/navigation"
export default function Post (){
    const {get} = useSearchParams()
    const {selectedPost} = useContext(PostContext)
    const {id, post, title} = selectedPost
    const brakline = post.split('\n')
    
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/onePost', {
        method: 'POST',
        body: JSON.stringify({ id: 'lT7BLfvYmisKFGALcDlY' }), 
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
  }, []);
    
    return(
        <Content>
            <div className="flex items-center w-full h-full flex-col pt-32">
            <h1 className="text-blue-500 text-2xl">{title}</h1>
            <div>
            {brakline.map((line, index) => {
                return(
                    <>
                    <span className="text-white mt-4" key={index}>{line}</span>
                    </>
                )
            })}
            </div>
            </div>
        </Content>
    )
}