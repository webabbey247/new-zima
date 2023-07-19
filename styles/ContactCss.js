import styled from "styled-components";

export const ContactMapSection = styled.section`
padding: 0;
margin: 0;
`;

export const ContactSection = styled.section`
padding: 4rem 0 2rem;
background: var(--white);
display: flex;
align-items: center;
justify-content: center;

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    padding: 1rem 2rem;
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 1rem 2rem;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 1rem 0;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 1rem 0.5rem;

}
`;

export const ContactLTR = styled.div`
flex: 0 0 60%;
max-width: 60%;
padding: 1rem 0 0;

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
   
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 1rem 0;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 1rem;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 1rem 0.5rem;
}
`;


export const ContactRTL = styled.div`
flex: 0 0 40%;
max-width: 40%;
padding: 2rem 0 2rem 2rem;

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
   
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 1rem 0;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 1rem;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 1rem 0.5rem;
}
`;

export const ContactInfoCard = styled.div`
background: #ffffff;
box-shadow: 30.091px 39.932px 120px 0px rgba(26, 46, 85, 0.15);
position: relative;
padding: 43px 45px;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 43px 20px;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {

}
`;

export const ContactInfoAddress = styled.div`
margin: 0 0 1rem;
`;

export const ContactInfoPhone = styled.div`
margin: 0 0 1rem;
`;

export const ContactInfoEmail = styled.div`
margin: 0 0 1rem;
`;


export const GlobalLocationSection = styled.section`
padding: 3rem 0;
background: #f2f2f2;
display: flex;
align-items: center;
justify-content: center;

@media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
   
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    padding: 3rem 1rem;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 3rem 0.5rem 2rem;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 3rem 0 2rem;

}
`;

export const GlobalLocationContainer = styled.div`
width: min(100%,80rem);

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
}

`;

export const TestimonialCard = styled.div`
width: 100%;
float: left;
overflow: hidden;
padding: 0;
border-radius: 5px;
margin: 3rem 0;
box-shadow: 30.091px 39.932px 120px 0px rgba(26,46,85,0.15);
`;

export const TestimonialCardInfo = styled.div`
background: #161E2D;
// padding: 2rem 1rem;
padding: 43px 45px;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 43px 20px;}
`;

export const TestimonialCardClient = styled.div`
background: #fff;
// padding: 10px 15px;
padding: 33px 45px;
margin-top: 0px;
width: 100%;
float: left;
`;


