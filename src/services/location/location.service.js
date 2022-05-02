import camelize from 'camelize';
import { locations } from './mock/localtion.mock';

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const mock = locations[searchTerm];

        if (!mock) {
            reject('not found');
        }

        resolve(mock);
    })
};

export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat, lng } = geometry.location;
    const viewport = geometry.viewport;

    return { lat, lng, viewport };
};