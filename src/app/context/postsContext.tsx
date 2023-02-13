"use client"
import { createContext, ReactNode, useContext, useState } from "react";
interface PostContext{
    title: string,
    prev?: string
}

const PostContext = createContext<PostContext>({
    prev: '',  title: ''
})

export const PostProvider = async (children: any) => {
    const response = await fetch('http://localhost:3000/api/posts')
    const data = response.json()
    data.then(post => setTitle(post.posts))
    const [title, setTitle] = useState('')
    return(
        <PostContext.Provider value={{title}}>{children}</PostContext.Provider>
    )
}
export const usePostsContext = () => useContext(PostContext)