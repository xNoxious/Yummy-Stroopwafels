import React, { useState, createContext } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("Antwerp");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);

        if (!searchKeyword.length) {
            // don't do anything
            return;
        }

        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    }

    const value = {
        isLoading,
        error,
        location,
        search: onSearch,
        keyword
    }

    return (
        <LocationContext.Provider value={value}>
            {children}
        </LocationContext.Provider>
    )
};