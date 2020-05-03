import React from "react";
import "./Header.scss";
import BPMInput from "../../containers/BPMInput/BPMInput";

const Header = (props) => {
  const generateSequencerButtonArray = (numSteps) => {
    let sequencerButtonArray = [];
    for (let i = 1; i <= numSteps; i++) {
      sequencerButtonArray.push(i);
    }
    return sequencerButtonArray;
  };

  return (
    <header id="dm-header">
      <div id="dm-header-controls-row">
        <div id="dm-header-left">
          <h1>JS-808</h1>
        </div>
        <div id="dm-header-right">{/* <BPMInput /> */}</div>
        <div id="dm-header-step-numbers"></div>
      </div>
      <div id="dm-header-step-labels">
        {generateSequencerButtonArray(props.numSteps).map(
          (currentStepNumber, index) => (
            <div
              className="dm-header-step-label"
              key={`header-step-${index}`}
              style={{ width: props.buttonWidth }}
            >
              {index}
            </div>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
