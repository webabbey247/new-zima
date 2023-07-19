import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import MainLayout from "../../components/Layouts/MainLayout";
import PageBanner from "../../components/PageBanner";
import {
  Content3Column3,
  Content4Column4,
  ContentRow,
  GeneralFlexRow,
  GeneralLgText,
  GeneralMdText,
  SiteContainer,
  FormLoader,
} from "../../styles/GlobalCss";
import ClientList from "../../components/Clients/ClientList";
import { useAllClientsQuery } from "../../redux/services/siteApiSlice";

export const ClientSection = styled.section`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClientRTL = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClientStatistics = styled.div`
  margin: 2rem 0;
  position: relative;
  padding: 0;
`;

export const ClientStatisticsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid #9993;
  padding: 0 10px;

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
    border-bottom: 1px solid #9993;
    padding: 2rem 0;

    & > h2 {
      text-align: center;
    }

    & > h4 {
      text-align: center;
    }
  }
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex-direction: column;
    border-bottom: 1px solid #9993;
    padding: 2rem 0;
    border-right: none;

    & > h2 {
      text-align: center;
    }

    & > h4 {
      text-align: center;
    }
  }
`;

export const ClientChildren = styled.div`
  position: relative;
  padding: 4rem 0;
`;

const Clients = () => {
  const { data: isClient, isLoading, isFetching, error } = useAllClientsQuery();
  return (
    <MainLayout title="Clients" description="">
      <PageBanner
        img="products-banner-img.webp"
        title="Our Clients"
        description="Our team of innovators empower customers to realize business value
          through Microsoft solutions, technologies, and services. If you
          have a passion for the investment."
      />
      <ClientSection>
        <SiteContainer>
          <ClientChildren>
            <ContentRow>
              <Fragment>
                {isLoading || isFetching ? (
                  <FormLoader
                    width="30px"
                    height="30px"
                    border="3px solid #d03049"
                  />
                ) : (
                  isClient.data.map((item, index) => {
                    return (
                      <ClientList
                        index={index}
                        id={item.id}
                        client_url={item.client_domain_url}
                        cover_img={item.cover_img_url}
                      />
                    );
                  })
                )}
              </Fragment>
            </ContentRow>
          </ClientChildren>
        </SiteContainer>
      </ClientSection>
    </MainLayout>
  );
};

export default Clients;
