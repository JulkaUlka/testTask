import styled from 'styled-components';

export const List = styled.li`
  position: relative;
  min-height: 60px;
  padding: 15px 10px;
  margin-bottom: 40px;
  border-radius: 4px;

  &:nth-child(even) {
    background-color: #f3f387;
  }
  &:nth-child(odd) {
    background-color: #83bffb99;
  }
  &:nth-child(even) button {
    background-color: #f2f239;
  }

  &:nth-child(odd) button {
    background-color: #285fcc;
  }
  &:nth-child(even) span {
    background-color: #f2f239;
  }
  &:nth-child(odd) span {
    background-color: #285fcc;
  }
`;
export const Block = styled.div`
  position: absolute;
  top: -23%;
  left: -3%;
`;
export const Initials = styled.span`
  padding: 12px 15px;
  border-radius: 50%;
  color: #3ca2fc;
  text-transform: uppercase;
`;
export const Name = styled.span`
  padding: 5px 15px;
  color: #000000;
  font-size: 12px;
  margin-left: -7px;
`;
export const Text = styled.div`
  color: #151265;
`;

export const Button = styled.button`
  position: absolute;
  top: -12%;
  right: -1%;
  padding: 5px 7px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  color: #3ca2fc;
  transition: box-shadow 250ms ease, color 250ms ease;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover,
  &:focus {
    box-shadow: none;
    color: #000000;
  }
`;
