import React from 'react';

import { 
  Button,
  Container, 
  Header,
  ContentWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon, 
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { Alert } from 'react-native';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Home() {
  const transactionData: DataListProps[] = [
    {
      id: '1',
      type: 'income',
      title: 'Bolsa PIBIC',
      amount: 'R$ 400,00',
      category: {
        icon: 'dollar-sign',
        name: 'Auxílio'
      },
      date: '13/02/2022'
    },
    {
      id: '2',
      type: 'expense',
      title: 'Almoço na escola',
      amount: 'R$ 59,00',
      category: {
        icon: 'coffee',
        name: 'Alimentação'
      },
      date: '10/02/2022'
    },
    {
      id: '3',
      type: 'expense',
      title: 'Aluguel do apartamento',
      amount: 'R$ 210,00',
      category: {
        icon: 'home',
        name: 'Casa'
      },
      date: '27/01/2022'
    },
  ];

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

          <Button 
            onPress={() => Alert.alert("TODO: Implementar logout!")}>
            <Icon name="logout"/>
          </Button>
        </ContentWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
          title='Entrada'
          amount='R$ 400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type='income'
        />
        <HighlightCard 
          title='Saída'
          amount='R$ 539,00'
          lastTransaction='Última saída dia 03 de abril'
          type='expense'
        />
        <HighlightCard 
          title='Total'
          amount='R$ 139,00'
          lastTransaction='01 à 16 de abril'
          type='total'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={transactionData}
          keyExtractor={( item ) => item.id}
          renderItem={({ item }) =>
            <TransactionCard data={item} />
          }
        />  
      </Transactions>
    </Container>
  );
}
