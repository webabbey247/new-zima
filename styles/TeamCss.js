import styled from 'styled-components';

export const TeamSection = styled.section`
background: #fff;
padding: 4rem 0;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  padding: 4rem 0 0;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  padding: 4rem 0 0;
}
`;


export const TeamContainer = styled.div`
width: min(100%,75rem);

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
  width: 100%;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  width: 100%;
}
`;

export const TeamIntroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-bottom: 3rem;
`;

export const TeamBottomContainer = styled.div`
padding: 4rem 0;
position: relative;
`;

export const MemberCard = styled.div`
  position: relative;
  display: block;
  padding-right: 20px;
  margin-bottom: 30px;

  &:hover {
    transform: scale(1.1) rotate(0deg);
    transition: all 500ms linear;
    transition-delay: 0.1s;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding-right: 0;

    &.memberInfoCard {
      margin-top: 80px;
    }

  }
`;

export const MemberCardImgHolder = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  background-color: #646464;
  // width: 300px;
  width: 406px;
  height: 370px;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    width: 390px;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
  }
`;

export const MemberCardImg = styled.div`
  max-width: 100%;
  height: 370px;
  transition-delay: 0.1s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.7s;
  transition-property: all;
  width: 100%;
  mix-blend-mode: luminosity;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MemberCardTextHolder = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(to right,#543a7e,#d03049);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.12);
  padding: 17px 20px 18px;
  transition: all 200ms linear;
  transition-delay: 0s;
  transition-delay: 0.1s;

  &${MemberCard}:hover {
    background: var(--gradient-color-1);
  }
`;

export const IconHolder = styled.div`
position: absolute;
bottom: 40%;
right: 5%;

// & > svg:hover {
//   width: 50px;
//   height:50px;
//   background: var(--white);
//   border-radius: 50%;
// }
`;

export const MemberCardProfileInfo = styled.div`
background-color: var(--primary);
padding: 2.5rem 1.5rem;
position: relative;
width: 100%;
`;

export const MemberCardCta = styled.button`
display: block;
background: var(--primary);
padding: 20px 30px;
margin: 2rem 0;
border: 1px solid var(--primary);
color: var(--white) !important;
position: relative;
padding-left: 3rem;

& > svg {
  position: absolute;
  left:  10%;
  top: 35%;
}

&:hover {
  background: var(--button-color);
  border: 1px solid var(--button-color);
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
  position: absolute;
  top: -10%;
}
`;


// export const LeadershipCard = styled.div`
// margin-bottom: 20px;
// `;

// export const LeadershipContent = styled.div`
// background: #fff;
// `;

// export const LeadershipPictureHolder = styled.div`
// height: 310px;
// margin-bottom: 12px;

// @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
//   height: auto;
//   padding: 0 3rem;
// }

// @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {

//   @media only screen and (max-device-width: 384px) {
//     padding: 0 2rem;
//   }
  
//   height: auto;
//   padding: 0 3rem;
// }

// `;

// export const LeadershipCardPic = styled.img`
// width: 100%;
// filter: grayscale(1);
// height: 350px;
// &:hover {
//   filter: none;
// }
// `;

// export const LeadershipCardInfo = styled.div`
// padding: 20px 15px 20px;
// `;























// export const TeamInfo = styled.div`
// width: 100%;
// position: relative;
// transition: background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s;
// margin: 1rem 0;
// `;

// export const TeamInfoContainer = styled.figure`
// display: flex;
// flex-direction: column;
// margin: 0;
// padding: 0;
// `;

// export const TeamInfoImg = styled.div`
// display: flex;
// flex-direction: row;
// `;

// export const TeamInfoButton = styled.div`
// background-color: #EF9801;
// display: flex;
// flex-direction: column;
// min-width: 2.5rem;
// margin-top: auto;
// `;

// export const TeamInfoLinkedinButton = styled.a`
// text-decoration: none;
// display: flex;
// flex-direction: row;
// align-items: center;
// justify-content: center;
// width: 2.5rem;
// height: 2.5rem;
// `;

// export const TeamInfoCheckBioButton = styled.span`
// height: 2.5rem;
// min-width: calc(75% - 2.5rem);
// margin-left: auto;
// margin-right: 2.5rem;
// background-color: #EF9801;
// display: flex;
// flex-direction: row;
// align-items: center;
// justify-content: center;


// `;

