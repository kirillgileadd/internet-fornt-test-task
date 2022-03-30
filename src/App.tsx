import React, {useEffect} from 'react';
import Header from "./components/Header";
import UsersCarousel from "./components/UsersCarousel";
import PostsList from "./components/PostsList";
import {useActions} from "./hooks/useActions";
import {useTypeSelector} from "./hooks/useTypeSelector";
import Loader from "./components/Loader";
import styled from "styled-components";

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

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        fetchPosts(userId)
    }, [userId])

    const changeUser = (id: number) => {
        changeCurrentUser(id)
    }

    if (loading && !users.length) {
        return <Loader/>
    }

    return (
        <AppWrapper>
            <Header/>
            <UsersCarousel
                users={users}
                changeUser={changeUser}
            />
            {/*Вынести в нутрь компонента!*/}
            <div style={{minHeight: '300px'}}>
                {
                    postsLoading && !posts.length ? <h3>Выберете блогера, чтобы увидеть его посты</h3>
                        : !postsLoading && posts.length ? <PostsList posts={posts}/>
                            : <Loader/>
                }
            </div>
        </AppWrapper>
    );
}

export default App;
