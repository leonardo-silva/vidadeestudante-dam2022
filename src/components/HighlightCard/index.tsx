import React from "react";
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
  IconTotal, 
} from "./styles";

interface Props {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'income' | 'expense' | 'total';
}

export function HighlightCard({
    title,
    amount,
    lastTransaction,
    type
}: Props) {

    const icons = {
        income: "arrow-up-circle",
        expense: "arrow-down-circle",
        total: "dollar-sign"
    }

    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                {
                    type === 'total' ?
                    <IconTotal name={icons[type]} type={type}/> :
                    <Icon name={icons[type]} type={type}/>
                }    
            </Header>

            <Footer>
                <Amount type={type}>
                    {amount}
                </Amount>
                <LastTransaction type={type}>
                    {lastTransaction}
                </LastTransaction>
            </Footer>

        </Container>
    );
}