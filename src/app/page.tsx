"use client";
import { Content } from "@/components/content";
import { Wallpaper } from "@/components/Wallpaper";
import wallpaperImage from "../../public/images/wallpaper.jpg";
import profileImage from "../../public/images/profile.jpeg";
import { ProfileImage } from "@/components/ProfileImage";
import { PostContainer } from "@/components/PostContainer";
import { useEffect, useState } from "react";
import { usePostsContext } from "../context/PostContext/postsContext";
import { Loader } from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { update, posts, showSelectPost } = usePostsContext();
  const callPosts = async () => {
    setIsLoading(true);
    const response = fetch("/api/posts", {
      next: {
        revalidate: 60,
      },
    });
    const data = (await response).json();
    const posts = data.then((p) => update(p));
    setIsLoading(false);
  };
  useEffect(() => {
    try {
      callPosts();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <Content>
        <div className="flex flex-col">
          <Wallpaper image={wallpaperImage}>
            <ProfileImage image={profileImage} />
          </Wallpaper>
        </div>
        {isLoading && <Loader />}
        <div className="mt-12">
          {posts.map((post) => {
            return (
              <>
                <PostContainer
                  key={post.id}
                  title={post.title}
                  prev={post.preview}
                  query={post.id}
                />
              </>
            );
          })}
        </div>
      </Content>
    </>
  );
}
