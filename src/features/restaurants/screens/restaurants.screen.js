import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { ActivityIndicator } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Search } from '../components/search.component';
import { FavouritesBar } from '../../../components/favourites-bar.component';
import { RestaurantList } from '../components/restaurant-list.styles';
import { FadeInView } from '../../../components/fade.animation';

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
    const { favourites } = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color='#FF00FF' />
                </LoadingContainer>
            )}
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)} />

            {isToggled &&
                <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}

            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails", { restaurant: item })}>
                            <FadeInView>
                                <RestaurantInfoCard restaurant={item} />
                            </FadeInView>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    )
}