import React, { Component } from 'react';
import './patient_button.css'

export default class extends Component {
    state = {};
    render() {
       return (
           <div>
               <button 
                    className={this.props.buttonData.cssClass}>
                        {this.props.buttonData.name}
                </button>
           </div>
       ) 
    }
}