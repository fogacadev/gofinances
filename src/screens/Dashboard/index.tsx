import React from 'react';
import {Text} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighLightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';


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
  HighlightCards,
  Transactions,
  Title,
  TransactionList
 } from "./styles";

export function Dashboard(){
  const data=[{
    title:'Desenvolvimentop de site',
    amount:'R$ 12.000,00',
    category:{
      name:'Vendas',
      icon:'dollar-sign'
    },
    date:'13/04/2020'
  },
  {
    title:'Desenvolvimentop de site',
    amount:'R$ 12.000,00',
    category:{
      name:'Vendas',
      icon:'dollar-sign'
    },
    date:'13/04/2020'
  },
  {
    title:'Desenvolvimentop de site',
    amount:'R$ 12.000,00',
    category:{
      name:'Vendas',
      icon:'dollar-sign'
    },
    date:'13/04/2020'
  }
]
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
        <HighLightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril"/>    
        <HighLightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTransaction="Última saída dia 03 de abril"/>    
        <HighLightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="01 á 16 de abril" />    
      </HighlightCards>
      

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
        data={data}
        renderItem={({item}) => <TransactionCard data={item}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: getBottomSpace()
        }}
        />
      </Transactions>
    </Container>
  );
}