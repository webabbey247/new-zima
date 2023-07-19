import React from "react";
import Head from "next/head";
import NextProgress from "next-progress";
import { MainContainer } from "../../styles/GlobalCss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} - Zimalek Technologies |  Zimalek Technologies`
            : "Zimalek Technologies"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <NextProgress
        color="#f71735"
        height="3px"
        delay={400}
        options={{ showSpinner: true }}
      />
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
