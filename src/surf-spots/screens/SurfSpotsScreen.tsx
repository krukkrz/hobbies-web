import {useGlobalContext} from "../../common/components/GlobalContext";
import {useEffect} from "react";
import {fetchSurfSpots} from "../services/surfSpotsService";
import {HobbyOverviewContent} from "../../common/components/HobbyOverviewContent";

const SurfSpotsScreen = () => {
    const {surfSpots, setSurfSpots} = useGlobalContext()

    useEffect(() => {
        setSurfSpots(fetchSurfSpots())
    })

    return (
        <>
            <HobbyOverviewContent
                username={'email@email.com'}
                title={'Surf spots'}
                description={'Here you can add new surf spot that you visited.'}
                hobbyPath={'/surf'}
                newItemLabel={'+ add new spot'}
                hobbyItems={surfSpots}
            />
        </>
    )
}

export default SurfSpotsScreen