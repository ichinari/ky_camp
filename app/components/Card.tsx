import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: Props) {
  return (
    <div
      className={`w-96 mx-auto bg-[#1A1A1A] rounded-lg p-4 border border-[#2A2A2A] ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
