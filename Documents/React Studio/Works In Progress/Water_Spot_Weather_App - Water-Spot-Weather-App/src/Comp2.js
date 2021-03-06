import React, { Component } from 'react';
import './App.css';
import img_state0_elUser from './images/Comp2_state0_elUser.png';
import img_state1_elUserHeartFull from './images/Comp2_state1_elUserHeartFull.png';


export default class Comp2 extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elUser = {
        backgroundImage: 'url('+img_state0_elUser+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Comp2" style={baseStyle}>
        <div className="foreground">
          <div className='state0_elUser' style={style_state0_elUser} />
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state1_elUserHeartFull = {
        backgroundImage: 'url('+img_state1_elUserHeartFull+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Comp2" style={baseStyle}>
        <div className="foreground">
          <div className='state1_elUserHeartFull' style={style_state1_elUserHeartFull} />
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
