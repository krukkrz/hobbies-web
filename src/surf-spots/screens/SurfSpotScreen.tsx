import Header from "../../common/components/Header";
import {Link, Content, Info, Wrapper, Description, ButtonsWrapper, Image} from "../../common/components/styles";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {useGlobalContext} from "../../common/components/GlobalContext";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchSurfSpots} from "../services/surfSpotsService";
import {SurfSpot} from "../types";
import {getName} from "../../common/services/countryService";
import {NarrowButton, NarrowPinkButton} from "../../common/components/buttons";

const SurfSpotScreen = () => {
    const {surfSpots, setSurfSpots} = useGlobalContext()
    const {id} = useParams()

    useEffect(() => {
        if (surfSpots?.length === 0) {
            setSurfSpots(fetchSurfSpots())
        }
    })


    const surfSpot: SurfSpot | undefined = surfSpots?.find(spot => spot.id === `${id}`)

    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <Info>
                        <div>
                            {getName(surfSpot?.country)}
                            <h2>{surfSpot?.name}</h2>
                            <br/>
                            <Link href={surfSpot?.link}>Find more information about {surfSpot?.name}</Link>
                            <Description>
                                You surfed there <b>{surfSpot?.startDate} - {surfSpot?.endDate}</b> and that was <b>{surfSpot?.coolness}</b>
                            </Description>
                        </div>
                        <ButtonsWrapper>
                            <NarrowButton>Edit</NarrowButton>
                            <NarrowPinkButton>Remove</NarrowPinkButton>
                        </ButtonsWrapper>
                    </Info>
                    <Image src={`${surfSpot?.photo}`} alt='image'/>
                </Content>
            </Wrapper>
        </>
    )
}

export default SurfSpotScreen