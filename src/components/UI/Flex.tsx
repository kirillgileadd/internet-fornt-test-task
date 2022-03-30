import React, {FC} from 'react';
import styled from "styled-components";
import {layout, space, SpaceProps, LayoutProps} from "styled-system";

interface StyleFlexProps {
    direction?: string
    align?: string;
    justify?: string;
}

const StyleFlex = styled.div<StyleFlexProps & SpaceProps & LayoutProps>`
  ${space};
  ${layout};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
`

const Flex: FC<StyleFlexProps & SpaceProps & LayoutProps> = (props) => {
    return <StyleFlex {...props} />
};

export default Flex;