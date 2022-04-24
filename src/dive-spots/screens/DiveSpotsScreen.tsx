import Header from "../../common/components/Header";
import { Wrapper } from "../../common/components/Wrapper";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import { Content } from "../../common/components/Content";
import {useGlobalContext} from "../../common/types";
import {useEffect} from "react";
import {fetchDiveSpots} from "../services/diveSpotsService";
import { Description, HobbyItem, List } from "../../common/components/styles";
import {useNavigate} from "react-router-dom";
import {ButtonWide} from "../../common/components/buttons";


const DiveSpotsScreen = () => {
    const {diveSpots, setDiveSpots} = useGlobalContext()

    useEffect(() => {
        setDiveSpots(fetchDiveSpots())
    })

    const navigate = useNavigate();

    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <div>
                        <h1>Dive spots</h1>
                        <Description>
                            Here you can add new dive spot that you visited.
                        </Description>
                    </div>
                    <List>
                        <ButtonWide onClick={() => navigate('/marine/new')}>+ add new species</ButtonWide>
                        { diveSpots.map(spot => <HobbyItem>{spot.name}</HobbyItem>) }
                    </List>
                </Content>
            </Wrapper>
        </>
    )
}

export default DiveSpotsScreen