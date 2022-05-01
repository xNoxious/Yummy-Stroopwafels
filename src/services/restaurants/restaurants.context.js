import React, { useState, createContext, useEffect, useMemo } from 'react';
import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                })
        }, 2000);
    };

    useEffect(() => {
        retrieveRestaurants();
    }, []);

    const value = {
        restaurants,
        isLoading,
        error
    };

    return (
        <RestaurantsContext.Provider value={value}>
            {children}
        </RestaurantsContext.Provider>
    )
}