import {HobbyOverviewContent} from "../../common/components/HobbyOverviewContent";
import {useGlobalContext} from "../../common/components/GlobalContext";
import {useEffect} from "react";
import {fetchTechStack} from "../services/techStackService";

const TechStackScreen = () => {
    const { techStack, setTechStack } = useGlobalContext()

    useEffect(() => {
        setTechStack(fetchTechStack())
    })

    return (
        <>
            <HobbyOverviewContent
                username={'email@email.com'}
                title={'Tech stack'}
                description={'Here you can add new tech stack that you learned recently.'}
                hobbyPath={'/tech'}
                newItemLabel={'+ add new tech'}
                hobbyItems={techStack}
            />
        </>
    )
}

export default TechStackScreen