import React, {FC} from 'react';
import {IPost} from "../types/post";
import styled from "styled-components";
import Title from "./UI/Title";

const PostInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

interface PostListProps {
    posts: IPost[]
}

const PostsList: FC<PostListProps> = ({posts}) => {
    return (
        <PostInner>
            <div/>
            <div>
                <Title mb={30}>
                    3 актуальных поста Moriah.Stanton
                </Title>
                {
                    posts.map(post => <div key={post.id}>{post.title}</div>)
                }
            </div>
        </PostInner>
    );
};

export default PostsList;