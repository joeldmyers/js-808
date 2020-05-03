import React from "react";
import "./SequencerButton.scss";
import { useDispatch } from "react-redux";
import { toggleButtonStatus } from "../../actions/instrumentStatusActions";

const SequencerButton = (props) => {
  const {
    isSelected,
    instrumentName,
    sequenceNumber,
    isActivelyPlaying,
  } = props;

  const dispatch = useDispatch();

  const handleButtonStatusChange = () => {
    dispatch(toggleButtonStatus(instrumentName, sequenceNumber));
  };

  const isFlashing = !isSelected && isActivelyPlaying;

  return (
    <button
      className="dm-sequencer-btn"
      style={{ width: props.buttonWidth }}
      onClick={handleButtonStatusChange}
    >
      {props.isSelected && <span className="dm-sequencer-selected"></span>}
      <span
        className={`dm-sequencer-btn-light ${isSelected ? "selected" : ""} ${
          isFlashing ? "flashing" : ""
        }`}
      >
        &#9673;
      </span>
    </button>
  );
};

export default SequencerButton;
