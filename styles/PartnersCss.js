import styled from "styled-components";
import Image from "next/image";

export const PartnerSection = styled.section`
padding: 4rem 0;
background: #f0f3f6;
display: flex;
align-items: center;
justify-content: center;
`;

export const PartnerTopContent = styled.div`
width: min(100%,80rem);
`;

export const PartnerCardV2 = styled.div`
background: #fff !important;
padding: 30px 25px 30px;
position: relative;
width: 100%;
margin: 1rem 0;
height: auto;
border-radius: 5px;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    height: 470px;
  }

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
}
`;

export const PartnerCardImg = styled(Image)`
height: auto;
flex: 0 0 30%;
width: 100px;
`;

export const PartnerCardCta = styled.a`
text-decoration: none !important;
background: #EF9801;
padding: 12px 20px;
font-weight: 600;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.12em;
color: #FFFFFF;
text-transform: capitalize;
flex: 0 0 30%;
text-align: center;
height: 45px;
border-radius: 5px;
`;

export const PartnerChildLTR = styled.div``;

export const PartnerName = styled.div``;

export const PartnerChildRTL = styled.div``;



// Homepage CSS




