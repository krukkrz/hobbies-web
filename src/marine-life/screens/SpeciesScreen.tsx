
import {useGlobalContext} from "../../common/types";
import {useParams} from "react-router-dom";
import {Species} from "../types";
import Header from "../../common/components/Header";
import styled from "styled-components";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {darkBlue} from "../../common/constants/constants";
import {NarrowButton, NarrowPinkButton} from "../../common/components/buttons";
import { Wrapper } from "../../common/components/Wrapper";
import { Content } from "../../common/components/Content";

const Description = styled.p`
  width: 390px;
`

const Link = styled.a`
  color: ${darkBlue};
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
`

const Image = styled.img`
  width: 513px;
  height: 513px;
  object-fit: cover;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SpeciesScreen = () => {

    const {marineLife} = useGlobalContext()
    const {id} = useParams()
    
    const species: Species | undefined = marineLife.find(species => species.id === `${id}`)
    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <Info>
                        <div>
                            <h2>{species?.name}</h2>
                            <Description>
                                Here will be a response from wikipedia
                            </Description>
                            <Link href={'.'}>Learn more about {species?.name}</Link>
                            <Description>
                                For the first time you saw it <b>{species?.when}</b> <br/>
                                while diving in <b>{species?.where}</b> <br/>
                                and it was <b>{species?.howCool}</b>
                            </Description>
                        </div>
                        <ButtonsWrapper>
                            <NarrowButton>Edit</NarrowButton>
                            <NarrowPinkButton>Remove</NarrowPinkButton>
                        </ButtonsWrapper>
                    </Info>
                    <Image src={`${species?.photo}`} alt='image'/>
                </Content>
            </Wrapper>
        </>
    )
}


export default SpeciesScreen