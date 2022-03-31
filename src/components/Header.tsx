import React, {FC} from 'react';
import Title from "./UI/Title";
import Flex from "./UI/Flex";
import SubTitle from "./UI/SubTitle";

const Header:FC = () => {
    return (
        <div>
            <Flex mb={[ 10, 25, 35, 35 ]} justify='center' direction='column' align='center'>
                <Title mb={[ 10, 47, 47, 47 ]}>Наши топ-блогеры</Title>
                <SubTitle textAligin='center' maxWidth={350} >Лучшие специалисты в своем деле, средний опыт работы - 27 лет</SubTitle>
            </Flex>
        </div>
    );
};

export default Header;