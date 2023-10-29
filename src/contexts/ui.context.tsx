"use client";

import { ReactNode } from "react";
import { ApplicationProvider } from "./application/application.context";

interface BaseLayoutProps {
  children?: ReactNode;
}

export const ManagedUIContext: React.FC<BaseLayoutProps> = ({ children }) => {
  return <ApplicationProvider>{children}</ApplicationProvider>;
};
