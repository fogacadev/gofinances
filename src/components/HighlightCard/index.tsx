import React from 'react';

import { 
  Container,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
  Header
 } from './styles';

export function HighLightCard(){
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle"/>
      </Header>
      <Footer>
        <Amount>R$ 14.400,00</Amount>
        <LastTransaction>Última entrada do dia 13 de abril</LastTransaction>
      </Footer>
      
    </Container>
  )
}