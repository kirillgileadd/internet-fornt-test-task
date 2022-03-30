import React, {FC} from 'react';
import {IUser} from "../types/user";

interface UsersCarouselProps {
    users: IUser[];
}

const UsersCarousel:FC<UsersCarouselProps> = ({users}) => {
    return (
        <div>
            UsersCarouser
        </div>
    );
};

export default UsersCarousel;