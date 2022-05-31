import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import {LocationContext } from '../../../services/location/location.context'

const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]}
`;

const Search = (props) => {
    const { isFavouritesToggled, onFavouritesToggle } = props; 
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar 
                icon={isFavouritesToggled ? 'heart' : 'heart-outline' }
                onIconPress={onFavouritesToggle}
                placeholder='Search for a location'
                value={searchKeyword}
                onSubmitEditing={() => {search(searchKeyword)}}
                onChangeText={(text) =>{
                    setSearchKeyword(text);
                 }}
            ></Searchbar>
        </SearchContainer>
    )
}

export default Search;