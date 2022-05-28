import React, {FC, useEffect} from 'react';
import {IPost} from "../types/post";
import Title from "./UI/Title";
import PostItem from "./PostItem";
import {useTypeSelector} from "../hooks/useTypeSelector";
import Loader from "./Loader";
import {useActions} from "../hooks/useActions";


interface PostListProps {
    posts: IPost[];
    username?: string;
}

const PostsList: FC<PostListProps> = ({posts, username}) => {
    const postsLoading = useTypeSelector(state => state.post.loading)
    const {clearPostAction} = useActions()
    const noPosts = postsLoading && !posts.length

    useEffect(() => {
        return function clear() {
            clearPostAction()
        }
    }, [])

    if (noPosts) {
        return <Title>Выберете блогера, чтобы увидеть его посты</Title>
    }

    if (postsLoading) {
        return <Loader/>
    }

    return (
        <div>
            <Title mb={[10, 35, 35, 57]}>
                3 актуальных поста {username}
            </Title>
            {
                posts.map(post => <PostItem key={post.id} {...post} />)
            }
        </div>
    );
};

export default PostsList;