import React, {FC} from 'react';
import styled from "styled-components";
import {space, layout, LayoutProps, SpaceProps} from 'styled-system'

const StyledTittle = styled.h1<SpaceProps & LayoutProps>`
  ${space};
  ${layout};
  font-weight: 600;
  font-size: 48px;
  line-height: 20px;
  color: #384758;
`

const Title: FC<SpaceProps & LayoutProps> = (props) => {
    return <StyledTittle {...props}/>
};

export default Title;