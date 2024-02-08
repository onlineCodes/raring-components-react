import { useState } from 'react';
import RatingScreen from './RatingScreen/RatingScreen';
import ThankYouScreen from './ThankYouScreen/ThankYouScreen';

const RateOurService = () => {
    const [rating, setRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleRating = (rating) => {
        setRating(rating);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };
    return (
        <>
            {!submitted ? (
                <RatingScreen onRating={handleRating} onSubmit={handleSubmit} />
            ) : (
                <ThankYouScreen rating={rating} />
            )}
        </>
    );
};

export default RateOurService;
