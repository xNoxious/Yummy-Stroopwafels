import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
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

// navigation is automatically injected from <RestaurantStack.Navigator />
export const RestaurantsScreen = ({ navigation }) => {
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
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails", { restaurant: item })}>
                            <RestaurantInfoCard restaurant={item} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    )
}