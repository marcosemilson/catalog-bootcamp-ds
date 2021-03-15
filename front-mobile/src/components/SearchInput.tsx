import React from 'react';
import { View, TextInput } from 'react-native';
import { text, theme } from '../styles';

interface SerchProps {
    placeholder: string;
    search: string;
    setSearch: Function;
}
const SearchInput: React.FC <SerchProps>= ({
    search, 
    setSearch, 
    placeholder
    }) => {
   
    return(
        <View style={theme.serchContainer}>
            <TextInput 
            style={theme.serchInput} 
            placeholder={placeholder} 
            value={search} 
            onChangeText={(text) => setSearch(text)}
            />
        </View>
    )
}
export default SearchInput;