import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroBannerData } from "../../data/Utilities";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, EffectFade, Autoplay } from "swiper";

import {
  GeneralLgText,
  GeneralSmText,
  CustomButton,
} from "../../styles/GlobalCss";
import {
  HeroBannerSection,
  HeroBannerChild,
  HeroBannerContainer,
  HeroBannerChildContainer,
} from "../../styles/HeroBannerCss";

const HeroBanner = () => {
  return (
    <HeroBannerSection>
      <HeroBannerContainer>
        <Swiper
          effect={"fade"}
          spaceBetween={30}
          navigation={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation]}
        >
          {HeroBannerData.map((item, index) => {
            return (
              <SwiperSlide key={index} id={item.id}>
                <HeroBannerChild
                  style={{
                    backgroundImage: `url(${item.bgImg})`,
                  }}
                >
                  <HeroBannerChildContainer>
                    <GeneralLgText
                      width="60%"
                      color="#ffffff"
                      fontSize="41px"
                      lineHeight="60px"
                      fontWeight="600"
                      textTransform="capitalize"
                    >
                      {item.title}
                    </GeneralLgText>
                    <GeneralSmText
                      width="50%"
                      color="#ffffff"
                      fontSize="15px"
                      lineHeight="25px"
                      textTransform="unset"
                      fontWeight="400"
                      margin="1.5rem 0"
                    >
                      {item.desc}
                    </GeneralSmText>
                    <Link href="/portfolio" passHref>
                      <CustomButton
                        fontWeight="600"
                        background="var(--theme-color)"
                        padding="14px 30px"
                        width="200px"
                        // margin="2rem 0"
                        border="1px solid var(--gradient-color-2)"
                        color="#ffffff"
                      >
                        Our Portfolio
                      </CustomButton>
                    </Link>
                  </HeroBannerChildContainer>
                </HeroBannerChild>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </HeroBannerContainer>
    </HeroBannerSection>
  );
};

export default HeroBanner;
