import React from 'react';
import {Text} from 'react-native';
import { HighLightCard } from '../../components/HighlightCard';

import { 
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards
 } from "./styles";

export function Dashboard(){
  return(
    <Container>
      <Header>
      <UserWrapper>
        <UserInfo>
          <Photo source={{uri: "https://avatars.githubusercontent.com/u/67247080?v=4.png"}}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Felipe</UserName>
            </User>
        </UserInfo>
        <Icon name="power"/>
      </UserWrapper>      
      </Header>
      
      <HighlightCards>
        <HighLightCard/>    
        <HighLightCard/>    
        <HighLightCard/>    
      </HighlightCards>
      
    </Container>
  );
}