"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/redux/store";
import { verifyAuth } from "../lib/initialze/verifyAuth";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(verifyAuth());
  } 
  

  return <Provider store={storeRef.current}>{children}</Provider>;
}
