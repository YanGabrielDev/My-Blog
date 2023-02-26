"use client"
import { Content } from "@/components/content"
import { useContext, useEffect, useState } from "react"
import {PostContext} from '../../context/PostContext/postsContext'
import {useSearchParams } from "next/navigation"
import {Posts} from '../../interfaces/postsInterface'
export default function Post (){
    const {get} = useSearchParams()
    const {selectedPost} = useContext(PostContext)
    const bodyId = get('id')
    const [post, setPost] = useState<Array<Posts>>();

    const callPost = async () => {
       const response = await fetch(`/api/onePost?id=${bodyId}`, {method: 'POST'})
       const data = response.json()
       const post = data.then(p => setPost(p))
       return post
    }
   console.log('meu state:',post);
   
    useEffect(() => {
        try{
            callPost()
        } catch (error) {
            console.error(error);
        }
      }, []);
    
    return(
        <Content>
            <div className="flex items-center w-full h-full flex-col pt-32">
            <div>
            {post?.map((post:Posts, index) => {
                return(
                    <>
                    <h1 className="text-blue-500 text-2xl">{post.title}</h1>
                    <span className="text-white mt-4" key={index}>{post.post.split('\n')}</span>
                    </>
                )
            })}
            </div>
            </div>
        </Content>
    )
}