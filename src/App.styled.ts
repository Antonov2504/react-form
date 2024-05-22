import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 32px;
  line-height: 1.1;
  color: #ff00cf;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 24vw;
  padding: 30px 60px;
  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 3px 8px 15px rgba(0,0,0, 0.1);
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  padding: 0;
  margin: 0;
  border: 0;

  legend, label, input {
    margin: 0;
    padding: 0;
    color: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.55;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const Button = styled.button`
  align-self: center;
  padding: 8px 24px;
  margin: 0;
  background-color: #2196f3;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  line-height: 1.25;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3f51b5;
  }

  &:disabled {
    background-color: #c0c0c0;
    color: adb5bd;
    pointer-events: none;
  }
`;
