import React from 'react'
import './Footer.css'
import Instagram from '@material-ui/icons/Instagram'
import Facebook from '@material-ui/icons/Facebook'
import LinkedIn from '@material-ui/icons/LinkedIn'
import { useLiff } from 'react-liff'


function Footer() {
    const { liff } = useLiff();
    
    const openEksternalWindow = () => {
        liff.openWindow({
            url: 'https://marketxjune.herokuapp.com',
            external: true
        })
    }
    
    return (
        <div className="footer">
            {liff.isInClient() && (<div className="footer_eksternalWindow"> <span onClick={openEksternalWindow}> Open Eskternal Window </span> </div>)}
            <div className={`footer_logoSocial ${!liff.isInClient() && 'margin-top'}`}>
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
