import { useEffect } from "react"
import { usePostsContext } from "../../context/postsContext"

interface PostContainerProps{
    titlee: string,
    prev: string
}
export const PostContainer = ({prev, titlee}: PostContainerProps) => {
    const {title, update} = usePostsContext()
    useEffect(() => {
    update('teste')
    }, [])
    return(
        <>
        <div className={`post-container w-full sm:w-9/12 rounded-2xl 
        bg-transparent mb-8`}>   
         <p className="p-2 text-blue-500 text-2xl hover:underline">{titlee}</p>

         <p className="p-2 text-white text-lg">{prev}</p>
        </div>
         </>
    )
}