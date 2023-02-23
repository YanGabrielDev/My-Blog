"use client"

import { Content } from "@/components/content"
import {usePostsContext} from '../../context/PostContext/postsContext'
export default function Post (){
    const {selectedPost} = usePostsContext()
    const {id, post, title} = selectedPost
    const brakline = post.split('\n')
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