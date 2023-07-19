import styled from 'styled-components';
import { GeneralLgText } from './GlobalCss';

export const HeroBannerSection = styled.section`
height: 600px;
position: relative;
background: var(--white);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
// background-image: url('https://res.cloudinary.com/webstack-nigeria/image/upload/v1658969039/services-banner-img.webp');

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  height: 550px;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  height: 500px;
  }
`;

export const HeroBannerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
`;

export const HeroBannerChild = styled.div`
display: flex;
flex-direction: column;
background-repeat: repeat;
background-size: cover;
background-position: center;
padding: 8.5rem 3.5rem;
width: 100%;
height: 600px;
position: relative;
justify-content: center;
align-items: center;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  height: 600px;
}

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: 500px;
    padding: 8rem 2rem;
    }
`;

export const HeroBannerChildContainer = styled.div`
width: min(100%, 80rem);
`;

export const HeroBannerArrowWrapper = styled.div`
position: absolute;
  width: 10%;
  height: 20%;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;




export const HeroBannerLTR = styled.div`
flex: 0 0 50%;
max-width: 50%;
flex-direction: column;
display:flex;
margin-top: 4rem;
padding: 0;
margin-left: 4rem;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  flex: 0 0 100%;
  max-width: 100%;
  margin-left: 2rem;
  margin-top: 2rem;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-left: 0;
    margin-top: 0;

    & > h2 {
      font-size: 25px !important;
      line-height: 40px !important;
    }
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-left: 0;
    margin-top: 0;

    & > h2 {
      font-size: 20px !important;
      line-height: 35px !important;
     }
    }
`;

export const HeroBannerLTRCta = styled.a`
text-decoration: none !important;
background-image: linear-gradient(to right, #543a7e, #d03049);
padding: 14px 30px;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: var(--white);
text-align: center;
width: ${(props) => props.width || "20%"};

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  width: 100%;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  width: 100%;
  }


`;
export const HeroBannerOutlineLTRCta = styled.a`
text-decoration: none !important;
background: transparent;
border: 1px solid #EF9801;
padding: 12px 40px;
font-weight: 500;
font-size: 12px;
line-height: 24px;
letter-spacing: 0.12em;
color: #EF9801;
text-transform: uppercase;
width: 230px;
text-align: center;

`;


export const HeroBannerRTL = styled.div`
flex: 0 0 50%;
max-width: 50%;
`;

export const HeroBannerRTLImgHolder = styled.figure`
padding: 0;
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF00;
background-position: top right;
background-repeat: no-repeat;
opacity: 1;
transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
height: 60vh !important;
`;
