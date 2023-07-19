import { Fragment } from "react";
import {
  Content2Column2,
  GeneralMdText,
  GeneralSmText,
  FormLoader,
} from "../../styles/GlobalCss";
import { ExpertiseCardChild, ExpertiseCardContent } from "./AboutCompStyles";
import { useAllPortfolioQuery } from "../../redux/services/siteApiSlice";

const AboutChildCard = () => {
  const {
    data: isPortfolio,
    isLoading,
    isFetching,
    error,
  } = useAllPortfolioQuery();

  return (
    <Fragment>
      {isLoading || isFetching ? (
        <FormLoader width="30px" height="30px" border="3px solid #d03049" />
      ) : (
        isPortfolio.data.map((item, index) => {
          return (
            <Content2Column2 key={index} id={item.id}>
              <ExpertiseCardChild>
                <ExpertiseCardContent>
                  <GeneralMdText
                    fontSize="24px"
                    fontWeight="600"
                    lineHeight="33.6px"
                    textTransform="capitalize"
                    color="#342C1B"
                    margin="1rem 0"
                  >
                    {item.caption}
                  </GeneralMdText>
                  <GeneralSmText
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="24px"
                    textTransform="none"
                    color="#7a7a7a"
                    margin="0 0 2rem 0"
                    height="300px"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </ExpertiseCardContent>
              </ExpertiseCardChild>
            </Content2Column2>
          );
        })
      )}
    </Fragment>
  );
};

export default AboutChildCard;
