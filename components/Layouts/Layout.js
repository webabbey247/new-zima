import React from "react";
import AuthLayout from "./AuthLayout";
import MainLayout from "./MainLayout";

export const Layout = ({ type, title, children }) => {
  return (
    <>
      {type === "Auth" ? (
        <AuthLayout title={title} />
      ) : (
        <MainLayout title={title} />
      )
      }
      {children}
    </>
  );
};
