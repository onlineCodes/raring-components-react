/* eslint-disable react/prop-types */
import './ThankYouScreen.css';
import thankYouImg from '../../../../projekt-assets/illustration-thank-you.svg';

const ThankYouScreen = ({ rating }) => {
    return (
        <thank-you-wrapper>
            <figure>
                <img src={thankYouImg} alt='Thank You Image' />
            </figure>

            <span>You selected {rating} out of 5</span>
            <h2>Thank You!</h2>

            <p>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
        </thank-you-wrapper>
    );
};

export default ThankYouScreen;
