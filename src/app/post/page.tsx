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
    const bodyId = get('id')
    const [posts, setPosts] = useState([]);

    const callPost = async () => {
       const api = fetch(`/api/onePost?id=${bodyId}`, {method: 'POST'})
       const response = api.then((res) => res.json())
       const data = response.then((d) => setPosts(d))
       console.log(data);
    }

    useEffect(() => {
        try{
            callPost()
            
        } catch (error) {
            console.error(error);
        }
      }, [bodyId]);
    
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