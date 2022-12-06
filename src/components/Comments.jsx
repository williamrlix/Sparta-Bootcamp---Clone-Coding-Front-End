import React from 'react'
import styled from "styled-components"
import Comment from './Comment'

const Container = styled.div`
    
`

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};;
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src='https://cdn.idntimes.com/content-images/community/2017/12/assassins-creed-syndicate-brother-sister-assassins-105850-1920x1080-4b82b0dbeef581545182e5c2a4996432_600x400.jpg'/>
                <Input placeholder='Add a comment...'/>
            </NewComment>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Container>
    )
}

export default Comments