import React from "react";
import Link from "next/link";
import {
  ContentRow,
  Content2Column2,
  GeneralMdText,
  GeneralSmText,
} from "../../styles/GlobalCss";
import {
  HomeServicesSection,
  HomeServicesContainer,
  HomeServiceBlankList,
  HomeServiceListCta,
  HomeServiceList,
  HomeServiceListInner01,
  HomeServiceListInner02,
  HomeServiceListInner03,
  HomeServiceListContent,
} from "../../styles/HomepageCss";

const HomeServicesGrid = () => {
  return (
    <HomeServicesSection>
      <HomeServicesContainer>
        <ContentRow>
          <Content2Column2>
            <HomeServiceBlankList>
              <GeneralMdText
                margin="10px 0 20px"
                fontSize="35px"
                fontWeight="600"
                lineHeight="1.25"
                color="#2b2d42"
                textAlign="left"
                textTransform="unset"
              >
                Our Services
              </GeneralMdText>
              <GeneralSmText
                fontSize="16px"
                fontWeight="400"
                lineHeight="26.5px"
                color="#2b2d42"
                textAlign="left"
              >
                We are a world class organization driven by a passion to deliver
                value for our clients, and ensure that they succeed in their
                chosen markets and operating environments, we pay detailed
                attention to the needs of our clients and carefully examine
                their business operations and operating market dynamics to
                deliver best-in-class tailored solutions.
              </GeneralSmText>
              <Link href="/services" passHref>
                <HomeServiceListCta>View Services</HomeServiceListCta>
              </Link>
            </HomeServiceBlankList>
          </Content2Column2>
          <Content2Column2>
            <HomeServiceList>
              <HomeServiceListInner01>
                <HomeServiceListContent>
                  <GeneralMdText
                    margin="30px 0 20px"
                    fontSize="20px"
                    fontWeight="600"
                    lineHeight="1.25"
                    color="var(--white)"
                    textAlign="left"
                  >
                    01
                  </GeneralMdText>
                  <GeneralMdText
                    width="80%"
                    textTransform="unset"
                    margin="0 0 20px"
                    fontSize="35px"
                    fontWeight="600"
                    lineHeight="1.25"
                    color="var(--white)"
                    textAlign="left"
                  >
                    Mobile & Software development
                  </GeneralMdText>
                  <GeneralSmText
                    textTransform="unset"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="25.6px"
                    color="var(--white)"
                    textAlign="left"
                  >
                    Zimalek is a leading website, App and software development
                    agency. We build in different programming languages and our
                    technology has powered a lots of projects. Zimelek is a
                    trusted company of the industry and known as one of the
                    topmost ..
                  </GeneralSmText>
                </HomeServiceListContent>
              </HomeServiceListInner01>
            </HomeServiceList>
          </Content2Column2>

          <Content2Column2>
            <HomeServiceList>
              <HomeServiceListInner02>
                <HomeServiceListContent>
                  <GeneralMdText
                    margin="30px 0 20px"
                    fontSize="20px"
                    fontWeight="600"
                    lineHeight="1.25"
                    color="var(--white)"
                    textAlign="left"
                  >
                    02
                  </GeneralMdText>
                  <GeneralMdText
                    width="80%"
                    textTransform="unset"
                    margin="0 0 20px"
                    fontSize="35px"
                    fontWeight="600"
                    lineHeight="1.25"
                    color="var(--white)"
                    textAlign="left"
                  >
                    Cloud Security & Services
                  </GeneralMdText>
                  <GeneralSmText
                    textTransform="unset"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="25.6px"
                    color="var(--white)"
                    textAlign="left"
                  >
                    Zimalek provides a state of the art Cyber security Services
                    and Solutions for Network Assessment, Policy development,
                    SOC Solution management...
                  </GeneralSmText>
                </HomeServiceListContent>
              </HomeServiceListInner02>
            </HomeServiceList>
          </Content2Column2>

          <Content2Column2>
            <HomeServiceList>
              <HomeServiceListInner03>
                <HomeServiceListContent>
                  <GeneralMdText
                    margin="30px 0 20px"
                    fontSize="20px"
                    fontWeight="600"
                    lineHeight="1.25"
                    color="var(--white)"
                    textAlign="left"
                  >
                    03
                  </GeneralMdText>
                  <GeneralMdText
                    width="80%"
                    textTransform="unset"
                    margin="0 0 20px"
                    fontSize="35px"
                    fontWeight="600"
                    lineHeight="1.25"
                    color="var(--white)"
                    textAlign="left"
                  >
                    ICT Consultation & Maintenance
                  </GeneralMdText>
                  <GeneralSmText
                    textTransform="unset"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="25.6px"
                    color="var(--white)"
                    textAlign="left"
                  >
                    Zimalek is the leading ICT consultancy services provider.
                    Our team is made up of highly experienced IT architects and
                    MBA business analysts. We have embarked on a number of ICT
                    consultancy projects, ranging from optimizing existent
                    enterprise ...
                  </GeneralSmText>
                </HomeServiceListContent>
              </HomeServiceListInner03>
            </HomeServiceList>
          </Content2Column2>
        </ContentRow>
      </HomeServicesContainer>
    </HomeServicesSection>
  );
};

export default HomeServicesGrid;
