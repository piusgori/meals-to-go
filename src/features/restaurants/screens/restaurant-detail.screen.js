import React, { useState } from 'react';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

const RestaurantDetailScreen = (props) => {
    const { restaurant } = props.route.params;

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    return(
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant}></RestaurantInfoCard>
            <ScrollView>
                <List.Accordion
                    title='Breakfast'
                    left={(props) => <List.Icon {...props} icon='bread-slice'></List.Icon>}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Eggs Benedict"></List.Item>
                    <List.Item title="Classic Breakfast"></List.Item>
                </List.Accordion>
                <List.Accordion
                    title='Lunch'
                    left={(props) => <List.Icon {...props} icon='hamburger'></List.Icon>}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Burger w/ Fries"></List.Item>
                    <List.Item title="Steak Sandwich"></List.Item>
                    <List.Item title="Mushroom Soup"></List.Item>
                </List.Accordion>
                <List.Accordion
                    title='Dinner'
                    left={(props) => <List.Icon {...props} icon='food-variant'></List.Icon>}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Spaghetti Bolognese"></List.Item>
                    <List.Item title="Veal Cutlet with Chicken Mushroom"></List.Item>
                    <List.Item title="Steak Frites"></List.Item>
                </List.Accordion>
                <List.Accordion
                    title='Drinks'
                    left={(props) => <List.Icon {...props} icon='cup'></List.Icon>}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="Coffee"></List.Item>
                    <List.Item title="Tea"></List.Item>
                    <List.Item title="Modelo"></List.Item>
                    <List.Item title="Coke"></List.Item>
                    <List.Item title="Fanta"></List.Item>
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    )
}
export default RestaurantDetailScreen;