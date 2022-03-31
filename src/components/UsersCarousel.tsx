import React, {FC, useRef} from 'react';
import {IUser} from "../types/user";
import {NavLink} from 'react-router-dom'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {A11y, Navigation} from "swiper";
import SlideButton from "./UI/SlideButton";
import Flex from "./UI/Flex";
import UserItem from "./UserItem";
import styled from "styled-components";
import backgroundImage from '../assets/img/swiperBackground.svg'

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;

  &.active {
    color: #FE8700;

    & div {
      &:before {
        transition: all 0.3s;
        opacity: 1;
      }
    }
  }
`

const SwiperInner = styled.div`
  position: relative;
  margin-bottom: 45px;

  &:before {
    display: block;
    content: '';
    position: absolute;
    background-image: url(${backgroundImage});
    right: -150px;
    top: 20px;
    width: 311px;
    height: 330px;
  }
`

interface UsersCarouselProps {
    users: IUser[];
}

const UsersCarousel: FC<UsersCarouselProps> = ({users}) => {

    return (
        <SwiperInner>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={40}
                slidesPerView={4}
                loop={true}
            >
                <Flex mb={20} align='center' justify='center'>
                    <SlideButton mr={19} prev/>
                    <SlideButton next/>
                </Flex>
                {
                    users.map((user) =>
                        <SwiperSlide
                            style={{width: "290px"}}
                            key={user.id}
                        >
                            <StyledNavLink
                                to={`/${user.id}`}
                            >
                                <UserItem {...user}/>
                            </StyledNavLink>
                        </SwiperSlide>)
                }
            </Swiper>
        </SwiperInner>

    );
};

export default UsersCarousel;