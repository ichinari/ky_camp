import { ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  isActive?: Boolean;
  onClick?: () => void;
  children: ReactNode;
};

function Button({
  type = "button",
  isActive = false,
  onClick,
  children,
}: Props) {
  return (
    <button
      type={type}
      className={`w-full p-3 rounded-lg cursor-pointer flex items-center justify-center gap-2 ${
        isActive
          ? "bg-[#4FA3A5] text-[#EDEDED]"
          : "bg-transparent text-[#9A9A9A] border border-[#2A2A2A]"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
