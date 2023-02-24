import Link from "next/link";

interface PostContainerProps {
  title: string;
  prev: string;
  onClick: () => void;
}
export const PostContainer = ({ prev, title, onClick }: PostContainerProps) => {
  return (
    <>
      <div
        className={`post-container w-full sm:w-9/12 rounded-2xl 
        bg-transparent mb-8`}
      >
        <Link
          href={{ pathname: "/post"}}
          className="p-2 text-blue-500 text-2xl hover:underline"
          onClick={onClick}
        >
          {title}
        </Link>
        <p className="p-2 text-white text-lg">{prev}</p>
      </div>
    </>
  );
};
