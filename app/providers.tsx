"use client";

import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import AuthListener from "@/components/AuthListener";

interface ProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <AuthListener />
        {children}
      </CookiesProvider>
    </Provider>
  );
}
