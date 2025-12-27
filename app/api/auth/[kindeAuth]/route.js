import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

// handleAuth をラップして anti-caching ヘッダーを追加
export async function GET(request, context) {
  const authHandler = handleAuth();
  const response = await authHandler(request, context);

  // セキュリティ対策: セッション情報が CDN にキャッシュされないようにする
  response.headers.set("Cache-Control", "no-store, max-age=0, must-revalidate");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");

  return response;
}
