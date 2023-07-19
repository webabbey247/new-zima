import React from "react";
import Image from "next/image";
import { GeneralSmText, CustomDiv } from "../../styles/GlobalCss";
import {
  PartnerChildLTR,
  PartnerChildRTL,
  PartnerName,
} from "../../styles/PartnersCss";

const PartnerIndexCard = ({data}) => {
  return (
    data.map((item, index) => {
       return (
         <CustomDiv key={index} id={item.id} display="flex" flexDirection="row" margin="0 0 2rem 0">
            <PartnerChildLTR>
              <Image src={item.cover_img_url} alt={item.caption} width={250} height={50} />
            </PartnerChildLTR>
            <PartnerChildRTL>
              <PartnerName>{item.caption}</PartnerName>
              
                <GeneralSmText fontSize="16px"
                fontWeight="400"
                color="#83858c"
                lineHeight="26px"
                padding="1.5rem 0"
                textTransform="unset" 
                dangerouslySetInnerHTML={{__html: item.description }} />                
            </PartnerChildRTL>
          </CustomDiv>
       );
       
      })
  );
};

export default PartnerIndexCard;
