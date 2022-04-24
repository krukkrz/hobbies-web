import Header from "../../common/components/Header";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {DateInput, Input, YellowDropdown} from "../../common/components/inputs";
import styled from "styled-components";
import { DarkButtonNarrow} from "../../common/components/buttons";
import {useNavigate} from "react-router-dom";
import {Coolness, useGlobalContext} from "../../common/types";
import {Content, Wrapper } from "../../common/components/styles";
import {useEffect} from "react";
import {fetchDiveSpots} from "../../dive-spots/services/diveSpotsService";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;
`
const SaveButton = styled(DarkButtonNarrow)`
    margin-top: 30px;
    align-self: end;
`

const AddEditSpeciesScreen = () => {

    const {diveSpots, setDiveSpots} = useGlobalContext()

    let locationOptions: {label: string, value: string}[] = diveSpots?.map(spot => ({label: spot.name, value: spot.id})) || []


    useEffect(() => {
        if (diveSpots === undefined) {
            setDiveSpots(fetchDiveSpots())
        }
    })

    const coolnessOptions: {label: string, value: Coolness}[] = [
        {label: "Just OK", value: "just OK."},
        {label: "Super cool", value: "super cool!"},
    ]

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
                        <SaveButton>Save</SaveButton>
                    </Form>
                </Content>
            </Wrapper>
        </>
    )
}

export default AddEditSpeciesScreen