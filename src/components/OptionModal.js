import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Restaurant"
    ariaHideApp={false}
    onRequestClose={props.handleSelectedOption}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3>Your Random Restaurant Is!</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
