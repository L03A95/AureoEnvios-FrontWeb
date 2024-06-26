import { Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import NavBar from "../components/NavBar";
// import { useEffect } from 'react';
// import { useSignUp, useUser } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  const navigate = useNavigate();
  // const user = useUser();
  // const { isLoaded, signUp } = useSignUp(); 

  // useEffect(() => {
  //   if (isLoaded && signUp && signUp.status === 'complete') {
  //     // sendUserInfoToAPI(user);
  //   }
  // }, [isLoaded, signUp]);

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <NavBar/>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}