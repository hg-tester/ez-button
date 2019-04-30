import React, { Component } from 'react';
import NavButton from './patient_button/patient_button.jsx';
import './easy_buttons.css'

export default class extends Component {
    state = {
        currentButton: null,
        buttons: [
            {
                text: 'Patient', 
                cssClass: 'patient-button',
                nestedButtons: [
                    {
                        text: 'Find my Provider',
                        cssClass: 'patient-button',
                        link: null
                    },
                    {
                        text: 'Healthgrades Patient Account',
                        cssClass: 'provider-button',
                        link: null
                    },
                    {
                        text: 'Patient Experience Survey',
                        cssClass: 'admin-button',
                        link: 'https://www.healthgrades.com/content/faqs#reviews'
                    }, 
                    {
                        text: 'Email and Notifications from Healthgrades',
                        cssClass: 'partner-button',
                        link: null
                    }
                ]
            }, 
            {
                text: 'Provider', 
                cssClass: 'provider-button'
            },
            {
                text:'Administrator',
                cssClass: 'admin-button'
            },
            {
                text: 'Healthcare Partners',
                cssClass: 'partner-button'
            }
        ]
    };

    onButtonClick = (buttonIndex) => {  
        if (this.state.currentButton === 'Patient') {
            setTimeout(() => {
                this.setState({currentButton: null})
            }, 1000);
        }
        else {
            this.setState({currentButton: this.state.buttons[buttonIndex].text})
        }
    };
    
    render() {
        let buttonList;
        if (this.state.currentButton === null) {
            buttonList = this.state.buttons;
        }
        else if (this.state.currentButton === 'Patient') {
            buttonList = this.state.buttons[0].nestedButtons;
        }
        else if (this.state.currentButton === 'Provider') {
            buttonList = this.state.buttons[1].nestedButtons;
        }
        else if (this.state.currentButton === 'Administrator') {
            buttonList = this.state.buttons[2].nestedButtons;
        }
        else if (this.state.currentButton === 'Healthcare Partners') {
            buttonList = this.state.buttons[3].nestedButtons;
        }
        return(
           <div className="buttonContainer">
               {buttonList.map((button, index) => {
                   return <NavButton 
                    key={index} 
                    buttonIndex={index}
                    buttonData={button}
                    onButtonClick={this.onButtonClick}/>
               })}
           </div>
       )
    }
}