import React, {FC} from 'react';
import styled from "styled-components";
import {space, layout, LayoutProps, SpaceProps} from 'styled-system'

interface StyleSubtitleProps {
    textAligin?: string;
}


const StyledSubTittle = styled.h1<SpaceProps & LayoutProps & StyleSubtitleProps>`
  ${layout};
  ${space};
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: ${props => props.textAligin || 'start'};
`

const SubTitle: FC<SpaceProps & LayoutProps & StyleSubtitleProps> = (props) => {
    return <StyledSubTittle {...props}/>
};

export default SubTitle;