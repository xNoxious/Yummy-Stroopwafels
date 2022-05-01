import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
    const { isLoading, restaurants } = useContext(RestaurantsContext);
    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color='#FF00FF' />
                </LoadingContainer>
            )}
            <Search />
            <FlatList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <RestaurantInfoCard restaurant={item} />
                    )
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    )
}