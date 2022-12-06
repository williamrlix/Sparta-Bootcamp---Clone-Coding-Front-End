import { AddTaskOutlined, ShareOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments';
import Card from '../components/Card'

const Container = styled.div`
    display: flex;
    gap: 24px;
`;

const Content = styled.div`
    flex: 5;
`;

const VideoWrapper = styled.div`
    
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
    display: flex;
    align-items: center ;
    gap: 5px;
    cursor: pointer;
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`

const Recomendation = styled.div`
    flex: 2;
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`; 

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;

`; 

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const ChannelDetail = styled.div`
    display: flex;
    flex-direction:column;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
    font-weight: 500;
`;

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
    font-size: 12px;
`;

const Description = styled.p`
    font-size: 14px;
`;

const Subscribe = styled.div`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`; 

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                    width="100%"
                    height="480"
                    src="https://youtu.be/_nSalXeU11Y"
                    title="Youtube Video Player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    >
                    </iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>7,123,332 view . Jun 22, 2022</Info>
                    <Buttons>
                        <Button><ThumbUpOutlined/> 123</Button>
                        <Button><ThumbDownAltOutlined/>Dislike</Button>
                        <Button><ShareOutlined/>Share</Button>
                        <Button><AddTaskOutlined/>Save</Button>

                    </Buttons>
                </Details>
                <Hr/>
                <Channel>
                    <ChannelInfo>
                        <Image src='https://cdn.idntimes.com/content-images/community/2017/12/assassins-creed-syndicate-brother-sister-assassins-105850-1920x1080-4b82b0dbeef581545182e5c2a4996432_600x400.jpg'/>
                        <ChannelDetail>
                            <ChannelName>Siva Dev</ChannelName>
                            <ChannelCounter>200rb suscribers</ChannelCounter>
                            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aperiam animi hic ab eveniet. Nisi rem adipisci voluptatum corrupti beatae nobis excepturi nemo inventore, temporibus nesciunt architecto quasi quam laborum.</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Hr/>
                <Comments>  </Comments>
            </Content>
            <Recomendation>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recomendation>
        </Container>
        
    )
}

export default Video