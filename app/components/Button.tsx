import { ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
};

function Button({ type = "button", onClick, children }: Props) {
  return (
    <button
      type={type}
      className="w-full p-3 bg-[#4FA3A5] text-[#EDEDED] rounded-lg cursor-pointer hover:bg-[#5FB385]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
