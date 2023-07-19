import React from "react";
import styled from "styled-components";
import { GeneralMdText, GeneralSmText } from "../../styles/GlobalCss";

const BannerSection = styled.section`
  padding: 3rem 0 3rem;
  height: 470px;
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: auto;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
  }
`;

const BannerContainer = styled.div`
  width: min(100%, 80rem);

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    margin-left: 3rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
  }
`;

const BannerContent = styled.div`
  width: min(100%, 45rem);
  margin-top: 4.5rem;
  background-image: linear-gradient(to right, #543a7e, #d03049);

  // margin-left: 5.5rem;
  padding: 1rem 2rem 2rem;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    margin-left: 3rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
    margin-left: 0;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
    margin-left: 0;
  }
`;

const PageBanner = ({ title, description, img }) => {
  return (
    <BannerSection
      style={{
        backgroundImage: `url(../../static/images/${img})`,
      }}
    >
      <BannerContainer>
        <BannerContent>
          <GeneralMdText
            textAlign="left"
            fontSize="3.4rem"
            lineHeight="64.8px"
            textTransform="unset"
            margin="20px 0"
            color="var(--white)"
            fontWeight="700"
          >
            {title}
          </GeneralMdText>
          <GeneralSmText
            textAlign="left"
            fontSize="16px"
            fontWeight="400"
            color="#F4F4F4"
            lineHeight="25.6px"
            textTransform="unset"
            margin="20px 0"
          >
            {description}
          </GeneralSmText>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default PageBanner;
