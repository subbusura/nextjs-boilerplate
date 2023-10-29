"use client";
import { useApplication } from "@/contexts/application/application.context";
import { memo, useCallback } from "react";

const Button = memo(() => {
  console.log("Button Get callaed");
  const appStore = useApplication();

  const handleOnClick = useCallback(() => {
    appStore.setHeaderVisible(true);
  }, []);

  return <button onClick={handleOnClick}>Hello World</button>;
});

Button.displayName = "Button";

export default Button;
