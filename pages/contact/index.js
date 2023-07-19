import React from "react";
import MainLayout from "../../components/Layouts/MainLayout";
import { ContactUsForm } from "../../components/Forms";
import { FaQuoteRight } from "react-icons/fa";
import {
  ContactLTR,
  ContactMapSection,
  ContactRTL,
  ContactSection,
  ContactInfoCard,
  TestimonialCard,
  TestimonialCardInfo,
  TestimonialCardClient,
} from "../../styles/ContactCss";

import {
  CustomDiv,
  GeneralMdText,
  GeneralSmText,
  SiteContainer,
} from "../../styles/GlobalCss";

const ContactUs = () => {
  return (
    <>
      <MainLayout title="Contact" description="">
        {/* <ContactMapSection>
          <iframe
            style={{
              border: 0,
              marginTop: "4rem",
            }}
            title="Zimalek Technology Group"
            aria-label="Ladi Alakija Street, Lekki"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2694918384673!2d3.329059214770479!3d6.487518195306986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8eae7fbfcb71%3A0x4fbb097aa3dff587!2s1%20Anjorin%20St%2C%20Ijesha%20Tedo%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1672116526780!5m2!1sen!2sng"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </ContactMapSection> */}

        <ContactSection>
          <SiteContainer>
            <CustomDiv
              className="Contact-Us_Content"
              display="flex"
              justifyContent="space-between"
              flexDirection="row"
            >
              <ContactLTR>
                <GeneralMdText
                  className="ContactUsTitle"
                  textAlign="left"
                  fontWeight="600"
                  fontSize="24px"
                  lineHeight="55px"
                  margin="0"
                  padding="0"
                  color="var(--gradient-color-1)"
                  textTransform="unset"
                >
                  It all begins with a conversation!
                  {/* Lets talk tech! */}
                </GeneralMdText>
                <GeneralSmText
                  className="ContactUsSubTitle"
                  textAlign="left"
                  color="#83858c"
                  fontSize="15px"
                  lineHeight="25px"
                  fontWeight="400"
                  spacing="0.3px"
                  width="70%"
                  textTransform="unset"
                >
                  Please contact us with any questions you may have and we will
                  reply promptly. We're waiting to help make possibilities
                  happen...
                </GeneralSmText>

                <ContactUsForm />
              </ContactLTR>
              <ContactRTL>
                <ContactInfoCard>
                  <GeneralSmText
                    fontSize="15px"
                    fontWeight="400"
                    color="#83858c"
                    lineHeight="26px"
                    textTransform="unset"
                  >
                    Zimalek Technologies has a competent and highly dedicated
                    team of professionals committed to service delivery
                    including:
                  </GeneralSmText>
                  <GeneralSmText
                    fontSize="15px"
                    fontWeight="400"
                    color="#83858c"
                    lineHeight="26px"
                    margin="0.5rem 0"
                    textTransform="unset"
                  >
                    Due to our organisational model and unique team dynamics, we
                    can (and usually do) deploy multiple solutions across
                    several organisations simultaneously. We are willing and
                    able to meet your needs immediately.
                  </GeneralSmText>
                </ContactInfoCard>

                <TestimonialCard>
                  <TestimonialCardInfo>
                    <FaQuoteRight size="30px" color="var(--white)" />
                    <GeneralSmText
                      fontSize="15px"
                      fontWeight="400"
                      color="#ffffff"
                      lineHeight="26px"
                      textTransform="unset"
                      margin="1rem 0 0"
                    >
                      Zimalek Technologies was very efficient and fast in
                      providing me the application I needed for a project I was
                      working on. They beat the cost of every other developer
                      that had applied for the job and finished the job ahead of
                      schedule. I would gladly do work with them again!
                    </GeneralSmText>
                  </TestimonialCardInfo>

                  <TestimonialCardClient>
                    <GeneralMdText
                      fontSize="15px"
                      fontWeight="700"
                      color="#f71735 "
                      lineHeight="20px"
                      margin="0.2rem 0"
                      textTransform="unset"
                    >
                      Alexander Feng
                    </GeneralMdText>
                    <GeneralSmText
                      fontSize="15px"
                      fontWeight="400"
                      color="#83858c"
                      lineHeight="20px"
                      margin="0.1rem 0"
                      textTransform="unset"
                    >
                      Vice President
                    </GeneralSmText>
                    <GeneralSmText
                      fontSize="15px"
                      fontWeight="400"
                      color="#83858c"
                      lineHeight="20px"
                      margin="0"
                      textTransform="unset"
                    >
                      Mountain View, CA
                    </GeneralSmText>
                  </TestimonialCardClient>
                </TestimonialCard>
              </ContactRTL>
            </CustomDiv>
          </SiteContainer>
        </ContactSection>
      </MainLayout>
    </>
  );
};

export default ContactUs;
