import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleButtonStatus } from "../../actions/sequencerRowActions";
import SequencerButton from "../../components/SequencerButton/SequencerButton";
import "./SequencerRow.scss";

const SequencerRow = (props) => {
  const bpm = useSelector((state) => state.controlBar.bpm);
  const dispatch = useDispatch();
  const generateSequencerButtonArray = (numSteps) => {
    let sequencerButtonArray = [];
    for (let i = 1; i <= numSteps; i++) {
      sequencerButtonArray.push(i);
    }
    return sequencerButtonArray;
  };

  const startPlaying = (numSteps) => {};

  return (
    <div className="dm-sequencer-row">
      <div className="dm-sequencer-row-name">{props.instrumentName}</div>
      <div className="dm-sequencer-row-buttons">
        {generateSequencerButtonArray(props.numSteps).map(
          (currentStepNumber, index) => {
            return (
              <SequencerButton
                sequenceNumber={index}
                numSteps={props.numSteps}
                currentStepNumber={currentStepNumber}
                buttonWidth={props.buttonWidth}
                key={`${props.instrumentName}-${index}`}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default SequencerRow;
