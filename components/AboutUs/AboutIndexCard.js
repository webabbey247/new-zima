import React from "react";
import AboutChildCard from "./AboutChildCard";
import {
  AboutIndexSection,
  AboutIndexBottomContent,
} from "../../styles/AboutCss";
import { ContentRow, SiteContainer } from "../../styles/GlobalCss";

const AboutIndexCard = () => {
  return (
    <>
      <AboutIndexSection>
        <SiteContainer>
          <AboutIndexBottomContent>
            <ContentRow>
              <AboutChildCard />
            </ContentRow>
          </AboutIndexBottomContent>
        </SiteContainer>
      </AboutIndexSection>
    </>
  );
};

export default AboutIndexCard;
