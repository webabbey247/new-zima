import React from "react";
import styled from "styled-components";
import MainLayout from "../../components/Layouts/MainLayout";
import PageBanner from "../../components/PageBanner";
import { ServicesCard } from "../../components/Services";

import {
  ContentRow,
  GeneralMdText,
  SiteContainer,
  GeneralSmText,
} from "../../styles/GlobalCss";

const ServiceSection = styled.section`
  padding: 2rem 0;
  justify-content: center;
  display: flex;
  align-items: center;
  background: #f0f3f6;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 2rem 1rem;
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 2rem 1rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 2rem 1rem;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 2rem 0.5rem;
  }
`;

const ServiceTopContent = styled.div`
  padding: 1.5rem 0;
`;

const ServiceBottomContent = styled.div`
  padding: 1.5rem 0;
`;

const Services = () => {
  return (
    <>
      <MainLayout title="Our Services" description="">
      <PageBanner
          img="services-banner-img.webp"
          title="Strategy, Execution"
          description="Zimalek global technologies Limited is an indigenous IT company
              known as the most rewarded company of the industry. We strive hard
              to fulfill the expectation of our Valuable clients. A team of
              dedicated experts and professional is hired by the company to
              serve with the best possible solutions to the experts of company."
        />
        <ServiceSection>
          <SiteContainer>
            <ServiceTopContent>
              <GeneralMdText
                textAlign="left"
                textTransform="unset"
                fontWeight="700"
                fontSize="1.25rem"
                lineHeight="30px"
              >
                We are a world class organization driven by a passion to deliver
                value for our clients, and ensure that they succeed in their
                chosen markets and operating environments, we pay detailed
                attention to the needs of our clients and carefully examine
                their business operations and operating market dynamics to
                deliver best-in-class tailored solutions.
              </GeneralMdText>
        
            </ServiceTopContent>

            <ServiceBottomContent>
              <ContentRow>
                <ServicesCard />
              </ContentRow>
            </ServiceBottomContent>
          </SiteContainer>
        </ServiceSection>
      </MainLayout>
    </>
  );
};

export default Services;
