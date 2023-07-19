import React from 'react';
import styled from "styled-components";
import Image from 'next/image';
import { Content3Column3, GeneralMdText, GeneralSmText } from '../../styles/GlobalCss';
import locationUrl from '../../public/static/images/location-icon.png';

const GlobalLocationCard = styled.div`
width: 100%;
float: left;
margin: 25px 0px;
box-sizing: border-box;
background: #ffffff;
border: 1px solid #e3e3e3;
border-radius: 3px;
position: relative;
min-height: 300px;
`;

const GlobalLocationCardTitle = styled.div`
width: 100%;
float: left;
padding: 20px 20px 10px 75px;
line-height: 20px;
box-sizing: border-box;
color: #1564af;
position: relative;
font-size: 17px;
font-weight: 600;
`;

const GlobalLocationCardAddress = styled.div`
width: 100%;
float: left;
box-sizing: border-box;
padding: 0px 20px 20px 75px;
font-size: 15px;
font-weight: 400;
min-height: 145px;
`;

const GlobalLocationCardMap = styled.div`
position: absolute;
top: 29%;
left: 1%;
`;

const GlobalLocationCardMapIcon = styled(Image)`
border: 0;
vertical-align: middle;
`;

const GlobalOffices = ({ data }) => {
  return (
    data.map((item, index) => {
      return (
        <Content3Column3 id={item.id} key={index}>
          <GlobalLocationCard>
            <GlobalLocationCardTitle>
              <GeneralMdText fontSize='24px' color='#EF9801' fontWeight='700' lineHeight='33px' margin='0.3rem 0' textTransform='capitalize'>{item.country}- Corporate Headquarters</GeneralMdText>
            </GlobalLocationCardTitle>
            <GlobalLocationCardAddress>
              <GeneralSmText fontSize='16px' fontWeight='700' color='#83858c' lineHeight='26px' margin='0.4rem 0' textTransform='unset'>
                {item.address}
              </GeneralSmText>
              <GeneralSmText fontSize='16px' fontWeight='700' color='#83858c' lineHeight='26px' margin='0.3rem 0' textTransform="capitalize">
                Phone:{item.mobile}
              </GeneralSmText>
              <GeneralSmText fontSize='16px' fontWeight='700' color='#83858c' lineHeight='26px' margin='0.3rem 0' textTransform="capitalize">
                Email: {item.email_address}
              </GeneralSmText>
            </GlobalLocationCardAddress>
            <GlobalLocationCardMap>
              <GlobalLocationCardMapIcon src={locationUrl} alt={item.address} />
            </GlobalLocationCardMap>
          </GlobalLocationCard>
        </Content3Column3>
      );
    })
  );
};
export default GlobalOffices;
