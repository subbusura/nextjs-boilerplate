"use client";
import { useApplication } from "@/contexts/application/application.context";

const Label = () => {
  console.log("Label Get callaed");
  const appStore = useApplication();
  return <label>{appStore.headerVisible ? "ENABLED" : "DISABLED"}</label>;
};

export default Label;
