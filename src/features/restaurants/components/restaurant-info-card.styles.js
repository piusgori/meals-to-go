import styled from "styled-components";
import { Card } from 'react-native-paper';

export const Address = styled.Text`
font-size: ${(props) => props.theme.fontSizes.caption}; 
font-family: ${(props) => props.theme.fonts.body};
`;

export const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
margin-bottom: ${(props) => props.theme.space[3]};

`;

export const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Overall = styled.View `
flex-direction: row;
align-items: center;
`;

export const SectionEnd = styled.View`
flex-direction: row;
justify-content: flex-end;
flex: 1
`;

export const Icon = styled.Image`
width: 15px;
height: 15px;
`;