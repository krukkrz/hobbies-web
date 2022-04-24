import { useParams} from "react-router-dom";
import {Species} from "../types";
import Header from "../../common/components/Header";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {NarrowButton, NarrowPinkButton} from "../../common/components/buttons";
import { Image, Link, Description, Info, Wrapper, Content, ButtonsWrapper } from "../../common/components/styles";
import {useEffect} from "react";
import {fetchAllMarineLife} from "../services/marineLifeService";
import {useGlobalContext} from "../../common/components/GlobalContext";

const SpeciesScreen = () => {

    const {marineLife, setMarineLife} = useGlobalContext()
    const {id} = useParams()

    useEffect(() => {
        if (marineLife === undefined) {
            setMarineLife(fetchAllMarineLife())
        }
    })

    const species: Species | undefined = marineLife?.find(species => species.id === `${id}`)

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
                            <Link href={species?.link}>Learn more about {species?.name}</Link>
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