import {useParams} from "react-router-dom";
import Header from "../../common/components/Header";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {DiveSpot} from "../types";
import {ButtonsWrapper, Content, Description, Image, Info, Link, Wrapper} from "../../common/components/styles";
import {getName} from "../../common/services/countryService";
import {NarrowButton, NarrowPinkButton} from "../../common/components/buttons";
import {useEffect} from "react";
import {fetchDiveSpots} from "../services/diveSpotsService";
import {useGlobalContext} from "../../common/components/GlobalContext";

const DiveSpotScreen = () => {
    const {diveSpots, setDiveSpots} = useGlobalContext()
    const {id} = useParams()

    useEffect(() => {
        if (diveSpots === undefined) {
            setDiveSpots(fetchDiveSpots())
        }
    })

    const diveSpot: DiveSpot | undefined = diveSpots?.find(spot => spot.id === `${id}`)

    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <Info>
                        <div>
                            {getName(diveSpot?.country)}
                            <h2>{diveSpot?.name}</h2>
                            <br/>
                            <Link href={diveSpot?.link}>Find more information about {diveSpot?.name}</Link>
                            <Description>
                                You dived there <b>{diveSpot?.when}</b> for <b>{diveSpot?.divesNumber} times</b> and it was <b>{diveSpot?.coolness}</b>
                                <br/>
                                <br/>
                                You used <b>{diveSpot?.weigh} kg</b> weigh and you reached <b>{diveSpot?.deep} m</b> deep.
                            </Description>
                        </div>
                        <ButtonsWrapper>
                            <NarrowButton>Edit</NarrowButton>
                            <NarrowPinkButton>Remove</NarrowPinkButton>
                        </ButtonsWrapper>
                    </Info>
                    <Image src={`${diveSpot?.photo}`} alt='image'/>
                </Content>
            </Wrapper>
        </>
    )
}

export default DiveSpotScreen