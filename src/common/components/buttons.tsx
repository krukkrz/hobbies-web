import styled from "styled-components";
import {darkBlue, lime} from "../constants/constants";

export const Button = styled.button`
  background-color: ${lime};
  width: 324px;
  height: 42px;
  border-radius: 10px;
  border-color: ${darkBlue};
  border-width: 2px;
  font-size: 17px;
  color: ${darkBlue};
`

export const DarkButton = styled.button`
  background-color: ${darkBlue};
  width: 194px;
  height: 42px;
  border-radius: 10px;
  border-style: none;
  font-size: 17px;
  color: ${lime};
`