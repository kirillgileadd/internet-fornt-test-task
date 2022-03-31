import React, {FC} from 'react';
import SubTitle from "./UI/SubTitle";
import {IPost} from "../types/post";
import Flex from "./UI/Flex";

const PostItem: FC<IPost> = ({title, body}) => {
    return (
        <Flex align='flex-start' direction='column' mb={20}>
            <SubTitle>{title}</SubTitle>
            <p>{body}</p>
        </Flex>
    );
};

export default PostItem;