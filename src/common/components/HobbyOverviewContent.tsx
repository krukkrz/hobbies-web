import Header from "./Header";
import {Content, Description, HobbyItem, List, Wrapper} from "./styles";
import {Breadcrumbs} from "./Breadcrumbs";
import {ButtonWide} from "./buttons";
import {useNavigate} from "react-router-dom";
import {BaseHobbyType} from "../types";

type Props = {
    username: string
    title: string
    description: string
    hobbyPath: string
    newItemLabel: string
    hobbyItems?: BaseHobbyType[]
}

export const HobbyOverviewContent = ({username, title, description, newItemLabel, hobbyItems, hobbyPath}: Props) => {
    const navigate = useNavigate();

    return (
        <>
            <Header username={username}/>
            <Wrapper>
                <Breadcrumbs/>
                <Content>
                    <div>
                        <h1>{title}</h1>
                        <Description>
                            {description}
                        </Description>
                    </div>
                    <List>
                        <ButtonWide onClick={() => navigate(hobbyPath + '/new')}>{newItemLabel}</ButtonWide>
                        { hobbyItems?.map(item => <HobbyItem key={item.id} onClick={() => navigate(hobbyPath+'/'+item.id)}>{item.name}</HobbyItem>) }
                    </List>
                </Content>
            </Wrapper>
        </>
    )
}