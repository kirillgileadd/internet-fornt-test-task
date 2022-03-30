import React, {FC} from 'react';
import styled from "styled-components";
import {space, layout, LayoutProps, SpaceProps} from 'styled-system'

const StyledSubTittle = styled.h1<SpaceProps & LayoutProps>`
  ${layout};
  ${space};
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
`

const SubTitle: FC<SpaceProps & LayoutProps> = (props) => {
    return <StyledSubTittle {...props}/>
};

export default SubTitle;