import React from "react";
import Head from "next/head";
import {MainContainer} from "../../styles/GlobalCss";

const AuthLayout = ({title, description, children}) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} - User Authentication - Zima Market`
            : "Zima Market"}
        </title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <MainContainer>
        {children}
      </MainContainer>
    </>
  );
};

export default AuthLayout;
