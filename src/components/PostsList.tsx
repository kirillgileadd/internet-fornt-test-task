import React, {FC} from 'react';
import {IPost} from "../types/post";
import styled from "styled-components";
import Title from "./UI/Title";
import PostItem from "./PostItem";
import {useTypeSelector} from "../hooks/useTypeSelector";

const PostInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

interface PostListProps {
    posts: IPost[];
    username?: string | undefined;
}

const PostsList: FC<PostListProps> = ({posts, username}) => {
    // const {users, } = useTypeSelector(state => state.user)
    return (
        <PostInner>
            <div/>
            <div>
                <Title mb={57}>
                    3 актуальных поста {username}
                </Title>
                {
                    posts.map(post => <PostItem key={post.id} {...post} />)
                }
            </div>
        </PostInner>
    );
};

export default PostsList;