import React, { useState } from 'react';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/safe-area.component';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

export const RestaurantDetailsScreen = ({ route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);
    const { restaurant } = route.params;

    return (
        <SafeArea>
            <ScrollView>
                <RestaurantInfoCard restaurant={restaurant} />
                <List.Accordion
                    title="Breakfast"
                    left={(props) => <List.Icon {...props} icon='bread-slice' />}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="English Breakfast" />
                </List.Accordion>
                <List.Accordion
                    title="Lunch"
                    left={(props) => <List.Icon {...props} icon='hamburger' />}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Burger & Fries" />
                    <List.Item title="Italian Panini Sandwich" />
                    <List.Item title="Vegetarian Pizza" />
                </List.Accordion>
                <List.Accordion
                    title="Dinner"
                    left={(props) => <List.Icon {...props} icon='food-variant' />}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Fancy Schmancy Steak" />
                    <List.Item title="Pasta Bolognese" />
                    <List.Item title="Water & Ice Cube Croutons" />
                </List.Accordion>
                <List.Accordion
                    title="Drinks"
                    left={(props) => <List.Icon {...props} icon='glass-cocktail' />}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="Le Cocktail" />
                    <List.Item title="Beer" />
                    <List.Item title="More Beer" />
                    <List.Item title="Earl Gray Cuppa" />
                    <List.Item title="Coke Zero" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    )
}