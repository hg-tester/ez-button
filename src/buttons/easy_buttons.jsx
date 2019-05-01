import React, { Component } from 'react';
import NavButton from './patient_button/patient_button.jsx';
import './easy_buttons.css'

export default class extends Component {
    state = {
        currentButton: null,
        link: 'https://helpcenter.healthgrades.com/help/edit-your-provider-profile',
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
                        link: null,
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
                cssClass: 'provider-button',
                nestedButtons: [
                    {
                        text: 'Why/How do I have a profile?',
                        cssClass: 'patient-button',
                        link: null
                    },
                    {
                        text: 'Update my profile',
                        cssClass: 'provider-button',
                        link: null
                    },
                    {
                        text: 'Account Problems',
                        cssClass: 'admin-button',
                        nestedButtons: [
                            {
                                text: 'Registration or Login Issues',
                                cssClass: 'patient-button',
                            },
                            {
                                text: 'My changes are not showing',
                                cssClass: 'provider-button',
                            }
                        ]
                    }, 
                    {
                        text: 'PES',
                        cssClass: 'partner-button',
                        link: null
                    }
                ]
            },
            {
                text:'Administrator',
                cssClass: 'admin-button',
                nestedButtons: [
                    {
                        text: 'Create account to manage my providers',
                        cssClass: 'patient-button',
                        link: null
                    },
                    {
                        text: 'Account problems',
                        cssClass: 'provider-button',
                        link: null
                    },
                    {
                        text: 'PES',
                        cssClass: 'admin-button',
                        link: null
                    }
                ]
            },
            {
                text: 'Healthcare Partners',
                cssClass: 'partner-button',
                link: 'https://hs.healthgrades.com/hospitals/'
            }
        ]
    };

    genPESHTML = () => {
        return (
            <div><a name="reviews"></a><h2 class=" cms-heading-h2"><u>Doctor Reviews</u></h2><br/><h3 class="cms-heading-h3">How do I leave a review for a doctor?</h3><p dir="ltr">To leave a review for a doctor, you first need to find their profile on our site at <a href="http://www.healthgrades.com" id="specialLink">www.healthgrades.com</a>. On their profile, click the option under their name that says "LEAVE A REVIEW", and you should be directed to a pop-up form to fill out your review.</p><br/><h3 class="cms-heading-h3">How do I remove a review I submitted?</h3><p dir="ltr">The best way to remove a review is to contact our customer service team directly through our online <a href="https://www.healthgrades.com/about/contact-us" id="specialLink">form</a>. Alternatively if you are interested in replacing your review, submitting a new review will override the previous one.</p><br/><h3 class="cms-heading-h3">How do I edit a review I submitted?</h3><p dir="ltr">We're working on adding the ability for you to edit your review, but don't have it out yet. For now, the best way to edit a review is to submit a new review using the same email, and that new review will replace the previous one.</p><br/><h3 class="cms-heading-h3">Does Healthgrades monitor which reviews get published?</h3><p dir="ltr">We do look at the reviews to make sure they comply with our guidelines. We're committed to maintaining the quality and integrity of our reviews, so each review does go through a confirmation and auditing process. All content, both from patients and providers, is audited for inappropriate content prior to being published.</p><br/><h3 class="cms-heading-h3">Will my review be posted anonymously?</h3><p dir="ltr">When you leave a review, you have the option to include your name, city and state. If you choose not to fill out this information, your review will remain anonymous. Although we request your email address or phone number to send you confirmation of your review, this information will not be made public.</p><br/><h3 class="cms-heading-h3">Why didn't my review get posted?</h3><p dir="ltr">It's possible that your review is still going through our confirmation process. If it hasn't been posted in five days, it's possible it wasn't published because it violated our guidelines. You can review those <a href="/content/community-review-guidelines" id="specialLink">guidelines here</a>. Any reviews that include name-calling, personal attacks, racist comments, threats or obscenities will not be posted on our site.</p><br/><h3 class="cms-heading-h3">Do doctors pay for good reviews?</h3><p dir="ltr">No, doctors cannot pay for good reviews.</p><br/><h3 class="cms-heading-h3">Do doctors pay to have bad reviews removed?</h3><p dir="ltr">No, doctors cannot pay to have negative reviews removed from our site.</p><br/><h3 class="cms-heading-h3">Can I leave more than one review?</h3><p dir="ltr">We don't allow users to submit multiple reviews for one provider. Each time a user submits a new review for the same provider, the new review will appear and the older ones will be removed. You can, however, submit more than one review if you're submitting for more than one provider.</p><br/><h3 class="cms-heading-h3">Why did Healthgrades post my first and last name on my review?</h3><p dir="ltr">When you leave a review, you have the option to include your name, city and state. If you choose not to fill out this information, your review will remain anonymous.</p><br/><h3 class="cms-heading-h3">Are there rules on what I can and cannot say in my review?</h3><p dir="ltr">Yes, and those are listed within our <a href="/content/community-review-guidelines" id="specialLink">community guidelines</a>. Any reviews that include name-calling, personal attacks, racist comments, threats or obscenities will not be posted on our site.</p></div>);
    }

    onButtonClick = (buttonIndex) => {  
        if (this.state.currentButton === 'Patient') {
           this.setState({currentButton: 'PES FAQ'});
        }
        else if (this.state.currentButton === 'Provider') {
            window.location = this.state.link;
        }
        else {
            this.setState({currentButton: this.state.buttons[buttonIndex].text});
        }
    };
    
    render() {
        let buttonList;
        let title;
        let subtext;
        
        if (this.state.currentButton === 'Patient' || this.state.currentButton === 'PES FAQ') {
            buttonList = this.state.buttons[0].nestedButtons;
            title = "Patient Help Center";
            subtext = "These are some helpful areas for Patient services on Healthgrades.com"
        }
        else if (this.state.currentButton === 'Provider' || this.state.currentButton === 'Update Profile') {
            buttonList = this.state.buttons[1].nestedButtons;
            title = "Provider Help Center";
            subtext = "These are some helpful areas for Provider services on Healthgrades.com"
        }
        else if (this.state.currentButton === 'Administrator') {
            buttonList = this.state.buttons[2].nestedButtons;
        }
        else if (this.state.currentButton === 'Account Problems') {
            buttonList = this.state.buttons[1].nestedButtons[2].nestedButtons;
            title = "Patient Help Center";
            subtext = "These are some helpful areas for Patient services on Healthgrades.com"
        }
        else {
            buttonList = this.state.buttons;
            title = "Welcome to Healthgrades Help Center";
            subtext = "Which role best describes the help you are looking for?"
        }

        return(
            <div>
                <div>
                    <h1>{title}</h1>
                    <h3>{subtext}</h3>
                </div>
                <div className="buttonContainer">
                    {buttonList.map((button, index) => {
                        return <NavButton 
                            key={index} 
                            buttonIndex={index}
                            buttonData={button}
                            onButtonClick={this.onButtonClick}/>
                    })}
                </div>
                    {(this.state.currentButton === 'PES FAQ' && <div><div className="faq">{this.genPESHTML()}</div><a href='https://www.healthgrades.com/about/contact-us'><button className='contact'>Didn't Find What You Need? Contact Us!</button></a></div>)}
            </div>
        
       )
    }
}