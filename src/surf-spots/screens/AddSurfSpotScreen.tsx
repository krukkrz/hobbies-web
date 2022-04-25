import {useNavigate} from "react-router-dom";
import Header from "../../common/components/Header";
import {Content, Form, Wrapper} from "../../common/components/styles";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {DateInput, Input, YellowDropdown} from "../../common/components/inputs";
import {countryOptionsList} from "../../common/services/countryService";
import {coolnessOptions} from "../../common/types";
import {SaveButton} from "../../common/components/buttons";
import {surfingOptions} from "../types";

const AddSurfSpotScreen = () => {
    const navigate = useNavigate()

    const handleSubmit = (event: any) => {
        navigate('/surf')
    }
    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <div>
                        <h2>Add new surf spot</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Input type='text' placeholder='Name'/>
                        <Input type='text' placeholder='Link'/>
                        <YellowDropdown
                            options={countryOptionsList()}
                            onChange={() => {}}
                            placeholder='Country'
                        />
                        <DateInput type='date' placeholder='When did you start surfing there?'/>
                        <DateInput type='date' placeholder='When did you end surfing there?'/>
                        <YellowDropdown
                            options={surfingOptions}
                            onChange={()=>console.log('change')}
                            placeholder="What kind of surfing?"
                        />
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

export default AddSurfSpotScreen