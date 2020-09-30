import React, { Component } from 'react';
import '../css/Services.css';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CreateIcon from '@material-ui/icons/Create';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import HelpIcon from '@material-ui/icons/Help';

class Services extends Component {
    render() {
        return <div className="services">
            <h3>Services</h3>
            <h2>What we offer?</h2>
            <div className="row">
                <div>
                    <span><PhoneAndroidIcon /></span>
                    <h4>Responsive</h4>
                    <p>Looks great on any screen size</p>
                </div>
                <div>
                    <span><CreateIcon /></span>
                    <h4>Redesigned</h4>
                    <p>Freshly redesigned for Bootstrap</p>
                </div>
                <div>
                    <span><ThumbUpIcon /></span>
                    <h4>Favourited</h4>
                    <p>Millions of users Start Bootstrap!</p>
                </div>
                <div>
                    <span><HelpIcon /></span>
                    <h4>Question</h4>
                    <p>I mushtache you a question...</p>
                </div>
            </div>
        </div>
    }
};

export default Services;