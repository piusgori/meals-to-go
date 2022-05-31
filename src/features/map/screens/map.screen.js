import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import Search from '../components/search.component';
import MapCallout from '../components/map-callout.component';

const Map = styled(MapView)`
height: 100%;
width: 100%;
`;

const MapScreen = (props) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantContext);
    const { lat, lng, viewport } = location;
    const { navigation } = props;

    const [latDelta, setLatDelta] = useState(0);

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport])

    return(
        <>
            <Search></Search>
            <Map region={{latitude: lat, longitude: lng, latitudeDelta: latDelta, longitudeDelta: 0.02}} style={{height: '100%'}}>
                {restaurants.map((restaurant) => {
                    return <MapView.Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng,
                        }}
                    >
                        <MapView.Callout onPress={() => navigation.navigate('RestaurantDetail', { restaurant })}>
                            <MapCallout restaurant={restaurant}></MapCallout>
                        </MapView.Callout>
                    </MapView.Marker>;
                })}
            </Map>
        </>
    )    
}

export default MapScreen;