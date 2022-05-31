import React from 'react';
import styled from 'styled-components';
import { Text } from '../typography/text.component';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

const CompactImage = styled.Image`
border-radius: 10px;
width: 120px;
height: 100px;
`;

const CompactWebview = styled(WebView)`
border-radius: 10px;
width: 120px;
height: 100px;
`;

const Item = styled.View`
padding: 10px;
max-width: 120px;
align-items: center;
`;

const isAndroid = Platform.OS === 'android';

const CompactRestaurantInfo = (props) => {
    const { restaurant, isMap } = props;
    const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
        <Image source={{uri: restaurant.photos[0]}}></Image>
        <Text center variant='caption' numberOfLines={3}>{restaurant.name}</Text>
    </Item>
  )
}

export default CompactRestaurantInfo