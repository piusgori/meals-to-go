import { ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info.component';
import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/text.component';

const FavouritesWrapper = styled.View`
padding: 10px;
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
    if(!favourites.length){
        return null;
    }
    
  return (
    <FavouritesWrapper>
        <Spacer position='left' size='large'>
            <Text variant='caption'>Favourites</Text>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favourites.map((restaurant) => {
                const key = restaurant.name.split(' ').join("");
                return (
                    <Spacer key={key} position='left' size='medium'>
                        <TouchableOpacity onPress={() => {
                            return onNavigate('RestaurantDetail', {restaurant})
                        }}>
                            <CompactRestaurantInfo restaurant={restaurant}></CompactRestaurantInfo>
                        </TouchableOpacity>
                    </Spacer>
                )
            })}
        </ScrollView>
    </FavouritesWrapper>
  )
}

export default FavouritesBar;