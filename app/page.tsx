"use client";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

function MemberTop() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-5/12 border-2 border-[#2A2A2A] rounded-lg bg-[#1A1A1A] flex  items-center justify-evenly gap-y-3.5 p-3.5">
        <div className="text-center">
          <div className="mb-3">キャンパーの方はこちら</div>
          <div className="bg-[#4FA3A5] text-[#EDEDED] p-3 hover:bg-[#5FB385] rounded-lg w-full cursor-pointer">
            <Link href="/dashboard/member">ダッシュボード</Link>
          </div>
        </div>
        <div className="text-center">
          <div className="mb-3">店舗の方はこちら</div>
          <div className="bg-[#4FA3A5] text-[#EDEDED] p-3 hover:bg-[#5FB385] rounded-lg w-full cursor-pointer">
            <LoginLink>ログイン</LoginLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MemberTop;
