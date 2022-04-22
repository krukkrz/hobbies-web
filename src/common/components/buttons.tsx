import styled from "styled-components";
import {darkBlue, lime, pink} from "../constants/constants";

export const Button = styled.button`
  background-color: ${lime};
  width: 324px;
  height: 42px;
  border-radius: 10px;
  border-color: ${darkBlue};
  border-width: 2px;
  font-size: 17px;
  color: ${darkBlue};
  
  :hover {
    border-width: 4px;
  }
`

export const DarkButton = styled.button`
  background-color: ${darkBlue};
  width: 194px;
  height: 42px;
  border-radius: 10px;
  border-style: none;
  font-size: 17px;
  color: ${lime};
  
  :hover {
    border-style: solid;
    border-color: ${lime};
    border-width: 4px;
  }
`

export const ButtonWide = styled(Button)`
  width: 470px;
`

export const DarkButtonWide = styled(DarkButton)`
  width: 470px;
`
export const DarkButtonNarrow = styled(DarkButton)`
  width: 150px;
`

export const PinkButton = styled(Button)`
  background-color: ${pink};
`

export const NarrowButton = styled(Button)`
  width: 150px;
`
export const NarrowPinkButton = styled(PinkButton)`
  width: 150px;
`