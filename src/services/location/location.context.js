import React, { useState, useEffect, createContext } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
    const [location, setLocation] = useState(false);
    const [keyword, setKeyword] = useState("San Francisco");
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    }

    useEffect(() => {
        if(!keyword.length){
            return;
        }
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setIsLoading(false)
            setLocation(result);
        })
        .catch(err => {
            setIsLoading(false);
            console.log(err);
        })
    }, [keyword])

    return(
        <LocationContext.Provider value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword
        }}>
            {children}
        </LocationContext.Provider>
    )
}