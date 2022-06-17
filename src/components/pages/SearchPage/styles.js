import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CardFormContainer = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: beige;
  max-height: 80%;
  height: 100%;
  padding: 30px;
  padding-top: 50px;
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
  & select {
    width: 100%;
    background-color: white;
    border: none;
    height: 35px;
  }
  & input[type="text"] {
    width: 100%;
    border: none;
    height: 35px;
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
  & img {
    width: 100%;
  }
`;
