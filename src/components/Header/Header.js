import React from "react";
import "./Header.scss";
import ControlBar from "../../containers/ControlBar/ControlBar";

const Header = (props) => {
  const stepHeader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <header id="dm-header">
      <div id="dm-header-controls-row">
        <div id="dm-header-left">
          <h1>JS-808</h1>
        </div>
        <div id="dm-header-right">
          <ControlBar />
        </div>
        <div id="dm-header-step-numbers"></div>
      </div>
      <div id="dm-header-step-labels">
        {stepHeader.map((stepNumber) => (
          <div
            className="dm-header-step-label"
            key={`header-step-${stepNumber}`}
            style={{ width: props.buttonWidth }}
          >
            {stepNumber}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
