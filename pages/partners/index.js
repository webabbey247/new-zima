import React from "react";
import MainLayout from "../../components/Layouts/MainLayout";
import PageBanner from "../../components/PageBanner";
import {
  ContentRow,
  GeneralFlexRow,
  GeneralMdText,
  GeneralSmText,
  SiteContainer,
} from "../../styles/GlobalCss";
import { PartnerSection, PartnerTopContent } from "../../styles/PartnersCss";
import SinglePartnerCard from "../../components/Partners/SinglePartnerCard";

const Partner = () => {
  return (
    <>
      <MainLayout title="Partners" description="">
        <PageBanner
          img="services-banner-img.webp"
          title="Our Partners"
          description="We recognized quite early, that it is impossible to satisfy the
          ever increasing and complex demands, for suitable software
          solutions, of the various sectors of the African economy, without
          some sort of strategic alliances. Consequently, we have been
          working in very close collaboration with very reputable
          international organizations to implement well proven international
          packages in various companies in West Africa."
        />
        <PartnerSection>
          <SiteContainer>
            <PartnerTopContent>
              <ContentRow>
                <SinglePartnerCard />
              </ContentRow>
            </PartnerTopContent>
          </SiteContainer>
        </PartnerSection>
      </MainLayout>
    </>
  );
};

export default Partner;
