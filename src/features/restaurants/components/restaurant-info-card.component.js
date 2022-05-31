import React from 'react'
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import status from '../../../../assets/status';
import Favourite from '../../../components/favourites/favourite.component';
import {Spacer } from '../../../components/spacer/spacer.component';
import { Text as StyledText } from '../../../components/typography/text.component'
import { Icon, Address, Info, Overall, Rating, RestaurantCard, RestaurantCardCover, SectionEnd } from './restaurant-info-card.styles';

const RestaurantInfoCard = (props) => {
    const  { restaurant = {} } = props;
    const { name = 'Some Restaurant', icon, photos = ['https://cdn.pixabay.com/photo/2020/01/30/21/24/shop-4806610__340.jpg'], address = "100 some random street", isOpeenNow = true, rating = 4, isClosedTemporarily=true, placeId } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant}/>
        <RestaurantCardCover key={name} source={{uri: photos[0]}}></RestaurantCardCover>
        <Info>
          <StyledText variant='label'>{name}</StyledText>
          <Overall>
            <Rating>
              {ratingArray.map((each, index) => (
                <SvgXml key={`star-${placeId}-${index}`} width={20} height={20} xml={star}></SvgXml>
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && <StyledText variant='error'>CLOSED TEMPORARILY</StyledText>}
              <Spacer position='left' size='large'>
                {isOpeenNow && <SvgXml width={20} height={20} xml={status}></SvgXml>}
              </Spacer>
              <Spacer position='left' size='large'>
                <Icon style={{width: 15, height: 15}} source={{uri: icon}}></Icon>
              </Spacer>
            </SectionEnd>
          </Overall>
          <Address>{address}</Address>
        </Info>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard;
