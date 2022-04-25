import Header from "../../common/components/Header";
import {Link, ButtonsWrapper, Content, Info, Wrapper, Description} from "../../common/components/styles";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {NarrowButton, NarrowPinkButton} from "../../common/components/buttons";
import {useParams} from "react-router-dom";
import {useGlobalContext} from "../../common/components/GlobalContext";
import {useEffect} from "react";
import {fetchTechStack} from "../services/techStackService";
import {Tech} from "../types";



const TechScreen = () => {
    const {techStack, setTechStack} = useGlobalContext()
    const {id} = useParams()

    useEffect(() => {
        if (techStack?.length === 0) {
            setTechStack(fetchTechStack())
        }
    })

    const tech: Tech | undefined = techStack?.find(tech => tech.id === `${id}`)

    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <Info>
                        <div>
                            {tech?.type}
                            <h2>{tech?.name}</h2>
                            <Description>
                                <Link href={tech?.docs}>Find more information about Golang.</Link>
                                <br/>
                                <br/>
                                { tech?.privateProject ? (<Link href={tech?.privateProject}>Check your private project.</Link>) : '' }
                                <br/>
                                <br/>
                                { tech?.isCommercial ? 'You used it also in commercial project.' : '' }
                            </Description>
                        </div>
                        <ButtonsWrapper>
                            <NarrowButton>Edit</NarrowButton>
                            <NarrowPinkButton>Remove</NarrowPinkButton>
                        </ButtonsWrapper>
                    </Info>
                    <Description>
                        <h3>You can use it for:</h3>
                        <p>{tech?.application}</p>
                        <br/>
                        <h3>Links to some learing material:</h3>
                        <p>{tech?.learning}</p>
                    </Description>
                </Content>
            </Wrapper>
        </>
    )
}

export default TechScreen