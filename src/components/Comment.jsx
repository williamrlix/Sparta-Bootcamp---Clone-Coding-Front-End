import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text};
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;
`

const Comment = () => {
    return (
        <Container>
            <Avatar src='https://cdn.idntimes.com/content-images/community/2017/12/assassins-creed-syndicate-brother-sister-assassins-105850-1920x1080-4b82b0dbeef581545182e5c2a4996432_600x400.jpg'/>
            <Details>
                <Name>William<Date>1 hour ago</Date></Name>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed tempore et aut iusto. Voluptate eos perspiciatis, placeat nisi dolor eius. Tempore possimus qui quos placeat error dicta laborum dignissimos doloribus!</Text>
            </Details>
        </Container>
    )
}

export default Comment