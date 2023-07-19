import React from 'react'
import Link from 'next/link'
import { GeneralLgText, GeneralSmText, CustomButton } from '../../styles/GlobalCss'
import {WhatWeDoSection, WhatWeDoContainer } from '../../styles/HomepageCss'


const HomeServicesList = () => {
  return (
    <WhatWeDoSection>
    <WhatWeDoContainer>
      <GeneralSmText
        data-aos="fade-right"
        data-aos-duration="1000"
        textAlign="left"
        fontSize="16px"
        color="#2b2d42"
        fontWeight="400"
        lineHeight="25.6px"
        textTransform="unset"
      >
        Zimalek global technologies Limited is an indigenous IT company known as the most rewarded company of the industry. We strive hard to fulfill the expectation of our Valuable clients. A team of dedicated experts and professional is hired by the company to serve with the best possible solutions to the experts of company. They will prepare a layout and implement the things accordingly to serve you the best possible web-based solutions. 
      </GeneralSmText>
      <GeneralSmText
        data-aos="fade-right"
        data-aos-duration="1000"
        textAlign="left"
        fontSize="16px"
        color="#2b2d42"
        fontWeight="400"
        lineHeight="25.6px"
        textTransform="unset"
        margin="10px 0"
      >
      We do strictly believe in serving our clients with the best possible solutions and hence, we put our continuous efforts and high level of professionalism, innovation, intelligence and teamwork to deliver the needed results to the client end. Satisfaction of our clients is our primary concern and we strive towards achieving it. This is the only reason we work in close co-ordination with clients to complete their assigned work. Because of these significant features, we are known as the trusted service provider company among the clients. We are committed towards delivering the projects to our valuable clients within the promised timeframe. 
      </GeneralSmText>
      <Link href="/about-us" passHref>
        <CustomButton
          fontWeight="600"
          background="var(--theme-color)"
          padding="14px 30px"
          width="200px"
          margin="2rem 0"
          border="1px solid var(--gradient-color-2)"
          color="#ffffff"
        >
          Learn More
        </CustomButton>
      </Link>
    </WhatWeDoContainer>
  </WhatWeDoSection>
  )
}

export default HomeServicesList