import React, {useState} from 'react';
import {Rating, RatingValuesType} from './Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Rating stories',
    component: Rating
};

export const EmptyStars = () => <Rating value={0} onClick={action('clicked')} />;
export const Rating1 = () => <Rating value={1} onClick={action('clicked')} />;
export const Rating2 = () => <Rating value={2} onClick={action('clicked')} />;
export const Rating3 = () => <Rating value={3} onClick={action('clicked')} />;
export const Rating4 = () => <Rating value={4} onClick={action('clicked')} />;
export const Rating5 = () => <Rating value={5} onClick={action('clicked')} />;

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValuesType>(1)
    return <Rating value={rating} onClick={setRating} />
};