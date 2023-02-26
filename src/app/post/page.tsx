"use client";
import { Content } from "@/components/content";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Posts } from "../../interfaces/postsInterface";
import { Loader } from "../../components/Loader";
export default function Post() {
  const { get } = useSearchParams();
  const bodyId = get("id");
  const [post, setPost] = useState<Array<Posts>>();
  const [isLoading, setIsLoading] = useState<boolean>();

  const callPost = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/onePost?id=${bodyId}`, {
      method: "POST",
    });
    const data = response.json();
    const post = data.then((p) => setPost(p));
    setIsLoading(false);
    return post;
  };

  useEffect(() => {
    try {
      callPost();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Content>
      <div className="w-full h-full pt-32">
        {isLoading && <Loader />}
        {post?.map((post: Posts, index) => {
          return (
            <>
              <div className="flex items-center flex-col">
                <h1 className="text-blue-500 text-2xl">{post.title}</h1>
              </div>
              {post.post.split("\n").map((line) => {
                return (
                  <>
                  <div>
                    <span className="text-white mt-4" key={index}>
                      {line}
                    </span>
                  </div>
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    </Content>
  );
}
