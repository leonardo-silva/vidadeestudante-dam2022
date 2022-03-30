import React from 'react';

import { 
  Container, 
  Header,
  ContentWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName, 
} from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <ContentWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/leonardo-silva.png'}}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Leonardo</UserName>
            </User>
          </UserInfo>

        </ContentWrapper>
      </Header>
    </Container>
  );
}
