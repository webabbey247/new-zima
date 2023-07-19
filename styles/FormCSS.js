import styled from "styled-components";


export const CustomButton = styled.button`
  padding: 0.6rem 2rem;
  background: ${(props) => props.background || "#00b2f0"};
  border-radius: 4.26531px;
  border: ${(props) => props.border || "1px solid #00b2f0"};
  margin: ${(props) => props.margin || "0 0 0 1rem"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "47.77px"};
  font-weight: 900;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: var(--white);
  cursor: ${(props) => (props.disabled ? "none" : "pointer")};

  &:first-child {
    margin-left: 0;
  }

  &:disabled:hover {
    background: #b3e8fb;
    border: 1px solid #00b2f0;
    color: var(--white);
  }
    &:hover {
      background: #252b32;
      border: 1px solid #252b32;
      color: var(--white);
    }
`;

export const AuthForm = styled.form`
  padding: ${(props) => props.padding || null};
  width: min(100%, 35rem);

  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {

  }
  
  @media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
  }
  
  @media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
   width: 100%;
  }
  
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;

  }
  
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
  }
`;

export const TextInputWrapper = styled.div`
  padding: 0.3rem 0;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || null};
  position: ${(props) => props.position || ""};
  width: 100%;
`;

export const TextInputLabel = styled.label`
  font-weight: 400;
  font-size: 12.78px;
  line-height: 15.34px;
  color: ${(props) => props.color || "#2b2d42"};
  mix-blend-mode: normal;
  opacity: 0.8;
  margin: 0.3rem 0;
  text-align: ${(props) => props.textAlign || "left"};
`;

export const TextInput = styled.input`
  background: #ffffff;
  border: 0.852103px solid #c3cad9;
  box-sizing: border-box;
  border-radius: 0;
  height: ${(props) => props.height || "52px"};
  width: ${(props) => props.width || "100%"};
  padding-left: 1rem;
  margin: 0.3rem 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #2b2d42;
  margin-left: ${(props) => props.marginLeft || "20px"};

  &:first-child {
    margin-left: 0;
  }

  &.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }


  &.invalid:focus {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &::placeholder {
    font-size: 15px;
    line-height: 19px;
    font-weight: 400;
    color: #2b2d42;
    opacity: 0.35;
  }

  &:focus {
    color: #361203;
    background: #ffffff;
    border-color: #EF9801;
    outline: 0;
    box-shadow: none !important;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 150px;
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  border: 0.852103px solid #c3cad9;
  padding-left: 1rem;
  padding-top: 0.5rem;
  margin: 0.2rem 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #2b2d42;
  border-radius: 0;

  &.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &.invalid:focus {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &::placeholder {
    font-size: 13px;
    line-height: 25px;
    font-weight: 400;
    color: #196589;
    opacity: 0.6;
  }

  &:focus {
    color: #361203;
    background: #ffffff;
    border-color: #EF9801;
    outline: 0;
    box-shadow: none !important;
  }
`;


export const InputErrors = styled.div`
  width: 100%;
  font-size: 13px !important;
  color: #dc3545;
  margin: 0.5rem 0;
  padding: 0;
`;