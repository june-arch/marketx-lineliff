import React, {useState} from 'react'
import './Header.css'
import LanguageIcon from '@material-ui/icons/Language';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import MenuIcon from '@material-ui/icons/Menu';
import {MenuItem,FormControl,Select,IconButton} from "@material-ui/core";


function Header() {
    const [language, setLanguage] = useState('bahasa');
    const [menu, setMenu] = useState(false);
    const onBahasaChange = async (event) => {
        const languageCode = event.target.value;
        setLanguage(languageCode)
      }

    const toogleMenu = (event) => {
        event.preventDefault();
        menu ? setMenu(false) : setMenu(true)
    }
    return (
        <header className="header">
            <div className="wrapper header_wrapper">
                <img className="header_logo" src="https://previews.dropbox.com/p/thumb/ABARuYU3Us2OZnclssJdzm9pOxay2KoIV-GNe6nKzHgLkt3ssmwadz8uCBSBTye2xgvlLOfxsDDY1UwTaNLLjbb54TvyC_3uq8Ro35OzeElKDwYL7_8GyAT6KOSVmV-AG-6OlvJaqdQjxcpRVMmyjScI2FELiej-xxy2BnuBnltYkgJdEaNfFwDPbCDt5BJUwEJn_6dLZPyHKm7XmVhhMVrMsHjr4rQdzPiZyjyNmuxeMAEIOAGMRwCDlxA4cFjQFBef19_L5PoRNpHQ2vhSyu7LeG6mMW-9hkBnlLPlSP5kyX4-XPk4r4wFWvo7ejNz0REesLPJbKA0ZcAWr0Efqzb0kaDN9-0gDshRXIlbeMyOIQ/p.png?fv_content=true&size_mode=5" alt="your-logo"/>
                <IconButton onClick={toogleMenu}>
                    <MenuIcon className="header_menu" />
                </IconButton>
                <nav className={`header_nav ${menu ? "active" : "deactive"}`}>
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Guest</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Orders</span>
                    </div>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">0</span>
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
                </nav>
            </div>
        </header>
    )
}

export default Header
