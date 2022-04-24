import styled from "styled-components";
import {DarkButtonWide} from "./buttons";

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  width: 390px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HobbyItem = styled(DarkButtonWide)`
    margin-top: 20px;
`
