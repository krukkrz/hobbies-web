import Header from "../components/Header";
import styled from "styled-components";
import { ButtonWide, DarkButtonWide} from "../components/buttons";
import {Breadcrumbs} from "../components/Breadcrumbs";

const Content = styled.div`
  margin-top: 50px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Description = styled.p`
  width: 390px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const SpeciesItem = styled(DarkButtonWide)`
    margin-top: 20px;
`

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  max-width: 1100px;
`

const MarineLifeScreen = () => {
    const species = ['Barracuda', 'Cuttlefish', 'Seahorse']
    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <div>
                        <h1>Marine life</h1>
                        <Description>
                            Here you can add new fish or other exotic marine spicies that you have seen underwater.
                        </Description>
                    </div>
                    <List>
                        <ButtonWide>+ add new species</ButtonWide>
                        {
                            species.map(species => <SpeciesItem>{species}</SpeciesItem>)
                        }
                    </List>
                </Content>
            </Wrapper>
        </>
    )
}

export default MarineLifeScreen