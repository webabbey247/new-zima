import { Fragment } from "react";
import {
  MemberCardProfileInfo,
  MemberCard,
  MemberCardImgHolder,
  MemberCardImg,
  MemberCardTextHolder,
  MemberCardCta,
} from "../../styles/TeamCss";
import {
  ContentFullColumn,
  GeneralMdText,
  GeneralSmText,
  Content4Column4,
  Content3Column3,
  FormLoader,
} from "../../styles/GlobalCss";
import { useSingleManagementQuery } from "../../redux/services/siteApiSlice";
import { FiArrowLeft } from "react-icons/fi";

const TeamMemberInfoCard = ({ modalID, setShowModal }) => {
  const {
    data: isSingleManagment,
    isLoading,
    isFetching,
  } = useSingleManagementQuery(modalID);

  const handleModalClick = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {isLoading || isFetching ? (
        <FormLoader
          width="30px"
          height="30px"
          border="4px solid var(--primary)"
        />
      ) : (
        <Fragment>
          <Content3Column3 key={isSingleManagment.data.id}>
            <MemberCard className="memberInfoCard">
              <MemberCardImgHolder>
                <MemberCardImg
                  style={{
                    backgroundImage: `url(${isSingleManagment.data.cover_img_url})`,
                  }}
                />
              </MemberCardImgHolder>
              <MemberCardTextHolder>
                <GeneralMdText
                  textAlign="left"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="700"
                  color="var(--white)"
                  textTransform="unset"
                >
                  {isSingleManagment.data.full_name}
                </GeneralMdText>
                <GeneralSmText
                  textAlign="left"
                  fontSize="12px"
                  lineHeight="20px"
                  fontWeight="400"
                  color="var(--white)"
                  textTransform="unset"
                >
                  {isSingleManagment.data.position}
                </GeneralSmText>
              </MemberCardTextHolder>
            </MemberCard>
            <MemberCardCta onClick={() => handleModalClick()}>
              <FiArrowLeft color="var(--white)" size={20} /> Management Team
            </MemberCardCta>
          </Content3Column3>
          <Content3Column3 className="memberChildCard">
            <MemberCardProfileInfo>
              <GeneralSmText
                textAlign="left"
                fontSize="16px"
                lineHeight="20px"
                fontWeight="400"
                color="var(--white)"
                textTransform="unset"
                dangerouslySetInnerHTML={{
                  __html: isSingleManagment.data.description,
                }}
              />
            </MemberCardProfileInfo>
          </Content3Column3>
        </Fragment>
      )}
    </Fragment>
  );
};

export default TeamMemberInfoCard;
