import Header from "../components/Header";
import styled from "styled-components";
import {lime} from "../constants/constants";
import {useEffect, useState} from "react";
import {fetchDashboard} from "../services/dashboardService";
import {DashboardResponse} from "../types";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Layout = styled.div`
  width: 70%;
`

const Item = styled.div`
  background-color: ${lime};
  width: 100%;
  height: 161px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 55px;
`

const Title = styled.div`
  width: 132px;
  margin-left: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Info = styled.div`
  padding: 30px;
`

const DashboardScreen = () => {
    const initialState: DashboardResponse = {}
    const [dashboardData, setDashboardData] = useState(initialState);

    useEffect(() => {
        setDashboardData(fetchDashboard())
    }, [dashboardData])

    const naviagation = useNavigate()

    const goToMarineLife = () => {
            naviagation('/marine')
    }

    return (
        <>
            <Header username={dashboardData.username}/>
            <Wrapper>
                <Layout>
                    <h1>Your hobbies:</h1>
                    <Item onClick={goToMarineLife}>
                        <Title>
                            <h2>Marine life</h2>
                        </Title>
                        <Info>You saw <b>{dashboardData.marineLife?.total}</b> marine species in total.</Info>
                    </Item>
                    <Item>
                        <Title>
                            <h2>Dive spots</h2>
                        </Title>
                        <Info>You dived <b>{dashboardData.diveSpots?.totalDives} times</b> in <b>{dashboardData.diveSpots?.totalSpots} spots</b> in total
                            and you have reached <b>{dashboardData.diveSpots?.maxDepth} m</b> deep. </Info>
                    </Item>
                    <Item>
                        <Title>
                            <h2>Surf spots</h2>
                        </Title>
                        <Info>You visited <b>{dashboardData.surfSpots?.total}</b> surfing spots.</Info>
                    </Item>
                    <Item>
                        <Title>
                            <h2>Tech stack</h2>
                        </Title>
                        <Info>You used <b>{dashboardData.techStack?.total}</b> different programming tools.</Info>
                    </Item>
                </Layout>
            </Wrapper>
        </>
    )
}


export default DashboardScreen