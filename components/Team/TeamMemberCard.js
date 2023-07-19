import {
    Content3Column3,
    GeneralMdText,
    GeneralSmText,
  } from "../../styles/GlobalCss";
  import {
    MemberCard,
    MemberCardImgHolder,
    MemberCardImg,
    MemberCardTextHolder,
    IconHolder,
  } from "../../styles/TeamCss";
  import { FaPlus } from "react-icons/fa";
  
  const TeamMemberCard = ({
    fullName,
    position,
    coverImg,
    _id,
    teamID,
    setModalID,
    setShowModal,
    teamSlug,
  }) => {
  
  
    const handleModalClick = (teamSlug) => {
      setShowModal(true);
      setModalID(teamSlug);
    };
    return (
      <Content3Column3 id={teamID} key={_id}>
        <MemberCard>
          <MemberCardImgHolder>
            <MemberCardImg
              style={{
                backgroundImage: `url(${coverImg})`,
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
              {fullName}
            </GeneralMdText>
            <GeneralSmText
              textAlign="left"
              fontSize="12px"
              lineHeight="20px"
              fontWeight="400"
              color="var(--white)"
              textTransform="unset"
            >
              {position}
            </GeneralSmText>
            <IconHolder onClick={() => handleModalClick(teamSlug)}>
              <FaPlus color="var(--white)" size={20} />
            </IconHolder>
          </MemberCardTextHolder>
        </MemberCard>
      </Content3Column3>
    );
  };
  
  export default TeamMemberCard;
  