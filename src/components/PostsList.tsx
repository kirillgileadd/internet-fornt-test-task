import React, {FC} from 'react';
import {IPost} from "../types/post";

interface PostListProps {
    posts: IPost[]
}

const PostsList: FC<PostListProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <div key={post.id} >{post.title}</div>)
            }
        </div>
    );
};

export default PostsList;