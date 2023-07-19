import { Fragment, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiArrowLeft } from "react-icons/fi";
import { FaTimes, FaChevronRight } from "react-icons/fa";
import {
  CustomDiv,
  CustomLink,
  GeneralMdText,
  GeneralSmText,
} from "../../styles/GlobalCss";
import {
  HeaderSection,
  NavContainter,
  NavBar,
  NavLink,
  NavBarCta,
  NavMegaMenu,
  NavSubMenuWrapper,
  NavSubMegaMenuChild,
  NavSubMegaMenuWrapper,
  NavSubMenu,
  NavSubMenuChild,
  NavSubMenuIcon,
  NavBarUl,
  NavBarLi,
  NavBarChildrenUl,
  NavBarChildrenLi,
  NavBarChildrenLiContent,
} from "../../styles/HeaderCss";
import {
  aboutMenuIcon,
  careerMenuIcon,
  teamMenuIcon,
  partnerMenuIcon,
  contactUsMenu,
  themeLogo,
} from "../../assets";

const NavChildrenMenu = styled.ul`
  opacity: 1;
  z-index: 100;
  display: flex;
  background-image: linear-gradient(
    to right,
    #fff 0,
    #fff calc(100% - 222px),
    #f9f9f9 calc(100% - 222px)
  );
  background-color: #fff;
  min-width: 486px;
  height: auto;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
  box-shadow: 0 20px 20px 0 rgba(0, 38, 64, 0.08);
  overflow: visible;
  list-style: none;
`;

const NavChildrenNavList = styled.li`
  min-width: calc(486px - 222px);
  max-width: calc(486px - 222px);
  padding: 1rem 2rem;
  pointer-events: auto;
`;

const NavChildrenNavListContent = styled.div`
  padding: 2rem;
`;

const MobileNavContainer = styled.div`
  background: #fff;
  border-top: 1px solid rgb(239, 239, 242);
`;

const MobileNavList = styled.div`
  display: flex;
  flex-direction: column;
  just-content: flex-start;
`;

const MobileNav = styled.a`
  padding: 1rem;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #09233d;
  text-transform: uppercase;
  border-bottom: 1px solid rgb(239, 239, 242);
`;

const MobileNavRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgb(239, 239, 242);

  & > a {
    border-bottom: none;
  }

  & > svg {
    margin-top: 12px;
    margin-right: 10px;
  }
`;

const MobileNavCta = styled.a`
  text-decoration: none !important;
  background: #ef9801;
  padding: 12px 30px;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  color: #ffffff;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  height: 100%;

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    display: none;
  }
