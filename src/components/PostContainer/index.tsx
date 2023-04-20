import Link from "next/link";

interface PostContainerProps {
  title: string;
  prev: string;
  onClick?: () => void;
  query: string
}
export const PostContainer = ({ prev, title, onClick, query}: PostContainerProps) => {
  return (
    <>
      <div
        className={`post-container w-full sm:w-9/12 rounded-2xl 
        bg-transparent mb-8`}
      >
        <Link
          href={{ pathname: "/post", query: {id: query}}}
          className="p-2 text-blue-500 text-2xl hover:underline"
          onClick={onClick}
          style={{
            lineHeight: "0px"
          }}
        >
          <h2>{title}</h2>
        </Link>
        <p className="p-2 text-white text-lg">{prev}</p>
      </div>
    </>
  );
};
