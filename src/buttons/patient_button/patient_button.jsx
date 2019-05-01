import React, { Component } from 'react';
import './patient_button.css'

export default class extends Component {
    render() {
       return (
           <div>
               <a href={this.props.buttonData.link}><button 
                    className={this.props.buttonData.cssClass}
                    onClick={() => this.props.onButtonClick(this.props.buttonIndex)} >
                        {this.props.buttonData.text}
                </button></a>
           </div>
       ) 
    }
}