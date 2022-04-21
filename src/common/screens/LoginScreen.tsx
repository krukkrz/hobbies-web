import styled from "styled-components";
import { Button as GeneralButton } from "../components/buttons";
import {Input} from "../components/inputs";
import {login} from "../services/authService";
import {useNavigate} from "react-router-dom";


const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  height: 370px;
  justify-content: space-around;
  align-items: center;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginScreen = () => {

    const navigate = useNavigate()

    const handleSubmit = (event: any) => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        login(email, password)
        navigate('/')
    }

    return (
        <Page>
            <LoginWrapper>
                <Form onSubmit={handleSubmit}>
                    <Title>Hobbies</Title>
                    <Input type='email' name='email' placeholder='Email' required/>
                    <Input type='password' name='password' placeholder='Password' required/>
                    <Button type='submit'>Login</Button>
                </Form>
            </LoginWrapper>
        </Page>
    )
}

export default LoginScreen