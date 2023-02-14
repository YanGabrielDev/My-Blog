"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
interface PostContext{
    title: string,
    update: (c: string) => void
}

interface PostProvider{
    children: ReactNode
}
const PostContext = createContext<PostContext>({
      title: '',
      update: (c) => ''
})

export const PostProvider =  ({children}: PostProvider) => {

    const [title, setTitle] = useState('')
    const update = (c: string) => {
        setTitle(c)
    }
    return(
        <PostContext.Provider value={{title, update}}>{children}</PostContext.Provider>
    )
}
export const usePostsContext = () => useContext(PostContext)