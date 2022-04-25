import {useEffect} from "react";
import {fetchAllMarineLife} from "../services/marineLifeService";
import {useGlobalContext} from "../../common/components/GlobalContext";
import {HobbyOverviewContent} from "../../common/components/HobbyOverviewContent";

const MarineLifeScreen = () => {
    const {marineLife, setMarineLife} = useGlobalContext()

    useEffect(() => {
        setMarineLife(fetchAllMarineLife())
    })

    return (
        <>
            <HobbyOverviewContent
                username={'email@email.com'}
                title={'Marine life'}
                description={'Here you can add new fish or other exotic marine spicies that you have seen underwater.'}
                hobbyPath={'/marine'}
                newItemLabel={'+ add new species'}
                hobbyItems={marineLife}
            />
        </>
    )
}

export default MarineLifeScreen