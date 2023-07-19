import React from "react";
import styled from "styled-components";
import {
  Content2Column2,
  ContentRow,
  GeneralMdText,
  GeneralSmText,
  SiteContainer,
} from "../../styles/GlobalCss";
import OurApproachCard from "./OurApproachCard";

export const OurApproachSection = styled.section`
  padding: 4rem 0 3rem;
  display: flex;
  align-content: center;
  justify-content: center;
  background-image: url("../../static/images/our-approach-img.png");
  height: 500px;
  background-size: cover;
  background-position: 50%;
`;

export const OurApproachContainer = styled.div`
  width: min(100%, 80rem);
`;

export const OurApproachWrapper = styled.div``;

export const OurApproachCta = styled.a`
  text-decoration: none !important;
  background: #ef9801;
  padding: 12px 40px;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.12em;
  color: var(--white);
  text-transform: uppercase;
  width: 200px;
  text-align: center;
  margin: 3rem auto 2rem;
  display: block;
`;

export const OurApproachFeatures = styled.div`
  padding: 3rem 0 2rem;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const OurApproachFeaturesContainer = styled.div`
  width: min(100%, 80rem);
  background: #FDFBF6;
  padding: 1rem 2rem;
`;

const OurApproach = () => {
  return (
    <>
      <OurApproachSection>
        <OurApproachContainer>
          <OurApproachWrapper>
            <GeneralMdText
              textAlign="center"
              fontSize="54px"
              lineHeight="64.8px"
              textTransform="unset"
              margin="20px 0"
              color="#F4F4F4"
              fontWeight="700"
            >
              Every decision counts in making your company a growing success.
            </GeneralMdText>
            <GeneralSmText
              textAlign="center"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0"
            >
              Our initial approach involves short interactive sessions,
              combining thought provoking presentations with lively and often
              personal discussions on leadership, management, strategy, change
              and well-timed business interventions.
            </GeneralSmText>
            <ContentRow>
            <OurApproachCard />
          </ContentRow>
          </OurApproachWrapper>
        </OurApproachContainer>
      </OurApproachSection>
     
    </>
  );
};

export default OurApproach;
