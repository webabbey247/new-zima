import React from 'react'
import styled from 'styled-components'
import { GeneralMdText, GeneralSmText } from '../../styles/GlobalCss'
import { FooterAddressInfo } from '../../styles/FooterCss'


const FooterAddressCard = ({country, address, mobile, email_address}) => {
  return (
    <FooterAddressInfo>
    <GeneralMdText
      color="#D99A29"
      fontSize="13px"
      fontWeight="700"
      textAlign="left"
      textTransform="uppercase"
    >
     {country}
    </GeneralMdText>
    <GeneralSmText
      color="var(--white)"
      margin="20px 0 0"
      fontSize="15px"
      fontWeight="400"
      textAlign="left"
      width="75%"
      lineHeight="23px"
      textTransform="unset"
    >
      {address}
    </GeneralSmText>
    <GeneralSmText
      color="var(--white)"
      margin="10px 0"
      fontSize="15px"
      fontWeight="400"
      textAlign="left"
      lineHeight="23px"
      textTransform="unset"
    >
       Phone:{mobile}
    </GeneralSmText>
    <GeneralSmText
      color="var(--white)"
      fontSize="15px"
      fontWeight="400"
      textAlign="left"
      lineHeight="23px"
      textTransform="unset"
    >
       Email: {email_address}
    </GeneralSmText>
  </FooterAddressInfo>
  )
}

export default FooterAddressCard