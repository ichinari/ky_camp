import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { FaPersonBooth } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";
import { FaChalkboardUser } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa6";

type Props = {
  iconName: string;
  color?: string;
  size?: number;
};

function Icons({ iconName, color, size = 20 }: Props) {
  const iconProps = { color, size };

  return (
    <>
      {iconName === "login" && <CiLogin {...iconProps} />}
      {iconName === "logout" && <CiLogout {...iconProps} />}
      {iconName === "camper" && <FaPersonBooth {...iconProps} />}
      {iconName === "shop" && <CiShop {...iconProps} />}
      {iconName === "dashboard" && <FaChalkboardUser {...iconProps} />}
      {iconName === "send" && <IoIosSend {...iconProps} />}
      {iconName === "list" && <CiViewList {...iconProps} />}
      {iconName === "graph" && <GoGraph {...iconProps} />}
      {iconName === "moon" && <FaRegMoon {...iconProps} />}
    </>
  );
}

export default Icons;
