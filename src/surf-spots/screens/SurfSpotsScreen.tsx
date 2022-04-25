import Header from "../../common/components/Header";
import {Content, Description, HobbyItem, List, Wrapper } from "../../common/components/styles";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {ButtonWide} from "../../common/components/buttons";
import {useNavigate} from "react-router-dom";
import {useGlobalContext} from "../../common/components/GlobalContext";
import {useEffect} from "react";
import {fetchSurfSpots} from "../services/surfSpotsService";

const SurfSpotsScreen = () => {
    const {surfSpots, setSurfSpots} = useGlobalContext()
    const navigate = useNavigate()

    useEffect(() => {
        setSurfSpots(fetchSurfSpots())
    })

    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <div>
                        <h1>Surf spots</h1>
                        <Description>
                            Here you can add new surf spot that you visited.
                        </Description>
                    </div>
                    <List>
                        <ButtonWide onClick={() => navigate('/surf/new')}>+ add new spot</ButtonWide>
                        { surfSpots?.map(spot => <HobbyItem onClick={() => navigate('/surf/'+spot.id)}>{spot.name}</HobbyItem>) }
                    </List>
                </Content>
            </Wrapper>
        </>
    )
}

export default SurfSpotsScreen