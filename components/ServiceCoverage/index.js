import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Content2Column2, ContentRow, CustomDiv, GeneralMdText, GeneralSmText } from '../../styles/GlobalCss';
import { developerCount, countriesCount, technologyPartners } from '../../assets';

export const ServiceCoverageSection = styled.section`
padding: 6rem 0;
background: var(--gray-color);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 2rem 0;
    }

    @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
        padding: 4rem 0 1rem;
      }
`;



export const ServiceCoverageContainer = styled.div`
width: min(100%, 80rem); 

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
  }
`;

export const ServiceCoverageChildren = styled.div`
display: flex;
flex-drection: row;
justify-content: center;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex-direction: column;
    margin: auto;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
    margin: auto;
  }


`;

export const ServiceCoverageLTR = styled.div`
flex: 0 0 70%;
max-width: 70%;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 2rem;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 2rem;
  }

`;

export const ServiceCoverageLTRImg = styled.div`
background-image: url('/static/images/servicesMap.png');
background-size: contain;
background-position: 50%;
height: 650px;
width: 100%;
background-repeat: no-repeat;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    background-size: cover;
    background-position: center;
    height: 400px;
    display: none;
  }

`;

export const ServiceCoverageRTL = styled.div`
margin: 2rem auto;
padding: 3rem 0;
display: flex;
flex-direction: column;
justify-content: center;
flex: 0 0 30%;
max-width: 30%;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: column;
    margin-top: -4rem;
    padding: 0;
    width: 100%;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: column;
    margin-top: -2rem;
    padding: 0;
    width: 100%;
  }


`;

export const ServiceCoverageRTLChild = styled.div`
padding: 1rem 2rem;
background: var(--white);
display: flex;
flex-direction: row;
justify-content: flex-start;
box-shadow: 0px 0px 23px 0px #7c8e9b17;
border-radius: 0 30px 30px 0;
margin: 1rem;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 1rem;
    margin: 1rem 2.5rem;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 1rem; 
    margin: 1rem;
}
`;


const ServiceCoverage = () => {
    return (
        <ServiceCoverageSection>
            <ServiceCoverageContainer>
                <ServiceCoverageChildren>
                    <ServiceCoverageLTR>
                        <ServiceCoverageLTRImg />
                    </ServiceCoverageLTR>
                    <ServiceCoverageRTL>
                        <ServiceCoverageRTLChild>
                            <Image width={80} height={80} src={technologyPartners} alt="Telco Connections" />
                            <CustomDiv flexDirection="column" margin="10px 1rem">
                                <GeneralMdText textTransform="unset" margin="0" fontSize="20px" fontWeight="600" lineHeight="1.25" color="#4F4F4F" textAlign="left">10+</GeneralMdText>
                                <GeneralSmText textTransform="unset" fontSize="16px" fontWeight="400" lineHeight="25.6px" color="#ADACAC" textAlign="left">
                                    Telco Connections
                                </GeneralSmText>
                            </CustomDiv>
                        </ServiceCoverageRTLChild>

                        <ServiceCoverageRTLChild>
                            <Image width={80} height={80} src={developerCount} alt="Developers" />
                            <CustomDiv flexDirection="column" margin="10px 1rem">
                                <GeneralMdText textTransform="unset" margin="0" fontSize="20px" fontWeight="600" lineHeight="1.25" color="#4F4F4F" textAlign="left">5,000+</GeneralMdText>
                                <GeneralSmText textTransform="unset" fontSize="16px" fontWeight="400" lineHeight="25.6px" color="#ADACAC" textAlign="left">
                                    Developers
                                </GeneralSmText>
                            </CustomDiv>
                        </ServiceCoverageRTLChild>
                        <ServiceCoverageRTLChild>
                            <Image width={80} height={80} src={countriesCount} alt="Countries" />
                            <CustomDiv flexDirection="column" margin="10px 1rem">
                                <GeneralMdText textTransform="unset" margin="0" fontSize="20px" fontWeight="600" lineHeight="1.25" color="#4F4F4F" textAlign="left">12+</GeneralMdText>
                                <GeneralSmText textTransform="unset" fontSize="16px" fontWeight="400" lineHeight="25.6px" color="#ADACAC" textAlign="left">
                                12+ countries
                                </GeneralSmText>
                            </CustomDiv>
                        </ServiceCoverageRTLChild>
                    </ServiceCoverageRTL>
                </ServiceCoverageChildren>

            </ServiceCoverageContainer>
        </ServiceCoverageSection>
    )
}

export default ServiceCoverage