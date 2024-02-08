/* eslint-disable react/prop-types */
import './RatingScreen.css';
import starIcon from '../../../../projekt-assets/icon-star.svg';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

const RatingScreen = ({ onRating, onSubmit }) => {
    const [btnDisabled, setBtnDisabled] = useState(true);

    const buttonRefs = useRef([]);
    const lastFocusedButtonRef = useRef(null);

    const handleRatingButtonClick = (event, index) => {
        if (buttonRefs.current[index]) {
            lastFocusedButtonRef.current = buttonRefs.current[index].current;
        }
        const value = event.target.innerText;

        setBtnDisabled(false);
        onRating(value);
    };

    const handleKeyDown = (event, index) => {
        if ((event.key === ' ' || event.key === 'Enter') && !event.ctrlKey) {
            event.preventDefault();
            handleRatingButtonClick(event, index);
        } else if (event.key === 'Enter' && event.ctrlKey) {
            event.preventDefault();
            onSubmit();
        } else if (event.key === 'Tab') {
            event.preventDefault();
            setBtnDisabled(true);

            // Focus the next button in the sequence
            const nextIndex = index < buttonRefs.current.length - 1 ? index + 1 : 0;
            buttonRefs.current[nextIndex].current.focus();
        }
    };

    if (buttonRefs.current.length !== 5) {
        buttonRefs.current = Array(5)
            .fill()
            .map((_, index) => buttonRefs.current[index] || React.createRef());
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (buttonRefs.current.length > 0) {
                const clickedOutsideButtons = buttonRefs.current.every((buttonRef) => {
                    return buttonRef.current && !buttonRef.current.contains(event.target);
                });

                if (clickedOutsideButtons && lastFocusedButtonRef.current) {
                    event.preventDefault();
                    event.stopPropagation();
                    lastFocusedButtonRef.current.focus();

                    btnDisabled && setBtnDisabled(false);
                }
            }
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    });

    return (
        <rating-wrapper>
            <figure>
                <img src={starIcon} alt='star icon' />
            </figure>

            <h2>How did we do?</h2>

            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>

            <button-section>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <button
                        className='rating-button'
                        key={index}
                        onClick={(event) => {
                            handleRatingButtonClick(event, index);
                        }}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        ref={buttonRefs.current[index]}
                        tabIndex={index + 1}
                    >
                        {item}
                    </button>
                ))}
            </button-section>

            <button type='submit' disabled={btnDisabled} onClick={onSubmit}>
                {btnDisabled ? (
                    'Please Select Rating'
                ) : (
                    <p>
                        Submit or <span>(ctrl+enter</span>)
                    </p>
                )}
            </button>
        </rating-wrapper>
    );
};

export default RatingScreen;
