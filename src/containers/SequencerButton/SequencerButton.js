import React from "react";
import "./SequencerButton.scss";
import { useDispatch } from "react-redux";
import { toggleButtonStatus } from "../../actions/instrumentStatusActions";
import { sequenceOne } from "../../constants/builtInSequences";

const SequencerButton = (props) => {
  const { active, instrumentName, sequenceNumber } = props;

  const dispatch = useDispatch();

  const handleButtonStatusChange = () => {
    dispatch(toggleButtonStatus(instrumentName, sequenceNumber));
  };

  return (
    <button
      className="dm-sequencer-btn"
      style={{ width: props.buttonWidth }}
      onClick={handleButtonStatusChange}
    >
      {props.selected && <span className="dm-sequencer-selected"></span>}
      <span
        className={`dm-sequencer-btn-light ${props.active ? "active" : ""}`}
      >
        &#9673;
      </span>
    </button>
  );
};

export default SequencerButton;
