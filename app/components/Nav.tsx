"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Button from "./Button";

function Nav() {
  const { isAuthenticated } = useKindeBrowserClient();

  /* ユーザ切り替え*/
  const selectedCamper = () => {
    console.log("selectedCamper");
  };
  const selectedShop = () => {
    console.log("selectedShop");
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
    <div className="w-full h-auto md:w-1/2 md:h-screen bg-[#1A1A1A] border-r border-[#2A2A2A]">
      <div>
        {/* ユーザ切り替え */}
        <div className="border border-b border-[#2A2A2A] p-4 gap-4 flex">
          <Button onClick={selectedCamper}>キャンパー</Button>
          <Button onClick={selectedShop}>店舗</Button>
        </div>

        {isAuthenticated ? (
          /* 店舗 */
          <div className="flex md:flex-col p-4 md:gap-y-4">
            <Button onClick={selectedShopDashBoard}>ダッシュボード</Button>
            <Button onClick={selectedRequestList}>要望一覧</Button>
            <Button onClick={selectedCamperDistribution}>利用者分布</Button>
            <Button>
              <LogoutLink>ログアウト</LogoutLink>
            </Button>
          </div>
        ) : (
          /* キャンパー */
          <div className="flex md:flex-col p-4 md:gap-y-4">
            <Button onClick={selectedCamperDashBoard}>ダッシュボード</Button>
            <Button onClick={selectedCamperRequest}>要望送信</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
