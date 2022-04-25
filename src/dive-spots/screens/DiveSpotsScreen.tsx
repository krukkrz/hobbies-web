import {useEffect} from "react";
import {fetchDiveSpots} from "../services/diveSpotsService";
import {useGlobalContext} from "../../common/components/GlobalContext";
import {HobbyOverviewContent} from "../../common/components/HobbyOverviewContent";


const DiveSpotsScreen = () => {
    const {diveSpots, setDiveSpots} = useGlobalContext()

    useEffect(() => {
        setDiveSpots(fetchDiveSpots())
    })

    return (
        <>
            <HobbyOverviewContent
                username={'email@email.com'}
                title={'Dive spots'}
                description={'Here you can add new dive spot that you visited.'}
                hobbyPath={'/dive'}
                newItemLabel={'+ add new spot'}
                hobbyItems={diveSpots}
            />
        </>
    )
}

export default DiveSpotsScreen