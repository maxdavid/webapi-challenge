import React from 'react';
import { history } from '../helpers';
import styled from 'styled-components';

const AppHeader = () => {
  return (
    <HeaderContainer>
      <BackButton onClick={history.push('/')}>Back</BackButton>
      <AppTitle>
        <h1>People and Projects</h1>
      </AppTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
`;

const BackButton = styled.div`
  cursor: pointer;
  margin: 0 20px;
  background-color: #dddddd;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    opacity: 0.7;
  }
`;

const AppTitle = styled.div`
  width: 100%;
`;

export default AppHeader;
