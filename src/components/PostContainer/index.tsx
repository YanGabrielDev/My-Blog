interface PostContainerProps{
    title: string,
    prev: string
}
export const PostContainer = ({prev, title}: PostContainerProps) => {
    return(
        <div className={`post-container w-full sm:w-9/12 rounded-2xl 
        bg-[#2B2A2A] px-4 m-0 sm:m-auto my-0 mb-4`}>   
         <p className="p-2 text-white text-2xl">{title}</p>
         <hr/>
         <p className="p-2 text-white text-lg">{prev}</p>
        </div>
    )
}