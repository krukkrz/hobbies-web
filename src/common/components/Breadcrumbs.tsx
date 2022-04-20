import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import {routes} from "../../App";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {darkBlue} from "../constants/constants";

const Wrapper = styled.div`
  margin-top: 80px;
`

const Breadcrumb = styled(NavLink)`
    text-decoration: none;
    color: ${darkBlue};
`

export const Breadcrumbs = () => {
    const breadcrumbs = useReactRouterBreadcrumbs(routes);
    return <Wrapper>
        {breadcrumbs.map(({ match, breadcrumb }) => <Breadcrumb to={match.pathname}>{breadcrumb}</Breadcrumb>)}
    </Wrapper>
}