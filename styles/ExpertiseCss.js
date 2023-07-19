import styled from "styled-components";


export const ExpertiseCardSection = styled.section`
padding: 8rem 0 4rem;
// background: #3D3116;
display: flex;
justify-content: center;
align-items: center;
`;

export const ExpertiseCardLTR = styled.div`
flex: 0 0 30%;
max-width: 30%;
padding: 4rem 2rem;
`;

export const ExpertiseCardRTL = styled.div`
flex: 0 0 70%;
max-width: 70%;
`;

export const ExpertiseCardChild = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
// background: linear-gradient(0deg, #FBF5EA, #FBF5EA), linear-gradient(0deg, #F6F6F6, #F6F6F6), #F5F8FF;
border-radius: 5px;
width: 350px;
border-radius: 5px;

`;

export const ExpertiseCardImgHolder = styled.figure`
width: 100%;
margin: 0;
height: 100%;
`;

export const ExpertiseCardContent = styled.div`
padding: 1rem;
// background: #FBF5EA;
height: 280px;
margin-top: -10px;

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
  height: 40px;

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