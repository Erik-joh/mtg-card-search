import styled from "styled-components";
import { stylesVars } from "../../../stylesVars";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CardFormContainer = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: ${stylesVars.primaryBg};
  max-height: 80%;
  height: 100%;
  padding: 30px;
  padding-top: 50px;
  border-radius: 5px;
  & form {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
`;
export const InputFieldContainer = styled.div`
  width: ${(props) => `${props.width}%`};

  & label {
    color: white;
  }
  & select {
    width: 100%;
    background-color: white;
    border: none;
    height: 35px;
    border-radius: 3px;
    margin-top: 3px;
  }
  & input[type="text"] {
    width: 100%;
    border: none;
    height: 35px;
    border-radius: 3px;
    margin-top: 3px;
  }
  & input[type="number"] {
    width: 100%;
    border: none;
    height: 35px;
    border-radius: 3px;
    margin-top: 3px;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
export const RandomCardImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & div {
    width: 48%;

    display: flex;
    justify-content: center;
    align-items: center;
    & button {
      width: 150px;
      height: 40px;
      padding: 10px;
    }
  }
`;
export const ImageField = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 300px;
  padding-top: 20px;
  position: relative;
  & img {
    border-radius: 3px;
    width: 100%;
    object-fit: contain;
  }
  & label {
    position: absolute;
    top: 0px;
    width: 100%;
    color: ${stylesVars.white};
    margin-bottom: 3px;
  }
  & div {
    width: 100%;
    height: 350px;
    & img {
      width: 60%;
    }
  }
  & p {
    color: ${stylesVars.white};
    margin-top: 5px;
  }
`;
export const Button = styled.button`
  background-color: ${stylesVars.secondaryBg};
  color: ${stylesVars.white};
  height: 40px;
  width: 100px;
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${stylesVars.white};
    color: ${stylesVars.black};
  }
  &:disabled {
    color: ${stylesVars.darkGray};
    opacity: 0.5;
    &:hover {
      color: ${stylesVars.darkGray};
      background-color: ${stylesVars.secondaryBg};
    }
  }
`;
export const RoundButton = styled(Button)`
  border-radius: 50%;
  height: 80px !important;
  width: 80px !important;
`;
export const FormErrorMessage = styled.p`
  width: 100%;
  color: ${stylesVars.white};
`;
