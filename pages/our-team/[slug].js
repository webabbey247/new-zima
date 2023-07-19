import React from "react";
import MainLayout from "../../components/Layouts/MainLayout";
import styled from "styled-components";
import Image from "next/image";
import {
  GeneralMdText,
  GeneralSmText,
} from "../../styles/GlobalCss";
import { FaLinkedinIn } from 'react-icons/fa';


export const TeamInfoSection = styled.section`
  padding: 10rem 0;
  background: #342C1B;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamInfoContainer = styled.div`
  width: min(100%, 70rem);
  display: flex;
  flex-direction: row;
`;

export const TeamInfoLTR = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  padding-right: 4rem;
`;

export const TeamInfoRTL = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  position: relative;
`;


export const TeamContainer = styled.figure`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;
`;

export const TeamImg = styled.div`
display: flex;
flex-direction: row;
`;

export const TeamSocialButton = styled.div`
background-color: #EF9801;
display: flex;
flex-direction: column;
min-width: 2.5rem;
margin-top: auto;
`;

export const TeamLinkedinButton = styled.a`
text-decoration: none;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 2.5rem;
height: 2.5rem;
`;

export const TeamCheckBioButton = styled.span`
height: 2.5rem;
min-width: calc(75% - 2.5rem);
margin-left: auto;
margin-right: 2.5rem;
background-color: #EF9801;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const TeamContent = styled.aside`
color: #ffffff;
font-size: 16px;
line-height: 26px;
text-transform: unset;
font-weight: 400;
`;

const TeamInfo = ({member}) => {
  return (
    <>
      <MainLayout title={member.data.full_name} description={member.data.full_name}>
        <TeamInfoSection>
          <TeamInfoContainer>
            <TeamInfoLTR>
              <GeneralMdText
                color="#D99A29"
                fontSize="21px"
                fontWeight="600"
                lineHeight="28px"
                textTransform="capitalize"
              >
                {member.data.full_name}
              </GeneralMdText>
              <GeneralSmText
                color="#ffffff"
                fontSize="12px"
                fontWeight="400"
                lineHeight="19px"
                textTransform="uppercase"
              >
               {member.data.position}
              </GeneralSmText>
              <TeamContent
                
                margin="1rem 0" 
                dangerouslySetInnerHTML={{__html: member.data.biography }}
              />
            </TeamInfoLTR>

            <TeamInfoRTL>
              <TeamContainer>
                <TeamImg>
                  <Image
                    src={member.data.cover_img_url}
                    alt={member.data.full_name}
                    placeholder="blur"
                    blurDataURL={member.data.cover_img_url}
                    height={550}
                    width={460}
                  />
                  <TeamSocialButton>
                    <TeamLinkedinButton>
                      <FaLinkedinIn />
                    </TeamLinkedinButton>
                  </TeamSocialButton>
                </TeamImg>
              </TeamContainer>
            </TeamInfoRTL>
          </TeamInfoContainer>
        </TeamInfoSection>
      </MainLayout>
    </>
  );
};

export default TeamInfo;

export async function getServerSideProps({params}){
  const slug = params.slug
  const member = await fetch(`https://api.zimalek.com/api/office-leadership/${params.slug}`).then(res => res.json());
  return {
      props: {
          slug,
          member
      }
  } 
}
