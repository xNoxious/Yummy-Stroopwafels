import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/safe-area.component';

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <FlatList
                data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }]}
                renderItem={() => <RestaurantInfoCard />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    )
}