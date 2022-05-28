import React, {FC, useEffect, useState} from 'react';
import Flex from "./UI/Flex";
import SubTitle from "./UI/SubTitle";
import axios from "axios";
import {IUser} from "../types/user";
import styled from "styled-components";
import {minHeight} from "styled-system";

const UserPhoto = styled.img`
  width: 100%;
  height: 320px;
  max-width: 100%;
  margin-bottom: 20px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 100%;
  }
  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
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
    @media (max-width: 576px) {
      bottom: 16px;
      height: 7px;
    }
  }
`

const UserItem: FC<IUser> = ({username, name}) => {
    return (
        <Flex direction='column'>
            <Avatar>
                <UserPhoto style={{minHeight: '320px'}} src="https://i.pravatar.cc/290" alt=""/>
            </Avatar>
            <Flex direction='column' align='flex-start'>
                <SubTitle>{name}</SubTitle>
                <p>{username}</p>
            </Flex>
        </Flex>
    );
};

export default UserItem;