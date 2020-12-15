import React from 'react'
import './Footer.css'
import Instagram from '@material-ui/icons/Instagram'
import Facebook from '@material-ui/icons/Facebook'
import LinkedIn from '@material-ui/icons/LinkedIn'


function Footer() {
    return (
        <div className="footer">
            <div className="footer_logoSocial">
                <Instagram className="logo"/>
                <Facebook className="logo"/>
                <LinkedIn className="logo"/>
            </div>
            <div className="footer_copyright">
                <span>© Jun Snacks 2020</span>
            </div>
        </div>
    )
}

export default Footer
