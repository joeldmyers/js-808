import React from "react";
import { useSelector } from "react-redux";
import { toggleButtonStatus } from "../../actions/instrumentStatusActions";
import SequencerButton from "../SequencerButton/SequencerButton";
import "./SequencerRow.scss";

const SequencerRow = (props) => {
  const { instrumentName, index } = props;
  const bpm = useSelector((state) => state.controlBar.bpm);
  const instrumentsStatus = useSelector((state) => state.instrumentStatus);
  const drumMachineIsPlaying = useSelector(
    (state) => state.controlBar.isPlaying
  );
  const currentlyPlayingStep = useSelector(
    (state) => state.controlBar.currentlyPlayingStep
  );

  const currentInstrumentStatus = instrumentsStatus[instrumentName];
  const presentableInstrumentName = instrumentName.replace("-", " ");

  return (
    <div className="dm-sequencer-row">
      <div className="dm-sequencer-row-name">{presentableInstrumentName}</div>
      <div className="dm-sequencer-row-buttons">
        {currentInstrumentStatus.map((selectedStatus, index) => {
          const isSelected = selectedStatus === 1 ? true : false;
          const isActivelyPlaying =
            drumMachineIsPlaying && currentlyPlayingStep === index;
          return (
            <SequencerButton
              sequenceNumber={index}
              numSteps={props.numSteps}
              buttonWidth={props.buttonWidth}
              key={`${props.instrumentName}-${index}`}
              isSelected={isSelected}
              instrumentName={instrumentName}
              isActivelyPlaying={isActivelyPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SequencerRow;
