"use client"
import { Posts } from "@/interfaces/postsInterface";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
interface PostContext{
    posts: Array<Posts>,
    update: (c: Array<Posts>) => void
}

interface PostProvider{
    children: ReactNode
}
const PostContext = createContext<PostContext>({
      posts: [],
      update: () => []
})

export const PostProvider =  ({children}: PostProvider) => {

    const [posts, setPosts] = useState<Array<Posts>>([])
    const update = (c: Array<Posts>) => {
        setPosts(c)
    }
    return(
        <PostContext.Provider value={{posts, update}}>{children}</PostContext.Provider>
    )
}
export const usePostsContext = () => useContext(PostContext)