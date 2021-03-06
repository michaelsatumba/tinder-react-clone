import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';



function SwipeButtons() {
    return (
        <div className="swipeButtons">

           <IconButton className="swipeButtons__repeat">
            <ReplayIcon fontSize="large" className="header__icon" />
            </IconButton> 

            <IconButton className="swipeButtons__left">
            <CloseIcon fontSize="large" className="header__icon" />
            </IconButton> 

            <IconButton className="swipeButtons__star">
            <StarRateIcon fontSize="large" className="header__icon" />
            </IconButton> 

            <IconButton className="swipeButtons__right">
            <FavoriteIcon fontSize="large" className="header__icon" />
            </IconButton>
            
            <IconButton className="swipeButtons__lightning">
            <FlashOnIcon fontSize="large" className="header__icon" />
            </IconButton> 

        </div>
    )
}

export default SwipeButtons;
