"use client";
import Nav from "@/components/Nav";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 表示画面がキャンパーか店舗かのフラグを追加
  const pathname = usePathname();
  const userType = pathname.includes("/shop") ? "shop" : "camper";

  return (
    <div className="flex flex-col-reverse md:flex-row h-full">
      <Nav type={userType} />
      {children}
    </div>
  );
}
