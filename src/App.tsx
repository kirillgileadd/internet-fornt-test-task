import React, {useEffect} from 'react';
import Header from "./components/Header";
import UsersCarousel from "./components/UsersCarousel";
import PostsList from "./components/PostsList";
import {useActions} from "./hooks/useActions";
import {useTypeSelector} from "./hooks/useTypeSelector";
import Loader from "./components/Loader";

function App() {
    const {users, loading, error} = useTypeSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading && !users.length) {
        return <Loader/>
    }

    return (
        <div>
            <Header/>
            <UsersCarousel users={users}/>
            <PostsList/>
        </div>
    );
}

export default App;
