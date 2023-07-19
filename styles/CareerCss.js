import styled from "styled-components";

export const CareerSection = styled.section`
padding: 2rem 0;
justify-content: center;
display: flex;
align-items: center;
`;

export const CareerTopContent = styled.div`
padding: 3rem 0;
`;

export const CareerContent = styled.div`
padding: 2rem 0;
`;

export const CareerChild = styled.div`
display: flex;
justfiy-content: space-between;
flex-direction: row;
width: 100%;
border-top: 5px solid rgba(239,152,1, 0.3) !important;
padding: 1.5rem 0;

&:last-child {
    border-bottom: 5px solid rgba(239,152,1, 0.3) !important;
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex-direction: row;
    padding: 0.5rem 1rem;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex-direction: column;
  }

`;

export const CareerChildLTR = styled.div`
flex: 0 0 75%;
display: flex;
flex-direction: column;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex: 0 0 50%;
  }

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
}

`;


export const CareerChildRTL = styled.div`
flex: 0 0 25%;
display: flex;
flex-direction: column;
text-align: right;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex: 0 0 50%;
  }


@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
}
`;


export const CareerCard = styled.div`
padding: 2.2em 1.43em 1.43em;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color: #f2f2f2 !important;
border-top-color: #EF9801 !important;
border-top-width: 10px;
border-top-style: solid;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    & h4 {
        text-align: center;
    }
}
`;

export const CareerApplyButton = styled.a`
padding: 0.6rem 2rem;
background: #EF9801;
border-radius: 0;
border: 1px solid #EF9801;
margin: 0.5rem 0;
width: 200px;
height: 47.77px;
font-weight: 600;
font-size: 15px;
line-height: 22px;
text-align: center;
color: var(--white);
cursor: pointer;
margin-left: auto;
margin-right: 0;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    margin: 0.5rem auto;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    margin: 0.5rem auto;
  }


&:hover {
    background: var(--white);
    border: 1px solid #EF9801;
    color: #EF9801;
}
`;

export const CareerOutlineApplyButton = styled.a`
padding: 0.6rem 2rem;
background: var(--white);
border-radius: 0;
border: 1px solid #EF9801;
margin: 0.5rem 0;
width: 200px;
height: 47.77px;
font-weight: 600;
font-size: 15px;
line-height: 22px;
text-align: center;
color: #EF9801;
cursor: pointer;
margin-left: auto;
margin-right: 0;

&:hover {
    background: var(--white);
    border: 1px solid #EF9801;
    color: #EF9801;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
   margin: 0.5rem auto;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    margin: 0.5rem auto;
  }


`;

export const CareerPreviewDescription = styled.article`
color :#2b2d42 !important;
font-size: 16px !important;
line-height: 26px !important;
font-weight: 400 !important;
`;

