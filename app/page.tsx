"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

function MemberTop() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-evenly w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 gap-y-3.5 p-3.5 bg-[#1A1A1A] border-2 border-[#2A2A2A] rounded-lg">
        <div className="text-center">
          <div className="mb-3">キャンパーの方はこちら</div>
          <Link
            href="/dashboard/member"
            className="block w-full p-3 bg-[#4FA3A5] text-[#EDEDED] rounded-lg cursor-pointer hover:bg-[#5FB385]"
          >
            ダッシュボード
          </Link>
        </div>
        <div className="text-center">
          <div className="mb-3">店舗の方はこちら</div>
          <LoginLink className="block w-full p-3 bg-[#4FA3A5] text-[#EDEDED] rounded-lg cursor-pointer hover:bg-[#5FB385]">
            ログイン
          </LoginLink>
        </div>
      </div>
    </div>
  );
}
export default MemberTop;
