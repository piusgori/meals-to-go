import { FlatList,TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import Search from '../components/search.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import FavouritesBar from '../../../components/favourites/favourites-bar.component';

const RestaurantList = styled(FlatList).attrs({contentContainerStyle: {padding: 16}})``;
const Loading = styled(ActivityIndicator)`
margin-left: -25px;
`;

const LoadingContainer = styled.View`
position: absolute;
top: 50%;
left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer style={{position: 'absolute', top: '50%', left: '50%'}}>
        <Loading size={50} animating={true} color={Colors.blue300}></Loading>
      </LoadingContainer>
      )}
      <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => {setIsToggled(!isToggled)}} />
      {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
        <RestaurantList 
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {navigation.navigate('RestaurantDetail', {restaurant: item})}}>
                <Spacer position='bottom' size="large">
                  <RestaurantInfoCard restaurant={item}></RestaurantInfoCard>
                </Spacer>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.name}
        ></RestaurantList>
    </SafeArea>
  )
}

export default RestaurantsScreen;
