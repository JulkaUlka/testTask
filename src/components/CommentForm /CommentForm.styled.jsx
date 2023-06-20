import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: -4%;
  right: -2%;
  background-color: #285fcc;
  color: white;
  padding: 10px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: background-color 250ms ease, color 250ms ease ;
  &:hover,
  &:focus {
    background-color: #f2f239;
    box-shadow: none;
    color: #000000;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: none;
  border-radius: 4px;
  &:hover,
  &:focus {
    border: 1px solid #285fcc;
    outline: none;
  }
`;
export const Form = styled.form`
  margin: 0 auto;
  position: relative;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 70px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  &:hover,
  &:focus {
    border: 1px solid #285fcc;
    outline: none;
  }
`;
