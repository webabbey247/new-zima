import React from "react";
import styled from "styled-components";
import MainLayout from "../../components/Layouts/MainLayout";
import PageBanner from "../../components/PageBanner";
import AboutIndexCard from "../../components/AboutUs/AboutIndexCard";
import {
  GeneralMdText,
  SiteContainer,
  GeneralSmText,
} from "../../styles/GlobalCss";

const PortfolioSection = styled.section`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

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

const Projects = ({ projects }) => {
  return (
    <>
      <MainLayout title="Our Portfolio" description="">
        <PageBanner typeUrl="Portfolio" />

        <PortfolioSection>
          <SiteContainer>
            <AboutIndexCard />
          </SiteContainer>
        </PortfolioSection>
      </MainLayout>
    </>
  );
};

export default Projects;

