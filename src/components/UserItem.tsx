import React, {FC, useEffect, useState} from 'react';
import Flex from "./UI/Flex";
import SubTitle from "./UI/SubTitle";
import axios from "axios";
import {IUser} from "../types/user";
import styled from "styled-components";

const UserPhoto = styled.img`
  width: 290px;
  height: 320px;
  margin-bottom: 20px;
  object-fit: cover;
`
const Avatar = styled.div`
  position: relative;

  &::before {
    opacity: 0;
    content: '';
    position: absolute;
    left: 0;
    bottom: 25px;
    width: 100%;
    height: 5px;
    background-color: #FE8700;
  }
`

const UserItem: FC<IUser> = ({username, name}) => {
    return (
        <Flex direction='column'>
            <Avatar>
                <UserPhoto src="https://i.pravatar.cc/290" alt=""/>
            </Avatar>
            <Flex direction='column' align='flex-start'>
                <SubTitle>{name}</SubTitle>
                <p>{username}</p>
            </Flex>
        </Flex>
    );
};

export default UserItem;