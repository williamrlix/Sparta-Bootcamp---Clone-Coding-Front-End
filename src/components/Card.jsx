import { Link } from "react-router-dom"
import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width: ${(props)=>props.type !== "sm" && "360px"};
    margin-bottom: ${(props)=>props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    display: ${(props)=>props.type === "sm" && "flex"};
    gap: 10px;
`

const Image = styled.img`
    width: 100%;
    height: ${(props)=>props.type === "sm" ? "100px" : "202px"};
    background-color: #999;
`

const Details = styled.div`
    display: flex;
    margin-top: ${(props)=>props.type !== "sm" && "16px"};
    gap: 12px;
`

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props)=>props.type === "sm" && "none"};
`

const Texts = styled.div`
    
`

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 10px 0px;
`

const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`

const Card = (type) => {
    return (
        <Link to="video/test" style={{ textDecoration:"none" }}>
            <Container type={type}>
                <Image type={type} src='https://velog.velcdn.com/images/azurestefan/post/3e27e1ff-808a-4e1c-bb84-284372f3c634/react.png'/>
                <Details type={type}>
                    <ChannelImage type={type} src='https://cdn.idntimes.com/content-images/community/2017/12/assassins-creed-syndicate-brother-sister-assassins-105850-1920x1080-4b82b0dbeef581545182e5c2a4996432_600x400.jpg'/>
                    <Texts>
                        <Title>Test Video</Title>
                        <ChannelName>Siva Dev</ChannelName>
                        <Info>660,908 views . 1 day ago</Info>
                    </Texts>
                </Details>    
            </Container>
        </Link>
    )
}

export default Card