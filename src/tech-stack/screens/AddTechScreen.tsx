import Header from "../../common/components/Header";
import {Content, Form, Wrapper} from "../../common/components/styles";
import {Breadcrumbs} from "../../common/components/Breadcrumbs";
import {Input, YellowDropdown} from "../../common/components/inputs";
import {SaveButton} from "../../common/components/buttons";
import {useNavigate} from "react-router-dom";
import {techTypeOptions} from "../types";

const AddTechScreen = () => {
    const navigate = useNavigate()
    const handleSubmit = (event: any) => {
        navigate('/tech')
    }

    return (
        <>
            <Header username={'email@email.com'}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <div>
                        <h2>Add new tech</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Input type='text' placeholder='Name'/>
                        <Input type='text' placeholder='Docs link'/>
                        <YellowDropdown
                            options={techTypeOptions}
                            onChange={() => {}}
                            placeholder='What is this?'
                        />
                        <Input type='text' placeholder='Links to learning material'/>
                        <Input type='text' placeholder='Link to your project'/>
                        <YellowDropdown
                            options={[
                                {label: 'Yes', value: 'true'},
                                {label: 'No', value: 'false'},
                            ]}
                            onChange={() => {}}
                            placeholder='Did you use it in commercial project?'
                        />
                        <Input type='text' placeholder='What is it good to use for?'/>

                        <SaveButton type='submit'>Save</SaveButton>
                    </Form>
                </Content>
            </Wrapper>
        </>
    )
}

export default AddTechScreen