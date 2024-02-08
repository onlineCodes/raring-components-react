import { useState } from 'react';
import './App.css';

import RatingScreen from './components/RatingScreen/RatingScreen';
import ThankYouScreen from './components/ThankYouScreen/ThankYouScreen';

const App = () => {
    const [submitted, setSubmitted] = useState(false);
    const [rating, setRating] = useState(null);

    const handleRating = (rating) => {
        setRating(rating);
    };

    return (
        <>
            {!submitted ? (
                <RatingScreen onSubmit={() => setSubmitted(true)} onRating={handleRating} />
            ) : (
                <ThankYouScreen rating={rating} />
            )}
        </>
    );
};

export default App;
