import React from "react";
import styled from "styled-components";
import { GeneralMdText, Content4Column4 } from "../../styles/GlobalCss";

import { ApproachData } from "../../data/Utilities";

export const OurApproachCardChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  border: 1.5px solid #474747;
  filter: drop-shadow(0px 0px 0px #342c1b);
  transition: all 0.3s ease-in-out;
  border-radius: 0;
  margin: 1rem 0;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.32);
    transition: box-shadow 0.3s ease-in-out;
    border: 1.5px solid var(--gradient-color-2);
    background-image: linear-gradient(to right, #543a7e, #d03049);

  }
`;

const OurApproachCard = () => {
  return (
    <>
      {ApproachData.map((item, index) => {
        return (
          <Content4Column4 key={index} id={item.id}>
            <OurApproachCardChild>
              <GeneralMdText
                fontSize="18px"
                color="var(--white)"
                lineHeight="23.3px"
                textTransform="capitalize"
                fontWeight="700"
                textAlign="center"
              >
                {item.title}
              </GeneralMdText>
            </OurApproachCardChild>
          </Content4Column4>
        );
      })}
    </>
  );
};

export default OurApproachCard;
