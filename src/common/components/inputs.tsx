import styled from "styled-components";
import {darkBlue, lime} from "../constants/constants";
import {ReactComponent as ArrowOpen} from "../../assets/arrowOpen.svg";
import {ReactComponent as ArrowClose} from "../../assets/arrowClose.svg";
import Dropdown from 'react-dropdown';

export const Input = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${darkBlue};
  width: 100%;
  font-size: 17px;
  height: 57px;
  padding-left: 10px;
`

export const DateInput = styled.input`
  border-width: 2px;
  border-color: ${darkBlue};
  background-color: ${lime};
  width: 100%;
  font-size: 17px;
  height: 57px;
  margin-top: 26px;
`

const StyledDropdown = styled(Dropdown)`
  border-color: ${darkBlue};
  border-style: solid;
  border-width: 2px;
  width: 100%;
  height: 57px;
  margin-top: 26px;
  background-color: ${lime};
  font-size: 17px;
  line-height: 57px;
  position: relative;
`

const StyledArrowOpen = styled(ArrowOpen)`
    height: 100%;
`
const StyledArrowClose = styled(ArrowClose)`
  height: 100%;
`

type Option = {
    label: string,
    value: string
}

type Props = {
    options: Option[],
    onChange: () => void
    placeholder: string
}

export const YellowDropdown = ({options, onChange, placeholder}: Props) => (
    <StyledDropdown
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        menuClassName='menuClass'
        placeholderClassName='placeholderClass'
        controlClassName='controlClass'
        arrowClosed={<StyledArrowOpen/>}
        arrowOpen={<StyledArrowClose/>}
    />
)