import React from 'react';
import CompactRestaurantInfo from '../../../components/restaurant/compact-restaurant-info.component';


const MapCallout = (props) => {
    const { restaurant  } = props;

  return (
    <CompactRestaurantInfo isMap restaurant={restaurant}></CompactRestaurantInfo>
  )
}

export default MapCallout;