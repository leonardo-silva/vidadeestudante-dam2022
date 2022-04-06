import styled from "styled-components/native";
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: 'income' | 'expense' | 'total';
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ theme, type }) => 
        type === 'total' ? theme.colors.title : theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
  
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme, type }) => 
        type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(SimpleLineIcons)<TypeProps>`
    font-size: ${RFValue(40)}px;

    color: ${({ theme, type }) => 
        type === 'income' ? theme.colors.income : theme.colors.expense};
`;

export const IconTotal = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({ theme, type }) => 
        type === 'total' ? theme.colors.shape : theme.colors.title};

    margin-top: ${RFValue(37)}px;
`;

export const LastTransaction = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme, type }) => 
        type === 'total' ? theme.colors.shape : theme.colors.title};
`;

