import React from 'react';
import styled from "styled-components";
import MainLayout from '../../components/Layouts/MainLayout';
import PageBanner from '../../components/PageBanner';
import { ContentRow, CustomDiv, GeneralMdText, GeneralSmText, SiteContainer } from '../../styles/GlobalCss';

const ProductSection = styled.section`
padding: 4rem 0;
background: #f0f3f6;
// background: linear-gradient(224deg,hsla(8,73%,62%,.2),rgba(187,139,197,.2) 51%,rgba(107,181,255,.2));
display: flex;
align-items: center;
justify-content: center;
`;

const ProductBottomContent = styled.div`
margin: 2rem 0;
position: relative;
align-items: flex-start;
display: flex;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex-direction: column;
  }
`;



const ProductImgHolder = styled.div`
display: block;
flex: 0 0 35%;
position: relative;

&::before {
     background-color: #EF9801;
content: "";
height: 100%;
position: absolute;
top: 2.5rem;
left: 2.5rem;
width: 100%;
border-radius: 5px;
box-shadow: 16px 16px 64px rgba(28,112,196,.15);
}

// @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
//     flex: 0 0 100%;
//   }

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    padding: 0 1rem;

    &::before {
        top: 0;
        left: 0;
    }
    
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex: 0 0 100%;
    border-radius: 0;

    &::before {
        top: 0;
        left: 0;
        border-radius: 0;
    }

}
`;

const ProductImgPlaceholder = styled.img`
filter: blur(0);
transition: filter .5s cubic-bezier(.64,0,.78,0);
border-radius: 5px;
height: 100%;

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    border-radius: 0;
}
`;


const ProductContent = styled.div`
background-color: #fff;
flex: 1 1 auto;
padding: 2.5rem 5rem;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    padding: 2.5rem;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 2rem 0.5rem;
}
`;

const ProductChildrenWrapper = styled.ul`
display: flex;
flex-direction: column;
font-weight: 400;
gap: 2rem;
list-style: none;
margin: 0;
padding-left: 0;
`;

const ProductChild = styled.li`
margin: 0;
position: relative;
padding-left: 0;
`;


