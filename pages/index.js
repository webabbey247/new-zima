import React, { useEffect } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import AOS from "aos";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import { HomeServicesList, HomeServicesGrid } from "../components/Services";
import OurApproach from "../components/OurApproach";
// import Partners from "../components/Partners";
// import Expertise from "../components/Expertise";
import CareerIndex from "../components/Career";

// import { ApproachData } from "../data/Utilities";
// import {
//   Content2Column2,
//   Content3Column3,
//   Content4Column4,
//   ContentFullColumn,
//   ContentRow,
//   CustomButton,
//   GeneralFlexRow,
//   GeneralLgText,
//   GeneralMdText,
//   GeneralSmText,
// } from "../styles/GlobalCss";
// import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <MainLayout title="Welcome" description="">
        <HeroBanner />
        <HomeServicesList />
        <HomeServicesGrid />
        {/* <OurApproach /> */}
        {/* <Partners type="partner" /> */}
        {/* <Expertise /> */}
        <CareerIndex />
      </MainLayout>
    </>
  );
}
