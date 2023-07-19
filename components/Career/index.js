import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { GeneralMdText, GeneralSmText } from "../../styles/GlobalCss";

export const CareerIndexSection = styled.section`
  padding: 3rem 0;
  display: flex;
  align-content: center;
  justify-content: center;
  background-image: url("../../static/images/career-img.jpg");
  height: 430px;
  background-size: cover;
  background-position: 50%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 3rem 2rem;
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 3rem 2rem;
    }

    @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
      padding: 3rem 1.5rem;
    }

    @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
      padding: 3rem 1.5rem;
      }
`;

export const CareerIndexContainer = styled.div`
  width: min(100%, 80rem);
  z-index: 20;

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

export const CareerIndexWrapper = styled.div``;

export const CareerIndexCta = styled.a`
  text-decoration: none !important;
  background: transparent;
  padding: 14px 40px;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.12em;
  color: var(--white);
  text-transform: uppercase;
  width: 220px;
  text-align: center;
  display: block;
  border: 1px solid var(--white);

  &:before {
    content: "";
    width: 1rem;
    margin-right: 0.5rem;
    height: 0px;
    border-bottom: 1px solid var(--white);
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

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
    }

`;

const CareerIndex = () => {
  return (
    <>
      <CareerIndexSection>
        <CareerIndexContainer>
          <CareerIndexWrapper>
            <GeneralMdText
              textAlign="left"
              fontSize="54px"
              lineHeight="64.8px"
              textTransform="unset"
              margin="30px 0 10px"
              color="#F4F4F4"
              fontWeight="700"
            >
              Career
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              color="#F4F4F4"
              lineHeight="25.6px"
              textTransform="unset"
              margin="20px 0 30px"
              width="500px"
            >
              We&apos;re on the lookout for the best and brightest minds in
              engineering. If you&apos;re ready to help us build a safer digital
              future, then have a look, because we&apos;re hiring.
            </GeneralSmText>
            <Link href="/" passHref>
              <CareerIndexCta>Explore Roles</CareerIndexCta>
            </Link>
          </CareerIndexWrapper>
        </CareerIndexContainer>
      </CareerIndexSection>
    </>
  );
};

export default CareerIndex;
