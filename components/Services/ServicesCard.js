import { Fragment } from "react";
import {
  Content3Column3,
  GeneralMdText,
  GeneralSmText,
  FormLoader,
} from "../../styles/GlobalCss";
import { ServicesCardList, ServicesCardIcon } from "./ServicesCompStyles";
import { useAllServicesQuery } from "../../redux/services/siteApiSlice";
const ServicesCard = () => {
  const {
    data: isServices,
    isLoading,
    isFetching,
    error,
  } = useAllServicesQuery();

  return (
    <Fragment>
      {isLoading || isFetching ? (
        <FormLoader
          width="30px"
          height="30px"
          border="3px solid #d03049"
        />
      ) : (
        isServices.data.map((item, index) => {
          return (
            <Content3Column3 key={index} id={item.id}>
              <ServicesCardList>
                <ServicesCardIcon
                  src="../static/images/icons/services-icon-01.svg"
                  alt={item.caption}
                />
                <GeneralMdText
                  textAlign="left"
                  textTransform="capitalize"
                  fontWeight="700"
                  fontSize="1.25rem"
                  lineHeight="30px"
                >
                  {item.caption}
                </GeneralMdText>
                <GeneralSmText
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="24px"
                  textTransform="unset"
                  margin="1rem 0"
                  color="#2b2d42"

                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                 />
              </ServicesCardList>
            </Content3Column3>
          );
        })
      )}
    </Fragment>
  );
};

export default ServicesCard;
