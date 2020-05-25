import React from 'react';
import { ContainerBase } from '../../../foundation';
import Styled from './DashboardHeader.styles';

const DashBoardHeader = ({ user }) => {
  return (
    <ContainerBase
      height="70px"
      backgroundColor="white"
      display="flex"
      alignItems="center"
    >
      <Styled.Wrapper>
        <Styled.SearchWrapper>
          <Styled.SearchIcon src="svg/icon_search.svg" />
          <Styled.Input
            type="text"
            name="name"
            placeholder="students,courses or onsite locations"
          />
        </Styled.SearchWrapper>
        <Styled.ProfileWrapper>
          <Styled.ProfileIcon src={user.photoURL} />
          <Styled.Label>{user.displayName}</Styled.Label>
          <Styled.NotificationIcon src="svg/icon_notification_2.svg" />
        </Styled.ProfileWrapper>
      </Styled.Wrapper>
    </ContainerBase>
  );
};

export default DashBoardHeader;
