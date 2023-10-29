"use client";
import React, { ReactNode, useReducer, useRef } from "react";
import { State, applicationReducer, initialState } from "./application.reducer";

interface ApplicationProviderState extends State {
  setPermissions: (query: any) => void;
  setApp: (query: any) => void;
  setUserParams: (query: any) => void;
  setHeaderVisible: (query: any) => void;
}

export const ApplicationContext = React.createContext<
  ApplicationProviderState | undefined
>(undefined);
ApplicationContext.displayName = "ApplicationContext";

export const useApplication = () => {
  const context = React.useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error(`useApplication must be used within a ApplicationProvider`);
  }
  return context;
};

interface BaseLayoutProps {
  children?: ReactNode;
}

export const ApplicationProvider: React.FC<BaseLayoutProps> = (props) => {
  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const setPermissions = (query: any) => {
    dispatch({
      type: "SET_USER_PERMISSION",
      payload: query,
    });
  };

  const setApp = (query: any) => {
    dispatch({
      type: "SET_APP",
      payload: query,
    });
  };

  const setUserParams = (query: any) => {
    dispatch({
      type: "SET_USER_PARAMS",
      payload: query,
    });
  };
  const setHeaderVisible = (query: any) => {
    dispatch({
      type: "SET_HEADER_VISIBLE",
      payload: query,
    });
  };

  const value = React.useMemo(
    () => ({
      ...state,
      setPermissions,
      setApp,
      setUserParams,
      setHeaderVisible,
    }),
    [state]
  );

  return (
    <>
      <ApplicationContext.Provider value={value} {...props} />
    </>
  );
};
