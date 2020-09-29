import { PhoneIphone } from '@material-ui/icons';
import React, { Component } from 'react';
import '../css/Services.css';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

class Services extends Component {
    render() {
        return <div className="services">
            <h3>Services</h3>
            <h2>What we offer?</h2>
            <div className="row">
                <div>
                    <span><PhoneIphoneIcon /></span>
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
            </div>
        </div>
    }
};

export default Services;