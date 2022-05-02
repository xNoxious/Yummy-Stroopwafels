import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { CompactRestaurantInfo } from './compact-restaurant-info.component';
import { Text } from './text.component';

const FavouritesWrapper = styled.View`
    padding: 10px;
`;

const ItemListWrapper = styled.View`
    margin-left: 8px;
`

export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null;
    }

    return (
        <FavouritesWrapper>
            <ItemListWrapper>
                <Text variant="caption">Favourites</Text>
            </ItemListWrapper>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <ItemListWrapper key={key}>
                            <TouchableOpacity onPress={() => onNavigate("RestaurantDetails", { restaurant: restaurant })}>
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </ItemListWrapper>
                    )
                })}
            </ScrollView>
        </FavouritesWrapper>
    )
}