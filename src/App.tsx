import React, {useEffect} from 'react';
import Header from "./components/Header";
import UsersCarousel from "./components/UsersCarousel";
import PostsList from "./components/PostsList";
import {useActions} from "./hooks/useActions";
import {useTypeSelector} from "./hooks/useTypeSelector";
import Loader from "./components/Loader";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import backgroundImage from "./assets/img/swiperBackground.svg";
import Commas from "./assets/img/postsBackground.svg";

const AppWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1310px;
  min-height: 100vh;
  padding: 3rem 15px;
  background: #FFFF;
  color: #606F81;
`

const PostInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  position: relative;
  min-height: 55vh;
  z-index: 10;
  @media (max-width: 768px) {
    display: block;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    background-image: url(${backgroundImage});
    right: 77%;
    top: 111px;
    width: 311px;
    height: 330px;
    z-index: 1;
    @media (max-width: 768px) {
      display: none;
    }
  }
;

  &:after {
    display: block;
    content: '';
    position: absolute;
    background-image: url(${Commas});
    background-repeat: no-repeat;
    right: 77%;
    top: -15px;
    width: 100px;
    height: 78px;
    z-index: 1;
    @media (max-width: 768px) {
      display: none;
    }
  }
`

function App() {
    const {users, loading, error, currentUserId} = useTypeSelector(state => state.user)
    const {posts} = useTypeSelector(state => state.post)
    const {fetchUsers, changeCurrentUser, fetchPosts} = useActions()
    const location = useLocation()
    const pathnameId = parseInt(location.pathname.replace(/[^\d]/g, ''))
    const currentUser = users.find(user => user.id == currentUserId)

    useEffect(() => {
        fetchUsers(pathnameId)
    }, [])

    useEffect(() => {
        changeCurrentUser(pathnameId)
        fetchPosts(currentUserId)
    }, [pathnameId])

    if (loading && !users.length) {
        return <Loader/>
    }

    return (
        <AppWrapper>
            <Header/>
            <UsersCarousel
                users={users}
            />
            <PostInner>
                <div/>
                <PostsList posts={posts} username={currentUser?.username}/>
            </PostInner>
        </AppWrapper>
    );
}

export default App;
