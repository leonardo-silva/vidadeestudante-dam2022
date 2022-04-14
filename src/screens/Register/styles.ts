import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`;

export const Form = styled.View`
    flex: 1;
    padding: 24px;
`;

export const Header = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${RFPercentage(16)}px;

    justify-content: flex-end;
    padding-bottom: 19px;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`;

