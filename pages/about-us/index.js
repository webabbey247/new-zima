import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import MainLayout from "../../components/Layouts/MainLayout";
import {
  Content2Column2,
  ContentRow,
  GeneralMdText,
  GeneralSmText,
  SiteContainer,
  ContentFullColumn,
  CustomDiv,
  Content3Column3,
  CustomRouterLink,
} from "../../styles/GlobalCss";
import { PartnerSection, PartnerTopContent } from "../../styles/PartnersCss";
import {
  AboutImageSection,
  AboutImageContainer,
  AboutImageLTRTop,
  AboutImageLTRBottom,
  AboutImageRTL,
  AboutImageLTRTopImg,
} from "../../styles/AboutCss";
import Partners from "../../components/Partners";
import PageBanner from "../../components/PageBanner";

export const WhyUsCard = styled.div`
  position: relative;
  padding: 25px 25px 25px 95px;
  font-size: 17px;
  line-height: 29px;
  margin-top: 30px;
  box-shadow: -20px 20px 50px rgba(0, 40, 99, 0.05);
  opacity: 1;
  transform: translateZ(0);
  background: #fdfbf6;
  border: 1px solid rgba(239, 152, 1, 0.3);
  transition: all 0.13s ease-in-out;
  height: 170px;
`;

export const WhyUsCardNum = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #ef9801;
  border-radius: 50%;
  line-height: 43px;
  text-align: center;
  font-size: 18px;
  color: #121212;
  position: absolute;
  top: 27px;
  left: 25px;
  background: #ef9801;
`;

const OurStorySection = styled.section`
  padding: 3rem 0;
  margin: 0;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 3rem 0.7rem;
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 3rem 0.8rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 3rem 0.8rem;
  }
`;

const OurStoryContainer = styled.div`
  width: min(100%, 80rem);

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    width: 100%;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
  }
`;

const OurStoryContent = styled.div`
  margin: 1rem 0;
`;

const MissionVisionValuesSection = styled.section`
  padding: 3rem 0;
  margin: 0;
  background-image: linear-gradient(to right, #543a7e, #d03049);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MissionVisionValuesContainer = styled.div`
  width: min(100%, 80rem);

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    width: 100%;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
  }
`;

const MissionVisionValues = styled.div`
  margin: 1rem 0;
