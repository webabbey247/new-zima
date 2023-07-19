import React from "react";
import styled from "styled-components";
import { ContentRow, GeneralMdText } from "../../styles/GlobalCss";
import ExpertiseCard from "./ExpertiseCard";
import { ExpertiseData } from "../../data/Utilities";


export const ExpertiseSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FDFBF6;
`;

export const ExpertiseContainer = styled.div`
  width: min(100%, 80rem);
  padding: 2rem 2rem 4rem;

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
 padding: 10px;
}

`;


const Expertise = () => {
  return (
    <>
      <ExpertiseSection>
        <ExpertiseContainer>
          <GeneralMdText
          fontSize="25px"
          lineHeight="38px"
          fontWeight="700"
            textTransform="unset"
            color="#342C1B"
            margin="2rem 0"
          >
            Explore our expertise and competencies.
          </GeneralMdText>
          <ContentRow>
          <ExpertiseCard data={ExpertiseData} />
          </ContentRow>
        </ExpertiseContainer>
      </ExpertiseSection>
    </>
  );
};

export default Expertise;
