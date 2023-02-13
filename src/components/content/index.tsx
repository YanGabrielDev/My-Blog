import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}
export const Content = ({ children }: ContentProps) => {
  return (
    <div className={`max-w-5xl h-full d-flex m-auto my-0 px-[10px]`}>{children}</div>
  );
};