`;

const AboutUs = () => {
  return (
    <>
      <MainLayout
        title="About Us"
        description="We Have 15+ Years of experience in standard professional Services. We are highly committed and fully committed to our products, business partners and clients"
      >
        <PageBanner
          img="about-banner-img.webp"
          title="Corporate Introduction"
          description="Zimalek global technologies Limited is an indigenous IT company
          known as the most rewarded company of the industry. We strive hard
          to fulfill the expectation of our Valuable clients. A team of
          dedicated experts and professional is hired by the company to
          serve with the best possible solutions to the experts of company."
        />

        <OurStorySection>
          <OurStoryContainer>
            <OurStoryContent>
              <ContentRow>
                <ContentFullColumn>
                  <GeneralMdText
                    textAlign="left"
                    fontSize="3.4rem"
                    lineHeight="64.8px"
                    textTransform="unset"
                    margin="20px 0"
                    color="#161e2d"
                    fontWeight="700"
                  >
                    We Have 15+ Years of experience in standard professional
                    Services
                  </GeneralMdText>
                  <GeneralSmText
                    fontSize="16px"
                    fontWeight="400"
                    color="#83858c"
                    lineHeight="26px"
                    margin="0.7rem 0"
                    textTransform="unset"
                  >
                    At zimalek global technologies, our successfully delivered
                    projects speaks for themselves. We are highly committed and
                    fully committed to our products, business partners and
                    clients. Our team of professionals with experiences across
                    different industries are always ready and willing to make
                    our clients and partners happy with perfectly delivered jobs
                    before the due date. We do strictly believe in serving our
                    clients with the best possible solutions and hence, we put
                    our continuous efforts and high level of professionalism,
                    innovation, intelligence and teamwork to deliver the needed
                    results to the client end. Satisfaction of our clients is
                    our primary concern and we strive towards achieving it. This
                    is the only reason we work in close co-ordination with
                    clients to complete their assigned work.
                  </GeneralSmText>

                  <GeneralSmText
                    fontSize="16px"
                    fontWeight="400"
                    color="#83858c"
                    lineHeight="26px"
                    margin="0.7rem 0"
                    textTransform="unset"
                  >
                    Because of these significant features, we are known as the
                    trusted service provider company among the clients. We are
                    committed towards delivering the projects to our valuable
                    clients within the promised timeframe. Our experts check for
                    the projects work and then deliver them to the client to
                    ensure the flawless deliveries of the completed work. We
                    also build tech-enabling ecosystem for our societies by
                    creating tech groups in our societies where we teach both
                    young and adults’ computer programming in different
                    languages.
                  </GeneralSmText>

                  <GeneralSmText
                    fontSize="16px"
                    fontWeight="400"
                    color="#83858c"
                    lineHeight="26px"
                    margin="0.7rem 0"
                    textTransform="unset"
                  >
                    We incubate and accelerate startups and with the help of our
                    partners attract investors for our incubating startups.{" "}
                  </GeneralSmText>
                </ContentFullColumn>
              </ContentRow>
            </OurStoryContent>
          </OurStoryContainer>
        </OurStorySection>

        <MissionVisionValuesSection>
          <MissionVisionValuesContainer>
            <MissionVisionValues>
              <ContentRow>
                <Content3Column3>
                  <CustomDiv
                    className="AboutVisionMission"
                    flexDirection="column"
                    padding="1rem 2rem"
                  >
                    <GeneralMdText
                      fontSize="32px"
                      color="var(--white)"
                      fontWeight="700"
                      lineHeight="47px"
                      margin="0.4rem 0"
                      textTransform="capitalize"
                    >
                      Who We are
                    </GeneralMdText>
                    <GeneralSmText
                      fontSize="16px"
                      fontWeight="400"
                      color="#ffffff"
                      lineHeight="26px"
                      margin="0.7rem 0"
                      textTransform="unset"
                    >
                      We are a team of dedicated experts and professionals
                      disciplined to serve and create the best possible business
                      and software solutions for our Clients. We do strictly
                      believe in serving our clients with the best possible
                      solutions.
                    </GeneralSmText>
                  </CustomDiv>
                </Content3Column3>

                <Content3Column3>
                  <CustomDiv
                    className="AboutVisionMission"
                    flexDirection="column"
                    padding="1rem 2rem"
                  >
                    <GeneralMdText
                      fontSize="32px"
                      color="var(--white)"
                      fontWeight="700"
                      lineHeight="47px"
                      margin="0.4rem 0"
                      textTransform="capitalize"
                    >
                      What We Do
                    </GeneralMdText>
                    <GeneralSmText
                      fontSize="16px"
                      fontWeight="400"
                      color="#ffffff"
                      lineHeight="26px"
                      margin="0.7rem 0"
                      textTransform="unset"
                    >
                      We are simply and gradually turning the normal ways of
                      life and doing businesses to a much easier ways by using
                      technology solutions. We are fully committed to any
                      project we have an agreement to handle, no excuses or
                      unnecessary delays.
                    </GeneralSmText>
                  </CustomDiv>
                </Content3Column3>

                <Content3Column3>
                  <CustomDiv
                    className="AboutVisionMission"
                    flexDirection="column"
                    padding="1rem 2rem"
                  >
                    <GeneralMdText
                      fontSize="32px"
                      color="var(--white)"
                      fontWeight="700"
                      lineHeight="47px"
                      margin="0.4rem 0"
                      textTransform="capitalize"
                    >
                      Success Story
                    </GeneralMdText>
                    <GeneralSmText
                      fontSize="16px"
                      fontWeight="400"
                      color="#ffffff"
                      lineHeight="26px"
                      margin="0.7rem 0"
                      textTransform="unset"
                    >
                      We have had a couple of success stories from within our
                      team to our clients, then our portfolio companies. You can
                      visit our social media platforms for a number of our
                      success stories straight from the benefactors.
                    </GeneralSmText>
                  </CustomDiv>
                </Content3Column3>
              </ContentRow>
            </MissionVisionValues>
          </MissionVisionValuesContainer>
        </MissionVisionValuesSection>

        <AboutImageSection>
          <AboutImageContainer>
            <ContentRow>
              <Content2Column2>
                <ContentRow>
                  <ContentFullColumn>
                    <AboutImageLTRTop>
                      <AboutImageLTRTopImg />
                    </AboutImageLTRTop>
                  </ContentFullColumn>
                </ContentRow>
              </Content2Column2>

              <Content2Column2>
                <CustomDiv
                  className="AboutImageLTRContent"
                  flexDirection="column"
                  padding="0 2rem"
                >
                  <GeneralMdText
                    fontSize="32px"
                    color="var(--gradient-color-1)"
                    fontWeight="700"
                    lineHeight="47px"
                    margin="0.4rem 0"
                    padding="0 0 0 3rem"
                    textTransform="capitalize"
                  >
                    Aims and Objectives
                  </GeneralMdText>
                  <GeneralSmText
                    fontSize="16px"
                    fontWeight="400"
                    color="#83858c"
                    lineHeight="26px"
                    margin="0.7rem 0"
                    padding="0 0 0 3rem"
                    textTransform="unset"
                  >
                    At zimalek global technologies, our successfully delivered
                    projects speaks for themselves. We are highly committed and
                    fully committed to our products, business partners and
                    clients. Our team of professionals with experiences across
                    different industries are always ready and willing to make
                    our clients and partners happy with perfectly delivered jobs
                    before the due date.
                  </GeneralSmText>
                  <GeneralSmText
                    fontSize="16px"
                    fontWeight="400"
                    color="#83858c"
                    lineHeight="26px"
                    padding="0 0 0 3rem"
                    textTransform="unset"
                  >
                    Zimalek is well certified by different prestigious
                    institutions for all the services we render with he best and
                    experienced team players, skilled in different capacities to
                    give our esteemed clients the solutions they desire.
                  </GeneralSmText>
                </CustomDiv>
              </Content2Column2>
            </ContentRow>
          </AboutImageContainer>
        </AboutImageSection>

        <Partners type="partner" />
      </MainLayout>
    </>
  );
};

export default AboutUs;
