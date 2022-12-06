import React from "react"
import styled from "styled-components"
import SivaTube from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom"

const Container = styled.div`
    flex:1;
    background-color: ${({theme}) => theme.bgLighter};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-style: 10px;
    position: sticky;
    top: 0;
`

const Wrapper = styled.div`
    padding: 5px 22px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 10px;
`

const Img = styled.img`
    height: 25px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 21px;
    cursor: pointer;
    padding: 2px 0px;
`

const Hr = styled.hr`
    margin: 10px 0px;
    border: 0.5px solid #373737;
`

const Login = styled.div`

`

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`

const Menu = ({darkMode, setDarkMode}) => {
    return (
        <Container>
            <Wrapper>
            <Link to="/" style={{ textDecoration:"none", color:"inherit" }}>
                <Logo>
                    <Img src={SivaTube}/>
                    SivaTube
                </Logo>
                </Link>
                <Item>
                    <HomeIcon/>
                    Home
                </Item>
                <Item>
                    <ExploreIcon/>
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon/>
                    Subscriptsions
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryIcon/>
                    Library
                </Item>
                <Item>
                    <HistoryIcon/>
                    History
                </Item>
                <Hr/>
                <Login>
                    Sign in to like videos, comment, and subscribe
                    <Button><AccountCircleIcon/>SIGN IN</Button>
                </Login>
                <Hr/>
                <Title>BEST OF SIVATUBE</Title>
                <Item>
                    <LibraryMusicIcon/>
                    Music
                </Item>
                <Item>
                    <SportsBasketballIcon/>
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon/>
                    Gaming
                </Item>
                <Item>
                    <MovieIcon/>
                    Movies
                </Item>
                <Item>
                    <ArticleIcon/>
                    News
                </Item>
                <Item>
                    <LiveTvIcon/>
                    Live
                </Item>
                <Hr/>
                <Item>
                    <SettingsIcon/>
                    Settings
                </Item>
                <Item>
                    <FlagIcon/>
                    Report
                </Item>
                <Item>
                    <HelpOutlineIcon/>
                    Help
                </Item>
                <Item onClick={()=>setDarkMode(!darkMode)}>
                    <SettingsBrightnessIcon/>
                    {darkMode ? "Ligth" : "Dark"} Mode
                </Item>
            </Wrapper>
        </Container>
    )
}
export default Menu