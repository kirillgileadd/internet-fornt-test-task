import React, {FC} from 'react';
import {IPost} from "../types/post";
import styled from "styled-components";
import Title from "./UI/Title";
import PostItem from "./PostItem";
import backgroundImage from '../assets/img/swiperBackground.svg'
import Commas from '../assets/img/postsBackground.svg'
import {useTypeSelector} from "../hooks/useTypeSelector";
import Loader from "./Loader";


interface PostListProps {
    posts: IPost[];
    username?: string;
}

const PostsList: FC<PostListProps> = ({posts, username}) => {
    const postsLoading = useTypeSelector(state => state.post.loading)
    const noPosts = postsLoading && !posts.length
    const postAreLoading = !postsLoading && posts.length

    if (noPosts) {
        return <Title>Выберете блогера, чтобы увидеть его посты</Title>
    }

    if (!postAreLoading) {
        return <Loader/>
    }

    return (
        <div>
            <Title mb={57}>
                3 актуальных поста {username}
            </Title>
            {
                posts.map(post => <PostItem key={post.id} {...post} />)
            }
        </div>
    );
};

export default PostsList;