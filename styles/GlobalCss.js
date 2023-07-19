import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
export const GlobalStyle = createGlobalStyle`

:root {
  --primary: #F7F7F7;
  --theme-color: #f71735;
  --secondary: #00B2F0;
  --testimonial-bg-color: #FEF7E7;
  --gray-color: #f8fcff;
  --nav-text-color: rgba(0,0,0,0.5);
  --footer-bg-color: #252B32;
  --white: #ffffff;
  --success: #20D071;
  --danger: #D24A4A;
  --gradient-color-1: #d03049;
  --gradient-color-2: #543a7e;
  --font-graphix: 'Poppins', san serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: var(--font-graphix);
  font-weight: 400;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  background: var(--white);
  min-height: 100vh;
  max-height: 100%;  
}
`;

export const MainContainer = styled.div`
  width: 100%;
padding: 0;
margin-right: auto;
margin-left: auto;
transition: all 0.5s ease;

`;

export const SiteContainer = styled.div`
  width: min(100%,80rem);

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

export const CustomDiv = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || null};
  align-items: ${(props) => props.alignItems || null};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  position: ${(props) => props.position || null};
  right: ${(props) => props.right || null};
  top: ${(props) => props.top || null};
  background: ${(props) => props.background || ""};
  max-width: 100%;

  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {

  }
  
  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
  }
  
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex-direction: column;

    &.FooterContent {
      flex-direction: row;
    }
  }
  
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;

    &.CareerInfo {
      padding: 0 1rem;
    }
    &.AboutImageLTRContent {
      padding: 0;
    }

    &.AboutImageLTRContent h4, &.AboutImageLTRContent p {
      padding: 0 1rem;
    }

    &.AboutVisionMission {
      padding: 1rem;
    }
  }
  
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex-direction: column;
    &.CareerInfo {
      padding: 0 0.5rem;
    }

    &.AboutImageLTRContent {
      padding: 0;
    }

    &.AboutImageLTRContent h4, &.AboutImageLTRContent p {
      padding: 0.5rem;
    }

    &.AboutVisionMission {
      padding: 0.5rem;
    }

  }
`;


export const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
`;

export const ContentFullColumn = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Content2Column2 = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;

  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
  }
  
  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
     
  }
  
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  }
  
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width:100%;
  }
  
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex: 0 0 100%;
    max-width:100%;
  }
`;

export const Content3Column3 = styled.div`
  flex: 0 0 33.3%;
  max-width: 33.3%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;

  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
  }
  
  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
     
  }
  
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
      flex: 0 0 50%;
      max-width: 50%;
  }
  
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width:100%;
  }
  
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex: 0 0 100%;
    max-width:100%;
  }
`;

export const Content4Column4 = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;

  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
  }
  
  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
     
  }
  
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
      flex: 0 0 50%;
      max-width: 50%;
  }
  
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width:100%;
  }
  
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex: 0 0 100%;
    max-width:100%;
  }
`;


export const Content6Column6 = styled.div`
flex: 0 0 16.666667%;
max-width: 16.666667%;
position: relative;
width: 100%;
padding-right: 10px;
padding-left: 10px;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  flex: 0 0 50%;
  max-width: 50%;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
flex: 0 0 100%;
max-width:100%;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
flex: 0 0 100%;
max-width:100%;
}
`;





export const CustomButton = styled.button`
  padding: ${(props) => props.padding || "0.6rem 2rem"};
  background: ${(props) => props.background || "#00b2f0"};
  border-radius: 0;
  border: ${(props) => props.border || "1px solid #00b2f0"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "100%"};
  text-transform: ${(props) => props.textTransform || "unset"};
  color: ${(props) => props.color || "va(--white)"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || "22px"};
  text-align: ${(props) => props.textAlign || "center"};
  cursor: ${(props) => (props.cursor ? "none" : "pointer")};
  disabled: ${(props) => (props.disabled ? props.disabled : false)};

  background-image: linear-gradient(to right, #543a7e, #d03049);

  &:first-child {
    margin-left: 0;
  }
  &:disabled:hover {
    background: #b3e8fb;
    border: 1px solid #00b2f0;
    color: var(--white);
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
   width: 100%;
  }
  //   &:hover {
  //     background: #252b32;
  //     border: 1px solid #252b32;
  //     color: var(--white);
  //   }
`;



export const CustomLink = styled.a`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "11.9294px"};
  line-height:  ${(props) => props.lineHeight || "14px"};
  color: ${(props) => props.color || "inherit"};
  text-align: ${(props) => props.textAlign || "left"};
  letter-spacing: ${(props) => props.spacing || "0.18px"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || null};
  display: ${(props) => props.display || 'flex'};
  border-radius: ${(props) => props.borderRadius || null};
  flex-direction: ${(props) => props.flexDirection || "row"};
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    font-size: 14px !important;
    width: 100%;
    }


