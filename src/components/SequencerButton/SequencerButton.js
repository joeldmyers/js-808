import React from "react";
import "./SequencerButton.scss";

const SequencerButton = (props) => {
  return (
    <button className="dm-sequencer-btn" style={{ width: props.buttonWidth }}>
      {props.selected && <span className="dm-sequencer-selected"></span>}
    </button>
  );
};

export default SequencerButton;
