import styled from "styled-components";
import { Button as GeneralButton } from "../components/buttons";
import {Input} from "../components/inputs";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  height: 370px;
  justify-content: space-around;
  margin: auto;
`

const Button = styled(GeneralButton)`
  margin-top: 50px;
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const Page = styled.div`
  display: flex;
  height: 100vh;
`

const LoginScreen = () => {
    return (
        <Page>
            <LoginWrapper>
                <Title>Hobbies</Title>
                <Input placeholder='Email'/>
                <Input placeholder='Password'/>
                <Button>Login</Button>
            </LoginWrapper>
        </Page>
    )
}

export default LoginScreen