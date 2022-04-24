import Header from "../../common/components/Header";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {useGlobalContext} from "../../common/types";
import {useEffect} from "react";
import {fetchDiveSpots} from "../services/diveSpotsService";
import {Content, Description, HobbyItem, List, Wrapper } from "../../common/components/styles";
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
                        <ButtonWide onClick={() => navigate('/dive/new')}>+ add new spot</ButtonWide>
                        { diveSpots?.map(spot => <HobbyItem key={spot.id} onClick={() => navigate('/dive/'+spot.id)}>{spot.name}</HobbyItem>) }
                    </List>
                </Content>
            </Wrapper>
        </>
    )
}

export default DiveSpotsScreen