import styled from "styled-components";

export const AboutIndexSection = styled.section`
  padding: 3rem 0;
  justify-content: center;
  display: flex;
  align-items: center;
  align-content: center;  
`;

export const AboutIndexTopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const AboutIndexTopContent = styled.div`
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
`;

export const AboutIndexTopContentLeft = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding: 0 2rem;
`;

export const AboutIndexTopContentRight = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
`;

export const AboutIndexBottomContent = styled.div`
  padding: 1rem 0 2rem;
`;

export const ExpertiseCardChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  border-top-radius: 5px;
  border-bottom-radius: 0;
  background: var(--white);
  padding: 1rem 1rem 2rem;
  border: 1px solid #efeef0;
  border-bottom: 5px solid var(--theme-color);

`;

export const ExpertiseCardImgHolder1 = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-image: url('../static/images/about-banner-2-img.jpg');
  bacxkground-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 140px;
  border-radius: 5px;
  margin: 1rem 0;
`;

export const ExpertiseCardImgHolder2 = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-image: url('../static/images/servicesImg-2.png');
  bacxkground-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 140px;
  border-radius: 5px;
  margin: 1rem 0;
`;

export const ExpertiseCardImgHolder3 = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-image: url('../static/images/expertise-banner-img-3.jpg');
  bacxkground-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 140px;
  border-radius: 5px;
  margin: 1rem 0;
`;

export const ExpertiseCardContent = styled.div`
  height: 180px;
`;

export const ExpertiseCardReadMoreCta = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  letter-spacing: 0.18px;
  color: #d99a29;
  position: relative;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  margin: 0;

  &::before {
    content: "";
    width: 1rem;
    margin-right: 0.5rem;
    height: 0px;
    border-bottom: 1px solid;
    transition: margin-right 0.3s ease-out, width 0.3s ease-out;
    display: inline-block;
  }
`;

export const AboutUsIndexSeeMoreContent = styled.div`
padding: 1rem 0;
display: flex;
position: relative;
margin: auto 0 auto auto;
`;


// About Us Index CSS
export const AboutImageSection = styled.section`
  justify-content: center;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 6rem 0;
`;

export const AboutImageContainer = styled.section`
  margin: 3rem 1.5rem; 
  position: relative

`;


export const AboutImageLTRTop = styled.div`
display: flex;
flex: 0 0 100%;
position: relative;



&::before {
  background-image: linear-gradient(to right, #543a7e, #d03049);
  // background-color: var(--theme-color);
  content: "";
  height: 100%;
  position: absolute;
  top: 2.8rem;
  left: 2.5rem;
  width: 100%;
  box-shadow: 16px 16px 64px rgba(28,112,196,.15);
  border-radius: 5px;
}

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    &::before {
    left: 0;
    top: 0;
    height: auto;
    border-radius: 0;
  }
 }

 @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  &::before {
    left: 0;
    top: 0;
    height: auto;
    border-radius: 0;
  }
}


`;

export const AboutImageLTRTopImg = styled.div`
width: 100%;
padding: 1rem 2rem;
background-image: url('../static/images/career-img-01.jpg');
bacxkground-repeat: no-repeat;
background-size: cover;
background-position: 50%;
height: 360px;
margin-bottom: 1rem;
z-index: 100;
border-radius: 5px;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  height: 360px;
  padding: 1rem;
}


@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  height: 360px;
  padding: 0;
}
`;

export const AboutImageLTRBottom = styled.div`
width: 100%;
padding: 1rem 2rem;
background-image: url('../static/images/about-us-img-bottom.jpg');
bacxkground-repeat: no-repeat;
background-size: cover;
background-position: 50%;
height: 360px;
width: 100%;
margin-top: 1rem;
`;

export const AboutImageRTL = styled.div`
width: 100%;
padding: 1rem 2rem;
background-image: url('../static/images/about-us-full-img.jpg');
bacxkground-repeat: no-repeat;
background-size: cover;
background-position: 50%;
height: 100%;
width: 100%;
`;


