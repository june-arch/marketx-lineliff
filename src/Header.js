import React, {useEffect, useState} from 'react'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import MenuIcon from '@material-ui/icons/Menu';
import {MenuItem,FormControl,Select,IconButton} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useLiff } from 'react-liff';

// import LanguageIcon from '@material-ui/icons/Language';


function Header() {
    const { error, liff, isLoggedIn, ready } = useLiff();
    const [{ basket, user }, dispatch] = useStateValue();
    const [menu, setMenu] = useState(true);

    // const [language, setLanguage] = useState('bahasa');
    

    useEffect(() => {
        if(isLoggedIn){
          dispatch({
            type: 'SET_USER',
            user:isLoggedIn
          })
        }else {
          dispatch({
            type: 'SET_USER',
            user:null
          })
        }
    
      }, [isLoggedIn]);

      console.log('this is user ==>>',user)

    // const onBahasaChange = (event) => {
    //     const languageCode = event.target.value;
    //     setLanguage(languageCode)
    // }

    // const toogleMenu = (event) => {
    //     event.preventDefault();
    //     menu ? setMenu(false) : setMenu(true)
    // }

    const handleLoginLiff = () => {
        liff.login();
    }

    const handleLogoutLiff = () => {
        liff.logout();
    }

    return (
        <header className="header">
            <div className="wrapper header_wrapper">
                <Link to="/">
                    <img className="header_logo" src="data:image/png;base64,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" alt="your-logo"/>
                </Link>
                {/* <IconButton onClick={toogleMenu}>
                    <MenuIcon className="header_menu" />
                </IconButton> */}

                <MenuIcon className="header_menu" />
                <nav className={`header_nav ${menu ? "active" : "deactive"}`}>
                    {user ? (
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Guest</span>
                        <button className="header_optionLineTwo" onClick={handleLogoutLiff}>Sign Out</button>
                    </div>
                    ) : (
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Guest</span>
                        <button className="header_optionLineTwo" onClick={handleLoginLiff}>Sign In</button>
                    </div>
                    )}
                    
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Orders</span>
                    </div>
                    <Link to="/checkout">
                        <div className="header_optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                        </div>
                    </Link>
                    {/* <div className="header_bahasa">
                        <LanguageIcon className="header_bahasaIcon" />
                        <FormControl className="header_dropdown">
                        <Select variant="outlined" value={language} className="header_select" onChange={onBahasaChange}>
                            <MenuItem value="bahasa">Bahasa</MenuItem>
                            <MenuItem value="english">English</MenuItem>
                        </Select>
                    </FormControl>
                    </div> */}
                </nav>
            </div>
        </header>
    )
}

export default Header
