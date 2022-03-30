import React, {useEffect} from 'react';
import Header from "./components/Header";
import UsersCarousel from "./components/UsersCarousel";
import PostsList from "./components/PostsList";
import {useActions} from "./hooks/useActions";
import {useTypeSelector} from "./hooks/useTypeSelector";
import Loader from "./components/Loader";

function App() {
    const {users, loading, error} = useTypeSelector(state => state.user)
    const {posts, userId} = useTypeSelector(state => state.post)
    const postsLoading = useTypeSelector(state => state.post.loading)
    const {fetchUsers, changeCurrentUser, fetchPosts} = useActions()
    console.log(userId);

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
        <div>
            <Header/>
            <UsersCarousel
                users={users}
                changeUser={changeUser}
            />
            {
                postsLoading && !posts.length ? <h3>Выберете блогера, чтобы увидеть его посты</h3>
                    : !postsLoading && posts.length ? <PostsList posts={posts}/>
                        : <Loader/>
            }
        </div>
    );
}

export default App;
