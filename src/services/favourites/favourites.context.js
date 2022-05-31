import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([]);
    const saveFavourtites = async(value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favourites", jsonValue);
        } catch(e) {
            console.log("Error Storing" ,e);
        }
    }

    const loadFavourites = async() => {
        try {
            const value = await AsyncStorage.getItem('@favourites');
            if (value !== null){
                setFavourites(JSON.parse(value));
            }
        } catch (e) {
            console.log("Error Loading", e);
        }
    }

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    }
    const remove = (restaurant) => {
        const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId);
        setFavourites(newFavourites);
    }

    useEffect(() => {
        loadFavourites();
    }, [])

    useEffect(() => {
        saveFavourtites(favourites);
    }, [favourites])

    return (
        <FavouritesContext.Provider value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites: remove,
        }}>
            {props.children}
        </FavouritesContext.Provider>
    )
}