import React, { useContext } from 'react';
import { FavouritesContext } from '../services/favourites/favourites.context';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`

export const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

    return (
        <FavouriteButton
            onPress={() => !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)}
        >
            <AntDesign
                name={isFavourite ? 'heart' : 'hearto'}
                color={isFavourite ? 'red' : 'white'}
                size={24} />
        </FavouriteButton>
    );
}