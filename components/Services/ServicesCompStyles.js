import styled from "styled-components";

export const ServicesCardList = styled.div`
  background: #fff !important;
  padding: 30px 25px 30px;
  position: relative;
  width: 100%;
  margin: 1rem 0;
  transition: all 0.3s ease-in-out;
  height: 460px;
  border-radius: 5px;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: auto;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: auto;
    padding: 1rem 1.3rem;
  }
`;

export const ServicesCardIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-bottom: 2rem;
`;
