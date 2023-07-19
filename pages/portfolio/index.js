import React from "react";
import styled from "styled-components";
import MainLayout from "../../components/Layouts/MainLayout";
import PageBanner from "../../components/PageBanner";
import AboutIndexCard from "../../components/AboutUs/AboutIndexCard";
import { SiteContainer } from "../../styles/GlobalCss";

const PortfolioSection = styled.section`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f3f6;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 4rem 1rem;
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 4rem 1rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 4rem 1rem;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 4rem 1rem;
  }
`;

const Portfolio = () => {
  return (
    <>
      <MainLayout title="Our Portfolio" description="">
        <PageBanner
          img="project-banner-01.jpg"
          title=" Our Portfolio"
          description="Zimalek global technologies Limited is an indigenous IT company
              known as the most rewarded company of the industry. We strive hard
              to fulfill the expectation of our Valuable clients. A team of
              dedicated experts and professional is hired by the company to
              serve with the best possible solutions to the experts of company."
        />
        <PortfolioSection>
          <SiteContainer>
            <AboutIndexCard />
          </SiteContainer>
        </PortfolioSection>
      </MainLayout>
    </>
  );
};

export default Portfolio;
