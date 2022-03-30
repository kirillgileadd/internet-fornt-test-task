import React, {FC, useRef} from 'react';
import {IUser} from "../types/user";
import {NavLink} from 'react-router-dom'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {A11y, Navigation} from "swiper";
import SlideButton from "./UI/SlideButton";
import Flex from "./UI/Flex";


interface UsersCarouselProps {
    users: IUser[];
    changeUser: (id: number) => void
}

const UsersCarousel: FC<UsersCarouselProps> = ({users, changeUser}) => {

    return (
        <div>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                loop={true}
            >
                <Flex align='center' justify='center'>
                    <SlideButton mr={19} next/>
                    <SlideButton prev/>
                </Flex>
                    {
                        users.map((user) =>
                            <SwiperSlide
                                key={user.id}
                            >
                                <NavLink
                                    onClick={() => changeUser(user.id)}
                                    to={`/${user.id}`}
                                >
                                    {user.name}
                                </NavLink>
                            </SwiperSlide>)
                    }
            </Swiper>
        </div>

    );
};

export default UsersCarousel;