import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import {LocationContext } from '../../../services/location/location.context';
import { Platform, StatusBar  } from 'react-native';

const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
position: absolute;
z-index: 999;
top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 30}px;
width: 100%
`;

const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar 
                placeholder='Search for a location'
                icon="map"
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