import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {darkBlue} from "../constants/constants";

const Wrapper = styled.div`
  margin-top: 80px;
`

const Breadcrumb = styled(NavLink)`
    text-decoration: none;
    color: ${darkBlue};
  
  :hover {
    text-decoration: underline; 
  }
`

export const Breadcrumbs = () => {
    
    const routes = [
        { path: '/', breadcrumb: 'Dashboard' },
        { path: '/marine', breadcrumb: 'Marine life' },
        { path: '/marine/:id', breadcrumb: 'Species' },
        { path: '/marine/new', breadcrumb: 'Add new species' },
        { path: '/dive', breadcrumb: 'Dive spots' },
    ];

    const breadcrumbs = useReactRouterBreadcrumbs(routes);

    return <Wrapper>
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
            <>
                {index === 0? '' : ' >'} <Breadcrumb to={match.pathname}>{breadcrumb}</Breadcrumb>
            </>
        ))}
    </Wrapper>
}