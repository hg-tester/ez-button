import React, { Component } from 'react';
import './patient_button.css'

export default class extends Component {
    render() {
       return (
           <div>
               <button 
                    className={this.props.buttonData.cssClass}
                    onClick={() => this.props.onButtonClick(this.props.buttonIndex)} >
                        <a href={this.props.buttonData.link} target='_blank'>{this.props.buttonData.text}</a>
                </button>
           </div>
       ) 
    }
}