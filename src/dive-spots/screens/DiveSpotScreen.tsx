import {useGlobalContext} from "../../common/types";
import {useParams} from "react-router-dom";
import Header from "../../common/components/Header";
import { Wrapper } from "../../common/components/Wrapper";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";

const DiveSpotScreen = () => {
    const {diveSpots} = useGlobalContext()
    const {id} = useParams()

    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
            </Wrapper>
        </>
    )
}

export default DiveSpotScreen