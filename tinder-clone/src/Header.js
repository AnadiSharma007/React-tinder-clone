import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize='large' className='header_icon' />
            </IconButton>

            <img className='header__logo'
            src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-768x432.png'
            alt = ''>
           
            </img>

            <IconButton>
                <QuestionAnswerIcon fontSize='large' className='header_icon'/>
            </IconButton>

            </div>
    )
}

export default Header
