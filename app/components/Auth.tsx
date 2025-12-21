"use client";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

function Auth() {
  return (
    <div>
      <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink>

      <LogoutLink>Log out</LogoutLink>
    </div>
  );
}

export default Auth;
