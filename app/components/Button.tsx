import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
};

function Button({ onClick, children }: Props) {
  return (
    <button
      className="w-full p-3 bg-[#4FA3A5] text-[#EDEDED] rounded-lg cursor-pointer hover:bg-[#5FB385]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
