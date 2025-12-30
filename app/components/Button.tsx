import { ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

function Button({
  type = "button",
  isActive = false,
  isDisabled = false,
  onClick,
  children,
}: Props) {
  return (
    <button
      type={type}
      className={`w-full p-3 rounded-lg flex items-center justify-center gap-2 ${
        isDisabled
          ? "bg-[#2A2A2A] text-[#6A6A6A] cursor-not-allowed opacity-50"
          : isActive
          ? "bg-[#4FA3A5] text-[#EDEDED] cursor-pointer"
          : "bg-transparent text-[#9A9A9A] border border-[#2A2A2A] cursor-pointer hover:bg-[#4FA3A5] hover:text-[#EDEDED] hover:border-[#4FA3A5]"
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
