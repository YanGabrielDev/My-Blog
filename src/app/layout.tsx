import { PostProvider } from "@/context/postsContext";
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
        <div className="h-full">
          <PostProvider>
          {children}
          </PostProvider>
          </div>
      </body>
    </html>
  );
}
