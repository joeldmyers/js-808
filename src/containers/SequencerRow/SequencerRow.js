import React from "react";
import { useSelector } from "react-redux";
import { toggleButtonStatus } from "../../actions/instrumentStatusActions";
import SequencerButton from "../../components/SequencerButton/SequencerButton";
import "./SequencerRow.scss";

const SequencerRow = (props) => {
  const { instrumentName } = props;
  const bpm = useSelector((state) => state.controlBar.bpm);
  const instrumentsStatus = useSelector((state) => state.instrumentStatus);
  const currentInstrumentStatus = instrumentsStatus[instrumentName];
  const presentableInstrumentName = instrumentName.replace("-", " ");

  return (
    <div className="dm-sequencer-row">
      <div className="dm-sequencer-row-name">{presentableInstrumentName}</div>
      <div className="dm-sequencer-row-buttons">
        {currentInstrumentStatus.map((activeStatus, index) => {
          const active = activeStatus === 1 ? true : false;
          return (
            <SequencerButton
              sequenceNumber={index}
              numSteps={props.numSteps}
              buttonWidth={props.buttonWidth}
              key={`${props.instrumentName}-${index}`}
              active={active}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SequencerRow;
