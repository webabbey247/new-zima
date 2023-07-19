import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  ContentFullColumn,
  ContentRow,
  GeneralMdText,
  Content4Column4,
  FormLoader,
} from "../../styles/GlobalCss";
import { useAllPartnersQuery } from "../../redux/services/siteApiSlice";
import { ClientData } from "../../data/Utilities";

export const PartnerSection = styled.section`
  padding: 2rem 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 1rem 0 4rem;
  }
`;

export const PartnerContainer = styled.div`
  width: min(100%, 80rem);
`;

export const PartnerFigure = styled.figure`
  max-height: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Partners = ({ type }) => {
  const {
    data: isPartner,
    isLoading,
    isFetching,
    error,
  } = useAllPartnersQuery();

  return (
    <>
      {type === "client" && (
        <PartnerSection>
          <PartnerContainer>
            <ContentRow>
              <ContentFullColumn>
                <GeneralMdText
                  fontSize="40px"
                  lineHeight="1.25"
                  color="#342C1B"
                  fontWeight="700"
                  textTransform="capitalize"
                  margin="3rem 0"
                  textAlign="center"
                >
                  Our Top Clients
                </GeneralMdText>
              </ContentFullColumn>
            </ContentRow>
            <ContentRow>
              {ClientData.map((client, index) => {
                return (
                  <Content4Column4 id={client.id} key={index}>
                    <PartnerFigure>
                      <Image
                        width={180}
                        height={100}
                        src={client.imgUrl}
                        placeholder="blur"
                        blurDataURL={client.imgUrl}
                        alt={client.name}
                      />
                    </PartnerFigure>
                  </Content4Column4>
                );
              })}
            </ContentRow>
          </PartnerContainer>
        </PartnerSection>
      )}

      {type === "partner" && (
        <PartnerSection>
          <PartnerContainer>
            <ContentRow>
              <ContentFullColumn>
                <GeneralMdText
                  fontSize="40px"
                  lineHeight="1.25"
                  color="#342C1B"
                  fontWeight="700"
                  textTransform="capitalize"
                  margin="3rem 0"
                  textAlign="center"
                >
                  Technology Partners
                </GeneralMdText>
              </ContentFullColumn>
            </ContentRow>
            <ContentRow>
              {isLoading || isFetching ? (
                <FormLoader
                  width="30px"
                  height="30px"
                  border="3px solid #d03049"
                />
              ) : (
                isPartner.data.map((item, index) => {
                  return (
                    <>
                      <Content4Column4 id={item.id} key={index}>
                        <PartnerFigure>
                          <Image
                            width="250"
                            height="100"
                            src={item.cover_img_url}
                            placeholder="blur"
                            blurDataURL={item.cover_img_url}
                            alt={item.name}
                          />
                        </PartnerFigure>
                      </Content4Column4>
                    </>
                  );
                })
              )}
            </ContentRow>
          </PartnerContainer>
        </PartnerSection>
      )}
    </>
  );
};

export default Partners;
