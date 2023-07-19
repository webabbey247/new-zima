import styled from "styled-components";

export const HeaderSection = styled.header`
  padding: 0;
  margin: 0;
  position: fixed;
  // position: relative;
  width: 100%;
  z-index: 2099;
  background: var(--white);
  box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavContainter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  background: var(--white);
  width: min(100%, 80rem);

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 0.5rem 1rem;
    width: 100%;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 0.1rem 0.5rem;
    width: 100%;
  }
`;

export const NavBar = styled.nav`
  display: inline-flex;
  margin-left: auto !important;
  margin-top: 0 !important;
`;

export const NavBarUl = styled.ul`
  margin: auto;
  display: flex;
  justify-content: center;

  &.Mobile {
    display: none;
  }

  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
    &.Desktop {
      display: none;
    }

    &.Mobile {
      display: inline-block;
    }
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    &.Desktop {
      display: none;
    }

    &.Mobile {
      display: inline-block;
    }
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    &.Desktop {
      display: none;
    }

    &.Mobile {
      display: inline-block;
    }
  }
`;

export const NavBarLi = styled.li`
  border-bottom: 0;
  position: relative;
  flex-wrap: wrap;
  display: inline-block;
  padding: 1rem 0;
  margin: 0;
  cursor: pointer;
  // width: 90px;
`;

export const NavBarChildrenUl = styled.ul`
  opacity: 1;
  pointer-events: auto;
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
  top: 59px;
  left: 50%;
  transform: translateX(-50%);
  overflow: visible;
  box-shadow: 0 20px 20px 0 rgba(0, 38, 64, 0.08);

  &::after {
    background-color: #f71735;
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const NavBarChildrenLi = styled.li`
  min-width: calc(486px - 247px);
  max-width: calc(486px - 200px);
  padding: 1rem 0;
  margin: 0;
  list-style: none;
`;

export const NavBarChildrenLiContent = styled.div`
  padding: 2rem;
`;

export const NavBarChildrenLiSubMenu = styled.ul`
  list-style-type: none;
`;

export const NavLink = styled.a`
  padding: 0.5rem;
  text-decoration: none !important;
  // margin-right: 2rem !important;
  //   padding-top: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  color: var(--nav-text-color);
  text-transform: capitalize;
  margin: auto 10px;

  &:hover {
    color: #f71735;
  }
`;

export const NavMegaMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 280px;
  left: 0;
  right: 0;
  top: 9%;
  background: #ffffff;
  transition: top 0.3s cubic-bezier(0.48, 0.01, 0.5, 0.99),
    opacity 0.3s cubic-bezier(0.48, 0.01, 0.5, 0.99), visibility 1s linear;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  visibility: 0;
`;

export const NavSubMegaMenuWrapper = styled.div`
  padding: 0 6rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  position: relative;
`;

export const NavSubMegaMenuChild = styled.div`
  flex: 0 0 33.3%;
  max-width: 33.3%;
  border-right: 1px solid #ededf9;
  height: 280px;
  padding: 2rem;
  background: var(--white);

  &:hover {
    background: rgba(180, 82, 40, 0.05);
  }

  &:first-child:hover {
    background: rgba(4, 102, 200, 0.05);
  }

  &:last-child:hover {
    background: rgba(32, 169, 127, 0.1);
  }
`;

export const NavSubMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0;
  right: 0;
  top: 9%;
  background: #ffffff;
  transition: top 0.3s cubic-bezier(0.48, 0.01, 0.5, 0.99),
    opacity 0.3s cubic-bezier(0.48, 0.01, 0.5, 0.99), visibility 1s linear;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
`;

export const NavSubMenuWrapper = styled.div`
  padding: 0 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const NavSubMenuChild = styled.div`
padding: 2rem 1rem;
display: flex;
flex-direction: row;
}
`;

export const NavSubMenuIcon = styled.figure`
  width: 80px;
  height: 80px;
`;

export const NavBarCta = styled.a`
  text-decoration: none !important;
  // background: #f71735;
  padding: 12px 30px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 2rem;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  height: 100%;
  background-image: linear-gradient(to right, #543a7e, #d03049);

  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    display: none;
  }

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    display: none;
  }
`;