const Products = () => {
    return (
        <>
            <MainLayout
                title="FASYL &ndash; Products"
                description="">
                <PageBanner typeUrl="Products" />
                <ProductSection>
                    <SiteContainer>

                        <ProductBottomContent>
                            <ProductImgHolder>
                                <ProductImgPlaceholder src="../static/images/technology-img-01.jpg" alt="" />
                            </ProductImgHolder>
                            <ProductContent>
                                <ProductChildrenWrapper>

                                    <ProductChild>
                                        <CustomDiv>
                                            <GeneralMdText
                                                textAlign="left"
                                                fontSize="1.25rem"
                                                lineHeight="30px"
                                                textTransform="uppercase"
                                                margin="10px 0"
                                                color="#2b2d42"
                                                fontWeight="700">
                                                XNETT CTS
                                            </GeneralMdText>
                                        </CustomDiv>
                                        <GeneralSmText
                                            textAlign="left"
                                            fontSize="16px"
                                            color="#2b2d42"
                                            fontWeight="400"
                                            lineHeight="25.6px"
                                            textTransform="unset"
                                            margin="20px 0">
                                            The XNETT Cheque Truncation System (CTS) streamlines the processes for clearing cheques, via a combination of modules: the scanner module for scanning the cheques which is carried out remotely from the Bank branch. The scanned cheque(s) will then be uploaded to the clearing house where Authorization is done via the Authorization module, and then files are generated for the cheque using the File Generation/File Processing (truncation) module. The file is then sent to the National Clearing House and also to the Bank from where the cheque originated from for Approval/Rejection.
                                        </GeneralSmText>
                                    </ProductChild>

                                    <ProductChild>
                                        <CustomDiv>
                                            <GeneralMdText
                                                textAlign="left"
                                                fontSize="1.25rem"
                                                lineHeight="30px"
                                                textTransform="capitalize"
                                                margin="10px 0"
                                                color="#2b2d42"
                                                fontWeight="700">
                                                XNETT ACH
                                            </GeneralMdText>
                                        </CustomDiv>
                                        <GeneralSmText
                                            textAlign="left"
                                            fontSize="16px"
                                            fontWeight="400"
                                            color="#2b2d42"
                                            lineHeight="25.6px"
                                            textTransform="unset"
                                            margin="20px 0">
                                            The XNETT Automated Clearing House (ACH) provides an efficient and real time payment service that enables high end/low end transfer of debit and credit payment transactions for personal and corporate clients including interbank payment system. This is used for recurring personal or corporate interbank transfers. As inputs to the XNETT system is from banks using pre-defined and well-tested formatting, the acceptance rate is usually high and most payment instructions are settled with minimum human intervention.
                                        </GeneralSmText>
                                    </ProductChild>

                                    <ProductChild>
                                        <CustomDiv>
                                            <GeneralMdText
                                                textAlign="left"
                                                fontSize="1.25rem"
                                                lineHeight="30px"
                                                textTransform="capitalize"
                                                margin="10px 0"
                                                color="#2b2d42"
                                                fontWeight="700">
                                                XNETT USSD
                                            </GeneralMdText>
                                        </CustomDiv>
                                        <GeneralSmText
                                            textAlign="left"
                                            fontSize="16px"
                                            fontWeight="400"
                                            color="#2b2d42"
                                            lineHeight="25.6px"
                                            textTransform="unset"
                                            margin="20px 0">
                                            The XNETT USSD Banking application offers a way to allow its technically unsophisticated customers, as well as those in areas with internet challenges access services offered by a bank.  This offering is secured by a user defined PIN for access to all its services and can be integrated to any USSD provider. Activities such as mobile top ups, recent account history and account balances can be obtained on any mobile device.
                                        </GeneralSmText>
                                    </ProductChild>

                                    <ProductChild>
                                        <CustomDiv>
                                            <GeneralMdText
                                                textAlign="left"
                                                fontSize="1.25rem"
                                                lineHeight="30px"
                                                textTransform="capitalize"
                                                margin="10px 0"
                                                color="#2b2d42"
                                                fontWeight="700">
                                                XNETT RIB
                                            </GeneralMdText>
                                        </CustomDiv>
                                        <GeneralSmText
                                            textAlign="left"
                                            fontSize="16px"
                                            fontWeight="400"
                                            color="#2b2d42"
                                            lineHeight="25.6px"
                                            textTransform="unset"
                                            margin="20px 0">
                                            The XNETT Retail Internet Banking (RIB) application allows a bank to provide an online banking service for its retail customers.   It offers a highly secure, well designed interface, light weight and a feature set which covers most services offered by banks.  It can be easily branded and the feature set adjusted to suit the needs of the bank.
                                        </GeneralSmText>
                                    </ProductChild>

                                    <ProductChild>
                                        <CustomDiv>
                                            <GeneralMdText
                                                textAlign="left"
                                                fontSize="1.25rem"
                                                lineHeight="30px"
                                                textTransform="capitalize"
                                                margin="10px 0"
                                                color="#2b2d42"
                                                fontWeight="700">
                                                XNETT CIB
                                            </GeneralMdText>
                                        </CustomDiv>
                                        <GeneralSmText
                                            textAlign="left"
                                            fontSize="16px"
                                            fontWeight="400"
                                            color="#2b2d42"
                                            lineHeight="25.6px"
                                            textTransform="unset"
                                            margin="20px 0">
                                            XNETT Corporate Internet Banking (CIB) application offers a full fledge of functionalities that caters for the need of corporate institutions that are bank customers. The platform is highly secure, light weight and user friendly.
                                        </GeneralSmText>
                                    </ProductChild>

                                    <ProductChild>
                                        <CustomDiv>
                                            <GeneralMdText
                                                textAlign="left"
                                                fontSize="1.25rem"
                                                lineHeight="30px"
                                                textTransform="capitalize"
                                                margin="10px 0"
                                                color="#2b2d42"
                                                fontWeight="700">
                                                XNETT Mobile Banking
                                            </GeneralMdText>
                                        </CustomDiv>
                                        <GeneralSmText
                                            textAlign="left"
                                            fontSize="16px"
                                            fontWeight="400"
                                            color="#2b2d42"
                                            lineHeight="25.6px"
                                            textTransform="unset"
                                            margin="20px 0">
                                            The XNETT Mobile Banking solution is a mobile app based solution used for transferring funds from a customer’s bank account to other customers of the same bank, or other bank to cards. With our account utility, registered customers enjoy ability to conveniently move funds from their accounts to their cards or from their cards to their accounts nationwide with ease. Activities such as mobile top ups, recent account history and account balances can be obtained on any mobile device. Its quick sign up process allows customers to benefit from the platform within minutes.
                                        </GeneralSmText>
                                    </ProductChild>

                                    <ProductChild>
                                        <CustomDiv>
                                            <GeneralMdText
                                                textAlign="left"
                                                fontSize="1.25rem"
                                                lineHeight="30px"
                                                textTransform="capitalize"
                                                margin="10px 0"
                                                color="#2b2d42"
                                                fontWeight="700">
                                                NOTAP TTR (Automation System)
                                            </GeneralMdText>
                                        </CustomDiv>
                                        <GeneralSmText
                                            textAlign="left"
                                            fontSize="16px"
                                            fontWeight="400"
                                            color="#2b2d42"
                                            lineHeight="25.6px"
                                            textTransform="unset"
                                            margin="20px 0 10px"
                                        >
                                            This is a workflow system that allows both the customer of NOTAP to submit their technology registered agreement with NOTAP from anywhere in the world and also allow NOTAP staff to evaluate the submitted agreement.
                                        </GeneralSmText>

                                        <GeneralSmText
                                            textAlign="left"
                                            fontSize="10px"
                                            fontWeight="400"
                                            color="#2b2d42"
                                            lineHeight="25.6px"
                                            textTransform="unset">
                                            *TTR means Technology Transfer Registration.
                                        </GeneralSmText>
                                    </ProductChild>
                                </ProductChildrenWrapper>
                            </ProductContent>
                        </ProductBottomContent>
                    </SiteContainer>
                </ProductSection>
            </MainLayout>
        </>

    )
}

export default Products;