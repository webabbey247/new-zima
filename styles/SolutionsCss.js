import styled from "styled-components";

export const HomeSolutionSection = styled.section`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeSolutionHeader = styled.div`
  margin: 1rem 0;
`;

export const HomeSolutionContent = styled.div`
  margin-top: 60px;
  float: left;
  width: 100%;
  position: relative;
  transition: all 1s ease-in-out 0.5s;
  overflow: hidden;
`;

export const HomeSolutionInnerContent = styled.div`
  background: #fdf9ea;
  position: absolute;
  bottom: 0;
  width: 650px;
  padding: 34px 60px 30px 60px;
  left: 120px;
  transition: all 1s ease-in-out 0.8s;
`;

export const HomeSolutionCta = styled.a`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  letter-spacing: 0.18px;
  color: #d99a29;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;

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

// Version 2

export const SolutionsCardSection = styled.section`
  margin: 0;
  padding: 110px 0px 110px 0px;
//   padding: 60px 0px 60px 0px;
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 1s ease-in-out 0.8s;

  &::before {
    position: absolute;
    content: "";
    z-index: 1;
    background-image: url(https://www.inxsoftware.com/wp-content/uploads/2021/05/first-quantum-card-2.webp);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    bottom: 0;
    left: 35%;
    right: 0;
  }
`;

export const SolutionsCardReversedSection = styled.section`
  margin: 0;
//   padding: 60px 0px 60px 0px;
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 1s ease-in-out 0.8s;

  &::before {
    position: absolute;
    content: "";
    z-index: 1;
    background: #fdf9ea;
    right: 35%;
    left: 0;
    top: 0;
    bottom: 0;
  }
`;

export const SolutionCardLTR = styled.div`
  z-index: 11;
  display: flex;
  padding: 10px;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s,
    -webkit-border-radius 0.3s, -webkit-box-shadow 0.3s;
`;

export const SolutionCardRTL = styled.div`
  position: relative;
  margin: 0px 0px 0px 30px;
  padding: 30px 10px 10px 10px;
  width: 100%;
  z-index: 11;
`;
