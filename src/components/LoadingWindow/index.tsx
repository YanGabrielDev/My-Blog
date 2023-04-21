import { Loader } from "@/components/Loader";


export const LoadingWindow = () => {
    return (
        <div className="h-full w-full flex justify-center items-center absolute bg-black">
            <Loader />
        </div>
    ) 
};