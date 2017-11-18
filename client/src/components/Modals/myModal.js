import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import './custom-animation.css';
import Login from "../loginBtn";
import {Link} from "react-router-dom";

class MyModal extends Component {
  state = {
    open:false,
  };
  onOpenModal = () => {
    this.setState({ open:true });
  };
  onCloseModal = () => {
    this.setState({open:false });
  };
  render() {
    const { open }  = this.state;
    return( 
      <div>
        <button className="btn btn-primary" onClick={this.onOpenModal}>Open</button>
        <Modal open={open} onClose={this.onCloseModal}
         little
         classNames={{
           transitionEnter: 'transition-enter',
           transitionEnterActive: 'transition-enter-active',
           transitionExit: 'transition-exit-active',
           transitionExitActive: 'transition-exit-active',
         }}
          animationDuration={1000}>
          <h2>Pokemon Guess Who</h2>
          <p className="modal-btns login-btn"><Login /></p>
          <p className="modal-btns play-btn"><Link to="/game"><button className="btn button-primary play-btn">Play</button></Link></p> 
        </Modal>
      </div>
    );
  }
}
export default MyModal;