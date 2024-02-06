import { useState } from 'react';
import { Box } from '@mui/material';
import RatingCard from './RatingCard';
import ThanksCard from './ThanksCard';

const Card = () => {
    const [inputSharing, setInputSharing] = useState('');

    const mycallback = () => {
        console.log("Card Callback setInputSharing:>",inputSharing,"<")
        setInputSharing("Stefan");
        console.log("mycallback had set the value")
    }

    return (
        <Box sx={cardStyles}>
            {inputSharing === '' ? (
                <RatingCard myc={mycallback} inputSharing={inputSharing} setInputSharing={setInputSharing} />
            ) : (
                <ThanksCard inputSharing={inputSharing} />
            )}
        </Box>
    );
};

const cardStyles = {
    width: { lg: '320px', sm: '285px', xs: '85%' },
    padding: { lg: '24px', xs: '18px' },
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    bgcolor: 'rgb(37, 45, 55)',
    borderRadius: '15px',
};

export default Card;
