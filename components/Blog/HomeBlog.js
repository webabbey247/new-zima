import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  ContentFullColumn,
  ContentRow,
  GeneralMdText,
  GeneralSmText,
  SiteContainer,
} from "../../styles/GlobalCss";

import BlogCard from "./BlogCard";

export const HomeBlogSection = styled.section`
  padding: 3rem 0 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FDF9EA;
  // background: #3D3116;
`;

export const HomeBlogTopContent = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HomeBlog = ({data}) => {
  return (
    <>
      <HomeBlogSection>
        <SiteContainer>
          <ContentRow>
            <ContentFullColumn>
              <HomeBlogTopContent>
                <GeneralMdText
                  textAlign="center"
                  textTransform="unset"
                  fontSize="35px"
                  fontWeight="700"
                  color="#342C1B"
                  lineHeight="45px"
                >
                  Recent Insights &amp; Media Mentions
                </GeneralMdText>
                <GeneralSmText textAlign="center" fontWeight='400' fontSize='24px' lineHeight='31px' color='#342C1B' margin='1rem 0'>
                  Catch up on the latest news and delve more into how we&apos;re
                  driving innovation and change, through our insights at Fasyl.

                </GeneralSmText>
              </HomeBlogTopContent>
            </ContentFullColumn>
            
            <BlogCard articles={data.data}  />
           
          </ContentRow>
        </SiteContainer>
      </HomeBlogSection>
    </>
  );
};

export default HomeBlog;