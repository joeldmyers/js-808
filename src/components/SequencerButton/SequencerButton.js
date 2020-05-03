import React from "react";
import "./SequencerButton.scss";

const SequencerButton = (props) => {
  const { active } = props;

  return (
    <button className="dm-sequencer-btn" style={{ width: props.buttonWidth }}>
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
