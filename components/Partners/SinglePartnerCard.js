import { Fragment } from "react";
import {
  Content2Column2,
  GeneralMdText,
  CustomDiv,
  FormLoader,
} from "../../styles/GlobalCss";
import { PartnerCardV2, PartnerCardImg } from "../../styles/PartnersCss";
import { useAllPartnersQuery } from "../../redux/services/siteApiSlice";

const SinglePartnerCard = () => {
  const {
    data: isPartner,
    isLoading,
    isFetching,
    error,
  } = useAllPartnersQuery();

  return (
    <Fragment>
      {isLoading || isFetching ? (
        <FormLoader width="30px" height="30px" border="3px solid #d03049" />
      ) : (
        isPartner.data.map((item, index) => {
          return (
            <Content2Column2 key={index} id={item.id}>
              <PartnerCardV2>
                <CustomDiv
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  margin="20px 0"
                >
                  <PartnerCardImg
                    width="200"
                    height="100"
                    src={item.cover_img_url}
                    placeholder="blur"
                    blurDataURL={item.cover_img_url}
                    alt={item.caption}
                  />
                </CustomDiv>
                <GeneralMdText
                  textAlign="left"
                  textTransform="unset"
                  fontWeight="700"
                  fontSize="25px"
                  lineHeight="38px"
                  margin="1rem 0"
                >
                  {item.caption}
                </GeneralMdText>
                <GeneralMdText
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="24px"
                  textTransform="unset"
                  margin="1rem 0"
                  color="#2b2d42"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </PartnerCardV2>
            </Content2Column2>
          );
        })
      )}
    </Fragment>
  );
};

export default SinglePartnerCard;
