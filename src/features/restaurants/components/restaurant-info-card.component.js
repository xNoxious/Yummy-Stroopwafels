import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Text } from '../../../components/text.component';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Icon, RestaurantCard, RestaurantCardCover, Address, Info, Rating, Section, SectionEnd } from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Section>
                    <Rating>
                        {ratingArray.map((item) => (
                            <SvgXml key={item} xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant='error'>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <View style={{ marginLeft: 16 }} />
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        <View style={{ marginLeft: 16 }} />
                        <Icon source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Text variant='label'>{name}</Text>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}