import React from 'react';
import logo from '../../../assets/logo.svg'

function CompanyLogo() {
    return (
        <div className="Header-item d-none d-lg-flex">
            <a className="Header-link" href="http://jyoticards.com/">
                <img src={logo} height="32" alt="SB"/>
            </a>
        </div>
    );
}

export default CompanyLogo;
