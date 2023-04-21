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
import { LoadingWindow } from "@/components/LoadingWindow";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { update, posts } = usePostsContext();

  const callPosts = async () => {
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
      setIsLoading(true);
      callPosts();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }, []);

  return isLoading ? (
    <LoadingWindow />
  ) : (
    <Content>
      <div className="flex flex-col">
        <Wallpaper image={wallpaperImage}>
          <ProfileImage image={profileImage} />
        </Wallpaper>
      </div>
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
  );
}
