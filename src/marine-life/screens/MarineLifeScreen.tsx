import Header from "../../common/components/Header";
import { ButtonWide } from "../../common/components/buttons";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {useEffect} from "react";
import {fetchAllMarineLife} from "../services/marineLifeService";
import {useNavigate} from "react-router-dom";
import {useGlobalContext} from "../../common/types";
import {Content, Description, HobbyItem, List, Wrapper} from "../../common/components/styles";

const MarineLifeScreen = () => {
    const {marineLife, setMarineLife} = useGlobalContext()

    useEffect(() => {
        setMarineLife(fetchAllMarineLife())
    })

    const navigate = useNavigate()

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
                        <ButtonWide onClick={() => navigate('/marine/new')}>+ add new species</ButtonWide>
                        {
                            marineLife?.map(species => <HobbyItem onClick={() => navigate('/marine/'+species.id)}>{species.name}</HobbyItem>)
                        }
                    </List>
                </Content>
            </Wrapper>
        </>
    )
}

export default MarineLifeScreen