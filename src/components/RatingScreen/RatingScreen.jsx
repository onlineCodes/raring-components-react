/* eslint-disable react/prop-types */
import './RatingScreen.css';
import starIcon from '../../../projekt-assets/icon-star.svg';
import { useState } from 'react';

const RatingScreen = ({ onSubmit, onRating }) => {
    const [btnDisabled, setBtnDisabled] = useState(true);

    const handleRating = (event) => {
        const value = event.target.innerText;
        setBtnDisabled(false);
        onRating(value);
    };

    return (
        <rating-wrapper>
            <img src={starIcon} alt='star icon' />
            <h2>How did we do?</h2>

            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>

            <button-section>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <button key={index} onClick={handleRating}>
                        {item}
                    </button>
                ))}
            </button-section>

            <button data-submit disabled={btnDisabled} onClick={onSubmit}>
                {btnDisabled ? 'Please Select Rating' : 'Submit'}
            </button>
        </rating-wrapper>
    );
};

export default RatingScreen;
