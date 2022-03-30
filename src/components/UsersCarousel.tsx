import React, {FC} from 'react';
import {IUser} from "../types/user";
import {NavLink} from 'react-router-dom'

interface UsersCarouselProps {
    users: IUser[];
    changeUser: (id: number) => void
}

const UsersCarousel: FC<UsersCarouselProps> = ({users, changeUser}) => {
    return (
        <div>
            {
                users.map((user) =>
                    <NavLink
                        key={user.id}
                        onClick={() => changeUser(user.id)}
                        to={`/${user.id}`}
                    >
                        {user.name}
                    </NavLink>)
            }
        </div>
    );
};

export default UsersCarousel;