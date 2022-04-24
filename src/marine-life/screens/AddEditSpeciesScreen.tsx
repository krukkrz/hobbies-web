import Header from "../../common/components/Header";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {DateInput, Input, YellowDropdown} from "../../common/components/inputs";
import {useNavigate} from "react-router-dom";
import { coolnessOptions} from "../../common/types";
import {Content, Form, Wrapper } from "../../common/components/styles";
import {useEffect} from "react";
import {fetchDiveSpots} from "../../dive-spots/services/diveSpotsService";
import {SaveButton} from "../../common/components/buttons";
import {useGlobalContext} from "../../common/components/GlobalContext";

const AddEditSpeciesScreen = () => {

    const {diveSpots, setDiveSpots} = useGlobalContext()

    let locationOptions: {label: string, value: string}[] = diveSpots?.map(spot => ({label: spot.name, value: spot.id})) || []

    useEffect(() => {
        if (diveSpots === undefined) {
            setDiveSpots(fetchDiveSpots())
        }
    })

    const navigate = useNavigate()

    const handleSubmit = (event: any) => {
        navigate('/marine')
    }

    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <div>
                        <h2>Add new species</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Input type='text' placeholder='Name'/>
                        <Input type='text' placeholder='Link'/>
                        <YellowDropdown
                            options={locationOptions}
                            onChange={()=>console.log('change')}
                            placeholder="Where did you see it?"
                        />
                        <DateInput type='date' placeholder='When did you see it?'/>
                        <YellowDropdown
                            options={coolnessOptions}
                            onChange={()=>console.log('change')}
                            placeholder="How cool was that?"
                        />
                        <Input type='text' placeholder='Photo link'/>
                        <SaveButton type='submit'>Save</SaveButton>
                    </Form>
                </Content>
            </Wrapper>
        </>
    )
}

export default AddEditSpeciesScreen