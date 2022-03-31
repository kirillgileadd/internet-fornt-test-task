import React from 'react';
import Flex from "./UI/Flex";
import { TailSpin } from  'react-loader-spinner'

const Loader = () => {
    return (
        <Flex justify='center' align='center'>
            <TailSpin
                height="60"
                width="60"
                color='#FE8700'
                ariaLabel='loading'
            />
        </Flex>
    );
};

export default Loader;