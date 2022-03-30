import React, {FC} from "react";
import {useSwiper} from "swiper/react";
import styled, {css} from "styled-components";
import arrow from '../../assets/img/arrow.svg'
import {space, SpaceProps} from "styled-system";

interface StyledSlideButtonProps {
    next?: boolean;
    prev?: boolean;
}

const StyledSlideButton = styled.button<StyledSlideButtonProps & SpaceProps>`
  ${space};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 0;
  background-color: #FE8700;
  color: white;
  background-image: url(${arrow});
  background-position: left 50% top 47%;
  background-repeat: no-repeat;
  background-size: 26px;
  cursor: pointer;
  ${props => props.next && css`
    transform: rotate(0deg);
  `};
  ${props => props.prev && css`
    transform: rotate(180deg);
  `}
`
const SlideButton: FC<StyledSlideButtonProps & SpaceProps> = (props) => {
    const swiper = useSwiper();
    return (
        <StyledSlideButton {...props} onClick={() => props.next ? swiper.slideNext() : swiper.slidePrev()}/>
    );
}

export default SlideButton
