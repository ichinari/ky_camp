"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";
import Button from "./Button";
import Icons from "./Icons";

type Props = {
  type?: "camper" | "shop";
};

function Nav({ type = "camper" }: Props) {
  const { isAuthenticated } = useKindeBrowserClient();
  const [isCampoer, setIsCamper] = useState<Boolean>(type === "camper");

  /* ユーザ切り替え*/
  const toggleUser = (user: String) => {
    const result = user === "camper";
    setIsCamper(result);
  };

  /* ユーザコンテンツ切り替え */
  const selectedShopDashBoard = () => {
    console.log("selectedShopDashBoard");
  };
  const selectedRequestList = () => {
    console.log("selectedRequestList");
  };
  const selectedCamperDistribution = () => {
    console.log("selectedCamperDistribution");
  };

  const selectedCamperDashBoard = () => {
    console.log("selectedDashBoard");
  };
  const selectedCamperRequest = () => {
    console.log("selectedCamperRequest");
  };

  return (
    <nav className="w-full h-auto md:w-1/2 md:h-screen bg-[#1A1A1A] border-r border-[#2A2A2A]">
      <div>
        {/* ユーザ切り替え */}
        <div className="border border-b border-[#2A2A2A] p-4 gap-4 flex">
          <Button onClick={() => toggleUser("camper")} isActive={isCampoer}>
            <Icons iconName="camper" />
            キャンパー
          </Button>
          <Button onClick={() => toggleUser("shop")} isActive={!isCampoer}>
            <Icons iconName="shop" />
            店舗
          </Button>
        </div>

        {isCampoer ? (
          /* 店舗 */
          <ul className="flex md:flex-col p-4 md:gap-y-4">
            <li>
              <Button onClick={selectedShopDashBoard} isActive={false}>
                <Icons iconName="dashboard" />
                ダッシュボード
              </Button>
            </li>

            <li>
              <Button onClick={selectedRequestList} isActive={false}>
                <Icons iconName="send" />
                要望一覧
              </Button>
            </li>
            <li>
              <Button onClick={selectedCamperDistribution} isActive={false}>
                <Icons iconName="graph" />
                利用者分布
              </Button>
            </li>
            {isAuthenticated && (
              <li>
                <LogoutLink className="flex items-center justify-center gap-2 w-full p-3 bg-[#4FA3A5] text-[#EDEDED] rounded-lg cursor-pointer hover:bg-[#5FB385]">
                  <Icons iconName="logout" />
                  ログアウト
                </LogoutLink>
              </li>
            )}
          </ul>
        ) : (
          /* キャンパー */
          <ul className="flex md:flex-col p-4 md:gap-y-4">
            <li>
              <Button onClick={selectedCamperDashBoard} isActive={false}>
                <Icons iconName="dashboard" />
                ダッシュボード
              </Button>
            </li>
            <li>
              <Button onClick={selectedCamperRequest} isActive={false}>
                <Icons iconName="send" />
                要望送信
              </Button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
