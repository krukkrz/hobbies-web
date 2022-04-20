import styled from "styled-components";
import {DarkButton} from "./buttons";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
`

type Props = {
    username?: string
}

const Header = ({username}: Props) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/logout')
    }
    return (
        <Wrapper>
            <div>
                {username}
            </div>
            <DarkButton onClick={handleLogout}>Logout</DarkButton>
        </Wrapper>
    )
}

export default Header