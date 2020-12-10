import React, {useState} from 'react'
import './Header.css'
import LanguageIcon from '@material-ui/icons/Language';
import {MenuItem,FormControl,Select} from "@material-ui/core";

function Header() {
    const [language, setLanguage] = useState('bahasa');
    const onBahasaChange = async (event) => {
        const languageCode = event.target.value;
        setLanguage(languageCode)
      }
    return (
        <div className="header">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo-amazon"/>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <div className="header_optionBasket">
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>
            </div>
            <div className="header_bahasa">
                <LanguageIcon className="header_bahasaIcon" />
                <FormControl className="header_dropdown">
                <Select variant="outlined" value={language} className="header_select" onChange={onBahasaChange}>
                    <MenuItem value="bahasa">Bahasa</MenuItem>
                    <MenuItem value="english">English</MenuItem>
                </Select>
            </FormControl>
            </div>
        </div>
    )
}

export default Header
