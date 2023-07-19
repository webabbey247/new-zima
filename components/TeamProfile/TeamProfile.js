import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Content4Column4,
  GeneralMdText,
  GeneralSmText,
  Content3Column3,
} from "../../styles/GlobalCss";
import {
  LeadershipCard,
  LeadershipContent,
  LeadershipPictureHolder,
  LeadershipCardInfo,
  LeadershipCardPic,
} from "../../styles/TeamCss";

const TeamProfile = () => {
  const [profile, setProfile] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // console.log('hello', profile)

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const response = await fetch("/api/get-offices");
    const data = await response.json();
    setProfile(data.data);
    setIsLoading(false);
  };
  return (
    !isLoading &&
    profile &&
    profile.map((item, index) => {
      return (
        <Content3Column3 id={item.id} key={index}>
          <LeadershipCard>
            <LeadershipContent>
              <LeadershipPictureHolder>
                <Link
                  href="/our-team/[slug]"
                  as={`/our-team/${item.slug}`}
                  passHref
                >
                  <LeadershipCardPic
                    src={item.cover_img_url}
                    alt={item.full_name}
                    placeholder="blur"
                    blurDataURL={item.cover_img_url}
                  />
                </Link>
              </LeadershipPictureHolder>
              <LeadershipCardInfo>
                <GeneralMdText
                  margin="5px 0"
                  textAlign="center"
                  color="#2b2d42"
                  fontSize="21px"
                  fontWeight="600"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  {item.full_name}
                </GeneralMdText>
                <GeneralSmText
                  textAlign="center"
                  color="#2b2d42"
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="19px"
                  textTransform="uppercase"
                >
                  {item.position}
                </GeneralSmText>
              </LeadershipCardInfo>
            </LeadershipContent>
          </LeadershipCard>
        </Content3Column3>
      );
    })
  );
};
export default TeamProfile;
