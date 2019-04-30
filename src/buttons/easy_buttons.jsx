import React, { Component } from 'react';
import NavButton from './patient_button/patient_button.jsx';
import './easy_buttons.css'

export default class extends Component {
    state = {
        buttons: [
            {
                name: 'Patient', 
                cssClass: 'patient-button',
                nestedButtons: {

                }
            }, 
            {
                name: 'Provider', 
                cssClass: 'provider-button'
            },
            {
                name:'Administrator',
                cssClass: 'admin-button'
            },
            {
                name: 'Healthcare Partners',
                cssClass: 'partner-button'
            }
        ]
    };

    onButtonClick = (buttonIndex) => {

    };

    render() {
       return(
           <div className="buttonContainer">
               {this.state.buttons.map((button, index) => {
                   return <NavButton 
                    key={index} 
                    buttonData={button}/>
               })}
           </div>
       )
    }
}