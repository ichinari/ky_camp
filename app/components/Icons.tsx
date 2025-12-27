import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { FaPersonBooth } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";
import { FaChalkboardUser } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { GoGraph } from "react-icons/go";

type Props = {
  iconName: String;
};

function Icons({ iconName }: Props) {
  return (
    <>
      {iconName === "login" && <CiLogin />}{" "}
      {iconName === "logout" && <CiLogout />}{" "}
      {iconName === "camper" && <FaPersonBooth />}{" "}
      {iconName === "shop" && <CiShop />}
      {iconName === "dashboard" && <FaChalkboardUser />}
      {iconName === "send" && <IoIosSend />}
      {iconName === "list" && <CiViewList />}
      {iconName === "graph" && <GoGraph />}
    </>
  );
}

export default Icons;
