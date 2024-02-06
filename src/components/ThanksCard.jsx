/* eslint-disable react/prop-types */

import { Stack, Button, Typography } from '@mui/material';
import ThankIcon from '../assets/illustration-thank-you.svg';

const ThanksCard = ({ inputSharing }) => {
    console.log("ThanksCard got inputSharing:>",inputSharing,"<")
    return (
        <Stack {...thanksCardStyles}>
            <img src={ThankIcon} alt={`${ThankIcon} icon`} />
            <Button {...selectedRatingStyles}>
                You selected {inputSharing} out of 5
            </Button>
            <Typography {...titleStyles}>
                Thank you!
            </Typography>
            <Typography {...descriptionStyles}>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </Typography>
        </Stack>
    );
};

const thanksCardStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
};

const selectedRatingStyles = {
    size: 'small',
    sx: {
        bgcolor: 'rgb(37, 45, 55)',
        color: 'rgb(251, 116, 19)',
        borderRadius: '15px',
        fontFamily: 'Montserrat',
        textTransform: 'none',
        paddingInline: '15px',
    },
};

const titleStyles = {
    variant: 'h5',
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    mb: -2,
};

const descriptionStyles = {
    fontSize: '14px',
    color: 'rgb(124, 135, 152)',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    lineHeight: 1.5,
    textAlign: 'center',
};

export default ThanksCard;
