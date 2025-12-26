"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Button from "./Button";

function Nav() {
  const { isAuthenticated } = useKindeBrowserClient();
  const isAuth = isAuthenticated;

  const selectedCamper = () => {
    console.log("selectedCamper");
  };
  const selectedShop = () => {
    console.log("selectedShop");
  };

  return (
    <>
      <div className="w-full h-auto md:w-1/2 md:h-screen bg-[#1A1A1A] border-r border-[#2A2A2A]">
        <div>
          {/* ユーザ切り替え */}
          <div className="border border-b border-[#2A2A2A] p-4 gap-4 flex">
            <Button onClick={selectedCamper}>キャンパー</Button>
            <Button onClick={selectedShop}>店舗</Button>
          </div>

          {isAuth ? (
            /* 店舗 */
            <div className="flex md:flex-col p-4 md:gap-y-4">
              <button>ダッシュボード</button>
              <button>要望一覧</button>
              <button>利用者分布</button>
              <button>
                <LogoutLink>ログアウト</LogoutLink>
              </button>
            </div>
          ) : (
            /* キャンパー */
            <div className="flex md:flex-col p-4 md:gap-y-4">
              <button>ダッシュボード</button>
              <button>要望送信</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
