
import {useGlobalContext} from "../../common/types";
import {useParams} from "react-router-dom";
import {Species} from "../types";

const SpeciesScreen = () => {

    const {marineLife} = useGlobalContext()
    const {id} = useParams()
    
    const species: Species | undefined = marineLife.find(species => species.id === `${id}`)
    return (
        <>
            this is species screen
            <br/>
            {species?.name}
        </>
    )
}


export default SpeciesScreen