`;

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);
  const [dropdownOpen1, setDropDownOpen1] = useState(false);

  return (
    <Fragment>
      <HeaderSection>
        <NavContainter>
          <Link href="/" passHref>
            <CustomLink margin="0 0 0 -2rem">
              <Image
                src={themeLogo}
                alt="Zimalek Technologies"
                width={150}
                height={30}
              />
            </CustomLink>
          </Link>
          <NavBar>
            <NavBarUl className="Desktop">
              <NavBarLi>
                <Link href="/" passHref>
                  <NavLink>Home</NavLink>
                </Link>
              </NavBarLi>

              <NavBarLi>
                <NavLink
                  onMouseEnter={() => setDropDownOpen1(true)}
                  onclick={() => setDropDownOpen1(false)}
                  isOpen={dropdownOpen1}
                  toggle={() => {
                    (prevState) => ({
                      dropdownOpen1: !prevState.dropdownOpen1,
                    });
                  }}
                >
                  Company
                </NavLink>

                {dropdownOpen1 && (
                  <NavBarChildrenUl
                    onMouseLeave={() => setDropDownOpen1(false)}
                  >
                    <NavBarChildrenLi>
                      <NavBarChildrenLiContent
                        style={{
                          padding: "0",
                        }}
                      >
                        <CustomDiv flexDirection="column">
                          <Link href="/about-us" passHref>
                            <NavLink
                              style={{
                                borderBottom: "1px solid #eee",
                                padding: "1rem 0",
                              }}
                            >
                              About ZIMALEK
                            </NavLink>
                          </Link>

                          <Link href="/our-team" passHref>
                            <NavLink
                              style={{
                                borderBottom: "1px solid #eee",
                                padding: "1rem 0",
                              }}
                            >
                              Leadership
                            </NavLink>
                          </Link>

                          <Link href="/partners" passHref>
                            <NavLink
                              style={{
                                borderBottom: "1px solid #eee",
                                padding: "1rem 0",
                              }}
                            >
                              Partners
                            </NavLink>
                          </Link>

                          <Link href="/clients" passHref>
                            <NavLink
                              style={{
                                borderBottom: "1px solid #eee",
                                padding: "1rem 0",
                              }}
                            >
                              Clients
                            </NavLink>
                          </Link>

                          <Link href="/portfolio" passHref>
                            <NavLink
                              style={{
                                padding: "1rem 0",
                              }}
                            >
                              Portfolio
                            </NavLink>
                          </Link>
                        </CustomDiv>
                      </NavBarChildrenLiContent>
                    </NavBarChildrenLi>
                    <NavBarChildrenLi>
                      <NavBarChildrenLiContent>
                        <CustomDiv
                          padding="0"
                          margin="0"
                          display="flex"
                          flexDirection="column"
                        >
                          <GeneralMdText
                            fontSize="13px"
                            lineHeight="20px"
                            fontWeight="700"
                            textTransform="unset"
                            margin="0 0 0"
                          >
                            Let’s Discuss Your Project
                          </GeneralMdText>
                          <GeneralSmText
                            fontSize="13px"
                            lineHeight="20px"
                            fontWeight="400"
                            textTransform="unset"
                            margin=" 0.5rem 0"
                          >
                            Prefer to talk with someone right away? Give us a
                            call +2349026207108, +1(832)6711983 and we will
                            happily answer your questions.
                          </GeneralSmText>
                        </CustomDiv>
                      </NavBarChildrenLiContent>
                    </NavBarChildrenLi>
                  </NavBarChildrenUl>
                )}
              </NavBarLi>


              <NavBarLi>
                <Link href="/services" passHref>
                  <NavLink>Services</NavLink>
                </Link>
              </NavBarLi>

              <NavBarLi>
                <Link href="/" passHref>
                  <NavLink>Career</NavLink>
                </Link>
              </NavBarLi>

            </NavBarUl>

            <Link href="/contact" passHref>
              <NavBarCta>Contact Us</NavBarCta>
            </Link>

            <NavBarUl
              className="Mobile"
              onClick={() => setShowMobile(!showMobile)}
            >
              <NavBarLi>
                {showMobile ? (
                  <FaTimes size="30" color="#EF9801" />
                ) : (
                  <FiMenu size="30" color="#EF9801" />
                )}
              </NavBarLi>
            </NavBarUl>
          </NavBar>
        </NavContainter>
        {showMobile && (
          <MobileNavContainer>
            <MobileNavList>
              {showMobileSubMenu ? (
                <>
                  <MobileNav onClick={() => setShowMobileSubMenu(false)}>
                    <FiArrowLeft size="20" color="#EF9801" />
                  </MobileNav>

                  <Link href="/" passHref>
                    <MobileNav>About FasyL</MobileNav>
                  </Link>

                  <Link href="/" passHref>
                    <MobileNav>Leadership</MobileNav>
                  </Link>

                  <Link href="/" passHref>
                    <MobileNav>Partners</MobileNav>
                  </Link>

                  <Link href="/" passHref>
                    <MobileNav>Clients</MobileNav>
                  </Link>

                  <Link href="/" passHref>
                    <MobileNav>Projects</MobileNav>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/" passHref>
                    <MobileNav>Home</MobileNav>
                  </Link>

                  <MobileNavRow
                    onClick={() => setShowMobileSubMenu(!showMobileSubMenu)}
                  >
                    <MobileNav>Company</MobileNav>
                    <FaChevronRight size="20" color="#EF9801" />
                  </MobileNavRow>

                  <Link href="/" passHref>
                    <MobileNav>Services</MobileNav>
                  </Link>

                  <Link href="/" passHref>
                    <MobileNav>Products</MobileNav>
                  </Link>

                  <Link href="/" passHref>
                    <MobileNav>Career</MobileNav>
                  </Link>

                  <Link href="/" passHref>
                    <MobileNav>Press</MobileNav>
                  </Link>

                  <Link href="/" passHref>
                    <MobileNavCta>Contact Us</MobileNavCta>
                  </Link>
                </>
              )}
            </MobileNavList>
          </MobileNavContainer>
        )}
      </HeaderSection>
    </Fragment>
  );
};

export default Header;
