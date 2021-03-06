import React, {FC} from 'react';
import styled from "styled-components";
import {space, layout, LayoutProps, SpaceProps} from 'styled-system'

const StyledTittle = styled.h3<SpaceProps & LayoutProps>`
  ${space};
  ${layout};
  display: block;
  font-weight: 600;
  font-size: 48px;
  line-height: 45px;
  color: #384758;
  @media(max-width: 576px) {
    font-size: 38px;
  }
  @media(max-width: 421px) {
    font-size: 28px;
  }
  
`

const Title: FC<SpaceProps & LayoutProps> = (props) => {
    return <StyledTittle {...props}/>
};

export default Title;