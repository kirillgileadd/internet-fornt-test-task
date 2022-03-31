import React, {useEffect} from 'react';
import Header from "./components/Header";
import UsersCarousel from "./components/UsersCarousel";
import PostsList from "./components/PostsList";
import {useActions} from "./hooks/useActions";
import {useTypeSelector} from "./hooks/useTypeSelector";
import Loader from "./components/Loader";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

const AppWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1300px;
  min-height: 100vh;
  padding: 3rem;
  background: #FFFF;
  color: #606F81;
`

function App() {
    const {users, loading, error} = useTypeSelector(state => state.user)
    const {posts, userId} = useTypeSelector(state => state.post)
    const postsLoading = useTypeSelector(state => state.post.loading)
    const {fetchUsers, changeCurrentUser, fetchPosts} = useActions()
    const location = useLocation()
    const pathnameId = Number(location.pathname[1])

    const currentUser = users.find(user => user.id == userId)

    const noPosts = postsLoading && !posts.length
    const postAreLoading = !postsLoading && posts.length

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        changeCurrentUser(pathnameId)
        fetchPosts(userId)
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
            <div style={{minHeight: '300px'}}>
                {
                    noPosts ? <h3>Выберете блогера, чтобы увидеть его посты</h3>
                        :
                        postAreLoading ? <PostsList posts={posts} username={currentUser?.username}/>
                            :
                            <Loader/>
                }
            </div>
        </AppWrapper>
    );
}

export default App;
