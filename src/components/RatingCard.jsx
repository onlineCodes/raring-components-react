/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Stack, Button, Typography, Fab, Snackbar, Alert } from '@mui/material';
import Star from '../assets/icon-star.svg';
import { convertLength } from '@mui/material/styles/cssUtils';

const RatingCard = ({ inputSharing, setInputSharing, myc}) => {
    const InputBtns = ['1', '2', '3', '4', '5'];
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);
    let nochmal = false;
    const handleInput = (e) => { // STACK onClick
        //console.log("handleInput(e.currentTarget):",e.currentTarget,item, index);
        console.log("handleInput(e.currentTarget):",e.currentTarget.innerText);
        setInput(e.currentTarget.innerText);
        //console.log(e);
    };
    const handleSwitching = () => { // Button onClick
        console.log("handleSwitching",nochmal,"input:",input," inputSharing:",inputSharing)
        //input === '' ? setInputSharing(input) : setInputSharing(!inputSharing);
        parseInt(input) >0 ? console.log("syleButton show") : console.log("syleButton hidden") 
        
        console.log("submit=",~~input)
        if(nochmal && parseInt(input) >0 ){
            
            if(~~input > 0){
                console.log(input*1,"inputSharing === '' ? wird hier eine Zahl gesetzgehts weiter mit ThanksCard")
                setInputSharing(input*1)// inputSharing === '' ? wird hier eine Zahl gesetzgehts weiter mit ThanksCard
            }
            console.log("submit nochmal",nochmal)
        }else{
          if(parseInt(input) >0) { 
            console.log(input,"ich setze Absenden auf aktiv: klick noch Mal")
            nochmal = true
          }
        }
        /*  if (input === '') {
            setOpen(true);
        } else {
            setInputSharing(input);
        } */
    };
    const handleClose = () => {
        console.log("open:",open," input:",input," inputSharing:",inputSharing,InputBtns)
        setOpen(false);
    };
    return (
        <>
            <Stack gap={3}>
                <Fab size="medium" sx={{ bgcolor: 'rgb(52, 63, 76)', boxShadow: 'none' }}
                    onClick={myc}
                >
                    <img src={Star} alt={Star + 'icon'} />
                </Fab>
                <span>Drücke F12 um die console.logs zu sehen!</span>
                <Typography
                    variant="h5"
                    color="rgb(255, 255, 255)"
                    lineHeight={1.5}
                    fontFamily="Montserrat"
                    mb={-1}
                    fontWeight="600"
                >
                    How did we do?
                </Typography>
                <Typography
                    fontSize="14px"
                    lineHeight={1.5}
                    fontFamily="Montserrat"
                    color="rgb(124, 135, 152)"
                    fontWeight="500"
                >
                    Please let us know how we did with your support request. All feedback is
                    appreciated to help us improve our offering!
                </Typography>
                <Stack flexDirection="row" gap={2} justifyContent="center">
                    {InputBtns.map((item, index) => (
                        <Fab
                            key={index}
                            size="medium"
                            sx={{
                                bgcolor: 'rgb(52, 63, 76)',
                                boxShadow: 'none',
                                fontFamily: 'Montserrat',
                                color: 'rgb(149, 158, 172)',
                                ':hover': {
                                    bgcolor: 'rgb(251, 116, 19)',
                                    color: 'rgb(255, 255, 255)',
                                },
                                ':focus': {
                                    bgcolor: 'rgb(149, 158, 172)',
                                    color: 'rgb(255, 255, 255)',
                                },
                            }}
                            // onClick={handleInput(e und item, index)}
                            onClick={handleInput}
                        >
                            {item}
                        </Fab>
                    ))}
                </Stack>
                <Button
                    size="large"
                    sx={{
                        bgcolor: 'rgb(251, 116, 19)',
                        color: 'white',
                        fontFamily: 'Montserrat',
                        borderRadius: '30px',
                        letterSpacing: '2px',
                        ':hover': {
                            color: 'rgb(251, 116, 19)',
                            bgcolor: 'white',
                        },
                    }}
                    onClick={handleSwitching}
                >
                    handleSwitching
                </Button>
            </Stack>
            <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="warning"
                    variant="filled"
                    sx={{ width: '100%', fontFamily: 'Montserrat' }}
                >
                    Please Give Rating To Proceed Forward
                </Alert>
            </Snackbar>
        </>
    );
};

export default RatingCard;
