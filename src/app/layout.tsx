import { PostProvider } from "@/context/PostContext/postsContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="h-screen">
          <PostProvider>
          {children}
          </PostProvider>
          </div>
      </body>
    </html>
  );
}
