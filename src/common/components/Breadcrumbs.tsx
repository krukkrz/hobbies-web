import useReactRouterBreadcrumbs, {
    BreadcrumbComponentProps,
} from "use-react-router-breadcrumbs";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {darkBlue} from "../constants/constants";
import React from "react";
import {useGlobalContext} from "./GlobalContext";

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

const DiveSpotBreadCrumb = ({match}: BreadcrumbComponentProps): JSX.Element => {
    const {diveSpots} = useGlobalContext()
    let diveSpot = diveSpots?.find(spot => spot.id === match.params.id);
    return <>{diveSpot?.name}</>
}

const SpeciesBreadCrumb = ({match}: BreadcrumbComponentProps): JSX.Element => {
    const {marineLife} = useGlobalContext()
    let species = marineLife?.find(species => species.id === match.params.id);
    return <>{species?.name}</>
}

const SurfSpotBreadCrumb = ({match}: BreadcrumbComponentProps): JSX.Element => {
    const {surfSpots} = useGlobalContext()
    let species = surfSpots?.find(spot => spot.id === match.params.id);
    return <>{species?.name}</>
}

export const Breadcrumbs = () => {
    
    const routes = [
        { path: '/', breadcrumb: 'Dashboard' },
        { path: '/marine', breadcrumb: 'Marine life' },
        { path: '/marine/:id', breadcrumb: SpeciesBreadCrumb },
        { path: '/marine/new', breadcrumb: 'New species' },
        { path: '/dive', breadcrumb: 'Dive spots' },
        { path: '/dive/:id', breadcrumb: DiveSpotBreadCrumb},
        { path: '/dive/new', breadcrumb: 'New spot'},
        { path: '/surf', breadcrumb: 'Surf spots'},
        { path: '/surf/:id', breadcrumb: SurfSpotBreadCrumb},
        { path: '/surf/new', breadcrumb: 'New spot'},
        { path: '/tech', breadcrumb: 'Tech stack'},
        { path: '/tech/:id', breadcrumb: 'Change me!'},
        { path: '/tech/new', breadcrumb: 'New tech'},
    ];

    const breadcrumbs = useReactRouterBreadcrumbs(routes);

    return <Wrapper>
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
            <>
                {index === 0? '' : ' >'} <Breadcrumb key={`breadcrumb_${index}`} to={match.pathname}>{breadcrumb}</Breadcrumb>
            </>
        ))}
    </Wrapper>
}