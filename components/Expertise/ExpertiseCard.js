import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  GeneralMdText,
  Content4Column4,
  Content3Column3,
} from "../../styles/GlobalCss";

import { businessAnalyst } from "../../assets";


export const ExpertiseCardChild = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #474747;
  filter: drop-shadow(0px 0px 0px #342c1b);
  transition: all 0.3s ease-in-out;
  border-radius: 0;
  margin: 1rem 0;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.32);
    transition: box-shadow 0.3s ease-in-out;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    & > h4 {
  font-size: 18px !important;
  line-height: 23.3px !important;
    }
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    & > h4 {
      font-size: 18px !important;
      line-height: 23.3px !important;
     }
    }

`;

const ExpertiseCard = ({data}) => {
  return (
     data.map((item, index) => {
      return (
        <Content3Column3 key={index} id={item.id}>
        <ExpertiseCardChild>
          <Image width={50} height={50} src={item.imgUrl} placeholder='blur' blurDataURL={item.imgUrl} alt={item.title} />
          <GeneralMdText
            fontSize="18px"
            color="#342C1B"
            lineHeight="23.3px"
            textTransform="capitalize"
            fontWeight="700"
            margin='0 0 0 1rem'
            textAlign='left'
            >
            {item.title}
          </GeneralMdText>
        </ExpertiseCardChild>
      </Content3Column3>
      )
      })   
  );
};

export default ExpertiseCard;
