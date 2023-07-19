import {useState} from "react";
import MainLayout from "../../components/Layouts/MainLayout";
import PageBanner from "../../components/PageBanner";
import {
  Content2Column2,
  ContentRow,
  FormLoader,
  GeneralMdText,
  GeneralSmText,
} from "../../styles/GlobalCss";
import {
  TeamContainer,
  TeamIntroContainer,
  TeamSection,
  TeamBottomContainer,
} from "../../styles/TeamCss";
import { TeamMemberCard, TeamMemberInfoCard } from "../../components/Team";
import { useAllManagementQuery } from "../../redux/services/siteApiSlice";
// import TeamProfile from "../../components/TeamProfile/TeamProfile";

const Leadership = () => {
  const [modalID, setModalID] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // const placeholderData = new Array(3).fill("");
  const {
    data: isManagement,
    isLoading,
    isFetching,
  } = useAllManagementQuery();

  return (
    <>
      <MainLayout title="Our Team" description="">
        <PageBanner
          img="leadership-img.webp"
          title="Our Team"
          description="Our team is fluent in the languages of strategy, business
          performance, leadership, and interpersonal dynamics. We have
          worked extensively with large and small organizations, both as
          leaders and as senior-level consultants brought in to rethink
          strategy, redesign structure, amplify execution, and catalyze
          change. Our job is to mobilize our clients’ internal capacities to
          create change that is lasting and meaningful."
        />
        <TeamSection>
          <TeamContainer>
            <TeamIntroContainer>
              <ContentRow>
                <Content2Column2>
                  <GeneralMdText
                    textAlign="center"
                    color="#2b2d42"
                    fontSize="31px"
                    fontWeight="700"
                    lineHeight="38px"
                    margin="15px 0"
                    textTransform="capitalize"
                  >
                    15+ Years Combined Business Experience
                  </GeneralMdText>
                </Content2Column2>
                <Content2Column2>
                  <GeneralSmText
                    textAlign="center"
                    color="#2b2d42"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="24px"
                    textTransform="unset"
                  >
                    The success of Zimalek Technologies as a software marketing
                    company owes a lot to the direction provided by the key
                    management personnel. These people have many years of
                    management and professional experience in their key areas.
                    When we offer the services of Zimalek Technologies to any
                    client, we offer the wealth of experience of these key
                    players who actively participate in the delivery of any
                    major project. They are there from the conceptual stage
                    right through the life of the project.
                  </GeneralSmText>
                </Content2Column2>
              </ContentRow>
            </TeamIntroContainer>

            <TeamBottomContainer>
              <ContentRow>
              {isLoading || isFetching ? (
               <FormLoader width="30px" height="30px" border="3px solid #d03049" />
              ) : showModal ? (
                <TeamMemberInfoCard setShowModal={setShowModal} modalID={modalID} />
              ) : (
                isManagement.data.map((item, index) => {
                  return (
                    <TeamMemberCard
                      _id={index}
                      teamID={item.id}
                      teamSlug={item.slug}
                      coverImg={item.cover_img_url}
                      fullName={item.full_name}
                      position={item.position}
                      setModalID={setModalID}
                      setShowModal={setShowModal}
                    />
                  );
                })
              )}
                {/* <TeamProfile /> */}
              </ContentRow>
            </TeamBottomContainer>
          </TeamContainer>
        </TeamSection>
      </MainLayout>
    </>
  );
};

export default Leadership;
