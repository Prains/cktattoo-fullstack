"use client";
import { Provider } from "react-redux";
import InfoProvider from "./InfoProvider/InfoProvider";
import store from "@/services/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <InfoProvider>{children}</InfoProvider>
    </Provider>
  );
};

export default Providers;
