import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 1rem;
  background: #1b1b1b;

  @media (max-width: 1399.98px) {
  }

  @media (max-width: 1199.98px) {
  }

  @media (max-width: 991.98px) {
    padding: 3rem 0;
  }

  @media (max-width: 767.98px) {
    padding: 1rem 0;
  }

  @media (max-width: 575.98px) {
  }
`;

export const FooterLTR = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 1rem;

  @media (max-width: 1399.98px) {
  }

  @media (max-width: 1199.98px) {
  }

  @media (max-width: 991.98px) {
    flex: 0 0 40%;
    max-width: 40%;
  }

  @media (max-width: 767.98px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 2rem;
  }

  @media (max-width: 575.98px) {
  }
`;

export const FooterImg = styled.figure`
  padding: 0;
  margin: 2.5rem 0 0;
  width: 200px;
  height: 100px;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    margin: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    margin: auto;
    width: 140px;
    height: 70px;
  }
`;

export const FooterFormContainer = styled.div`
  margin: 10px 0;
  position: relative;
`;

export const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FooterSocials = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  @media (max-width: 1399.98px) {
  }

  @media (max-width: 1199.98px) {
  }

  @media (max-width: 991.98px) {
  }

  @media (max-width: 767.98px) {
  }

  @media (max-width: 575.98px) {
  }
`;

export const FooterSocialsLink = styled.a`
  text-decoration: none;
  font-size: 25px;
  padding: 0 1rem;
  color: var(--gradient-color-1);
  cursor: pointer;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: none;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    font-size: 23px;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    font-size: 19px;
  }
`;

export const FooterRTL = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  flex-direction: row;
  display: flex;
  padding: 0 0 0 2rem;

  @media (max-width: 1399.98px) {
  }

  @media (max-width: 1199.98px) {
  }

  @media (max-width: 991.98px) {
    flex: 0 0 60%;
    max-width: 60%;
    flex-direction: column;
  }

  @media (max-width: 767.98px) {
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: column;
  }

  @media (max-width: 575.98px) {
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: column;
  }
`;

export const FooterTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 60%;
  max-width: 60%;

  @media (max-width: 1399.98px) {
  }

  @media (max-width: 1199.98px) {
  }

  @media (max-width: 991.98px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 767.98px) {
  }

  @media (max-width: 575.98px) {
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: row;
    justifycontent: center;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const FooterAddressInfo = styled.aside`
  flex: 0 0 50%;
  max-width: 50%;

  @media (max-width: 1399.98px) {
  }

  @media (max-width: 1199.98px) {
  }

  @media (max-width: 991.98px) {
  }

  @media (max-width: 767.98px) {
  }

  @media (max-width: 575.98px) {
  }

  //   @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  //     flex: 0 0 100%;
  //     max-width: 100%;
  //   }

  //   @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  //     flex: 0 0 100%;
  //     max-width: 100%;
  //     margin: 1rem 0;
  //   }

  //   @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
  //     flex: 0 0 100%;
  //     max-width: 100%;
  //     margin: 0.5rem 0;
  //   }
`;

export const FooterBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 40%;
  max-width: 40%;
  @media (max-width: 1399.98px) {
  }

  @media (max-width: 1199.98px) {
  }

  @media (max-width: 991.98px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 767.98px) {
  }

  @media (max-width: 575.98px) {
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: row;
    justifycontent: center;
    align-items: center;
  }
`;

export const FooterNavChild = styled.div`
  flex: 0 0 33.3%;
  max-width: 33.3%;

  @media (max-width: 575.98px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const FooterNav = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 0;
`;
