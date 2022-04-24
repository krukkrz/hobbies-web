import styled from "styled-components";
import {DarkButtonWide} from "./buttons";
import {darkBlue} from "../constants/constants";

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

export const Link = styled.a`
  color: ${darkBlue};
`


export const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    max-width: 1100px;
`

export const Content = styled.div`
  margin-top: 50px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
`

export const Image = styled.img`
  width: 513px;
  height: 513px;
  object-fit: cover;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;
`