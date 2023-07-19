import styled from "styled-components";

export const WhatWeDoSection = styled.section`
  padding: 4rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 4rem 2rem;
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 4rem 1.5rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 4rem 1rem;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 4rem 1rem;
  }
`;

export const WhatWeDoContainer = styled.div`
  width: min(100%, 80rem);

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;

    & > h2 {
      font-size: 18px !important;
      line-height: 31px !important;
      margin: 1rem 0 !important;
    }

    & > h4 {
      font-size: 18px !important;
      line-height: 31px !important;
    }
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;

    & > h2 {
      font-size: 18px !important;
      line-height: 31px !important;
      margin: 1rem 0 !important;
    }

    & > h4 {
      font-size: 18px !important;
      line-height: 31px !important;
    }
  }
`;

export const HomeServicesSection = styled.section`
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 2rem 1.5rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 2rem 1rem;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 2rem 0.5rem;
  }
`;

export const HomeServicesContainer = styled.div`
  width: min(100%, 80rem);

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
  }
`;

export const HomeServiceBlankList = styled.div`
  display: flex;
  margin-bottom: 30px;
  background: #f0f3f6;
  flex-direction: column;
  padding: 35px;
  height: 395px;
  border-radius: 8px;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: 500px;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
    padding: 35px 20px;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
    padding: 25px 15px;
  }
`;

export const HomeServiceListCta = styled.a`
  background: transparent;
  border: 1px solid #2b2d42;
  padding: 1rem 1.5rem;
  margin: 2rem 0 1rem;
  width: 40%;
  text-align: center;
  color: #2b2d42;
  font-weight: 600;

  &::before {
    content: "";
    width: 1rem;
    margin-right: 0.5rem;
    height: 0px;
    border-bottom: 1px solid #2b2d42;
    transition: margin-right 0.3s ease-out, width 0.3s ease-out;
    display: inline-block;
  }

  &:hover {
    background: #2b2d42;
    border: 1px solid var(--gradient-color-2);
    color: var(--white);
    background-image: linear-gradient(to right, #543a7e, #d03049);
  }

  &:hover::before {
    border-bottom: 1px solid var(--white);
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
  }
`;

export const HomeServiceList = styled.div`
  display: flex;
  margin-bottom: 30px;
  color: #fff;
`;

export const HomeServiceListInner01 = styled.div`
  width: 100%;
  height: 395px;
  background-size: cover;
  background-position: 50%;
  display: block;
  text-decoration: none;
  padding: 35px;
  position: relative;
  border-radius: 8px;
  background-image: url("https://res.cloudinary.com/webstack-nigeria/image/upload/v1659360506/services-server-01.jpg");

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0px 25px 70px 0px rgba(0, 0, 0, 0.25);
    opacity: 0;
    transition: all 0.3s;
    border-radius: 8px;
  }

  &:hover::before {
    opacity: 1;
    // background-color: #f71735;
    background-image: linear-gradient(to right, #543a7e, #d03049);
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: 500px;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
    padding: 35px 20px;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
    padding: 25px 15px;
  }
`;

export const HomeServiceListInner02 = styled.div`
  width: 100%;
  height: 395px;
  background-size: cover;
  background-position: 50%;
  display: block;
  text-decoration: none;
  padding: 35px;
  position: relative;
  border-radius: 8px;
  background-image: url("https://res.cloudinary.com/webstack-nigeria/image/upload/v1659360506/services-server-02.jpg");

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0px 25px 70px 0px rgba(0, 0, 0, 0.25);
    opacity: 0;
    transition: all 0.3s;
    border-radius: 8px;
  }

  &:hover::before {
    opacity: 1;
    background-image: linear-gradient(to right, #543a7e, #d03049);
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: 500px;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
    padding: 35px 20px;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
    padding: 25px 15px;
  }
`;

export const HomeServiceListInner03 = styled.div`
  width: 100%;
  height: 395px;
  background-size: cover;
  background-position: 50%;
  display: block;
  text-decoration: none;
  padding: 35px;
  position: relative;
  border-radius: 8px;
  background-image: url("https://res.cloudinary.com/webstack-nigeria/image/upload/v1659360506/services-server-03.jpg");

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0px 25px 70px 0px rgba(0, 0, 0, 0.25);
    opacity: 0;
    transition: all 0.3s;
    border-radius: 8px;
  }

  &:hover::before {
    opacity: 1;
    background-image: linear-gradient(to right, #543a7e, #d03049);
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: 500px;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
    padding: 35px 20px;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
    padding: 25px 15px;
  }
`;

export const HomeServiceListContent = styled.span`
display: block;
position: relative;
z-index: 2;
height: 100%;
padding-bottom: 80px;
}
`;

export const HowItWorksSection = styled.section`
  padding: 3rem 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HowItWorkLeft = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
`;

export const HowItWorksLeftContent = styled.div`
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url("../static/images/expertise-banner-img-3.jpg");
  padding: 80px 60px 80px 50px;
  position: relative;
  margin: 3rem 31px 0 0;
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: 10;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(61, 49, 22, 0.8);
    border-radius: 10px;
  }
`;

export const HowItWorksLeftContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  margin: 0 0 2rem 0;
  position: relative;
`;

export const HowItWorksLeftContentCta = styled.a`
  text-decoration: none;
  background: #ef9801;
  padding: 14px 40px;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.12em;
  color: var(--white);
  text-transform: uppercase;
  width: 200px;
  text-align: center;
`;

export const HowItWorkRight = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
`;

export const HowItWorksRightCard = styled.div`
  margin: 0 -10px 0 0;
  padding: 20px 30px 20px 38px;
  margin: 3rem 31px 0 0;
  background: rgba(250, 246, 204, 0.5);
  border-bottom: 7px solid #3d3116;
`;