@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  font-size: 14px !important;
  width: 100%;
}
`;



export const CustomRouterLink = styled(Link)`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "11.9294px"};
  line-height:  ${(props) => props.lineHeight || "14px"};
  color: ${(props) => props.color || "inherit"};
  text-align: ${(props) => props.textAlign || "left"};
  letter-spacing: ${(props) => props.spacing || "0.18px"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || null};
  display: ${(props) => props.display || 'flex'};
  border-radius: ${(props) => props.borderRadius || null};
  cursor: pointer !important;
  text-decoration: none !important;
  text-transform: capitalize;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    font-size: 15px !important;
    }


@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  font-size: 15px !important;
}
`;

export const GeneralLgText = styled.h2`
font-weight: ${(props) => props.fontWeight || "700"};
font-size: ${(props) => props.fontSize || "36px"};
line-height:  ${(props) => props.lineHeight || "47px"};
color: ${(props) => props.color || "inherit"};
text-align: ${(props) => props.textAlign || "left"};
letter-spacing: ${(props) => props.spacing || "0.18px"};
font-family: ${(props) => props.fontFamily || "var(--font-graphix)"};
width: ${(props) => props.width || "100%"};
padding: ${(props) => props.padding || "0"};
margin: ${(props) => props.margin || "0"};
text-transform: ${(props) => props.textTransform || "lowercase"};


@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {

}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {

}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {

}
`;

export const GeneralMdText = styled.h4`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "24px"};
  line-height:  ${(props) => props.lineHeight || "31px"};
  color: ${(props) => props.color || "#2b2d42"};
  text-align: ${(props) => props.textAlign || "left"};
  letter-spacing: ${(props) => props.spacing || "0.18px"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  text-transform: ${(props) => props.textTransform || "lowercase"};

  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {

  }
  
  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
  }
  
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  }
  
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {

    &.FooterNavTitle {
      margin-top: 0;
      font-size: 16px !important;
    }

    &.ContactUsTitle {
      padding: 0 1rem;
      font-size: 18px !important;
    }

    &.CareerJobTitle, &.CareerJobLocation {
      text-align: center;
      margin: 0;
    }
  }
  
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {

    &.FooterNavTitle {
      margin-top: 2rem;
      font-size: 16px !important;
    }


    &.ContactUsTitle {
      font-size: 16px !important;
    }

    &.CareerJobTitle, &.CareerJobLocation {
      text-align: center;
      margin: 0;
    }

    &.CareerJobLocation {
      font-size: 14px !important;
      line-height: 30px !important;
    }

    
  }

`;

export const GeneralSmText = styled.p`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "15px"};
  line-height:  ${(props) => props.lineHeight || "20px"};
  text-align: ${(props) => props.textAlign || "left"};
  letter-spacing: ${(props) => props.spacing || "0.18px"};
  color: ${(props) => props.color || ""};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  width: ${(props) => props.width || "100%"};
  text-transform: ${(props) => props.textTransform || "lowercase"};


  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {

  }
  
  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
  }
  
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
   width: 100%;
  }
  
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;

    &.ContactUsSubTitle {
      padding: 0 1rem;
    }

    &.CareerJobDate {
      text-align: center;
    }

  }
  
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;

    &.CareerJobDate {
      text-align: center;
    }

  }
`;

export const GeneralFlexRow = styled.div`
display: flex;
flex-direction: row;
padding: ${(props) => props.padding || "0"};
margin: ${(props) => props.margin || "0"};
height: ${(props) => props.height || ""};
width: ${(props) => props.width || "100%"};
align-items: ${(props) => props.alignItems || ""};
justify-content: ${(props) => props.justifyContent || "center"};

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {

}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  flex-direction: column;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
&.ClienStats {
  flex-direction: column;
}

}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {

}
`;

export const GeneralFlexColumn = styled.div`
display: flex;
flex-direction: column;
padding: ${(props) => props.padding || "0"};
margin: ${(props) => props.margin || "0"};
height: ${(props) => props.height || ""};
width: ${(props) => props.width || "100%"};
align-items: ${(props) => props.alignItems || ""};
justify-content: ${(props) => props.justifyContent || "center"};
`;


export const FormLoader = styled.span`
  width: ${(props) => props.width || "30px"};
  height: ${(props) => props.height || "30px"};
  border: ${(props) => props.border || "6px solid var(--primary)"};
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  display: flex;
  margin: auto;
  justify-content: flex-start;
  align-items: flex-start;
  align-contents: flex-start;
`;


