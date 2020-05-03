import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBPM,
  startPlaying,
  stopPlaying,
  updateCurrentPlayStep,
} from "../../actions/controlBarActions";
import { resetToBuiltInSequence } from "../../actions/instrumentStatusActions";
import "./ControlBar.scss";

const ControlBar = () => {
  const bpm = useSelector((state) => state.controlBar.bpm);
  const dispatch = useDispatch();

  const handleBPMChange = (e) => {
    dispatch(updateBPM(e.currentTarget.value));
  };

  const handleStartClick = () => {
    dispatch(startPlaying());
    startPlayingSampler();
  };

  let drumMachinePlayInterval;

  const startPlayingSampler = (bpm) => {
    let counter = 1;
    drumMachinePlayInterval = setInterval(() => {
      const currentPlayStep = (counter % 16) + 1;
      dispatch(updateCurrentPlayStep(currentPlayStep));
      step++;
    }, 800);
  };

  const stopPlayingSampler = () => {
    clearInterval(drumMachinePlayInterval);
  };

  const handleStopClick = () => {
    dispatch(stopPlaying());
    stopPlayingSampler();
  };

  const handleUpdateSequence = (e) => {
    dispatch(resetToBuiltInSequence(e.currentTarget.value));
  };

  return (
    <div id="dm-bpm-control-bar">
      <button
        aria-label="Stop Playing"
        className="dm-bpm-switch-btn"
        onClick={handleStopClick}
      >
        &#9641;
      </button>

      <button
        aria-label="Start Playing"
        className="dm-bpm-switch-btn"
        onClick={handleStartClick}
      >
        &#9654;
      </button>

      <input
        type="number"
        name="dm-bpm-selector-input"
        id="dm-bpm-selector-input"
        value={bpm}
        onChange={handleBPMChange}
      />
      <label htmlFor="dm-bpm-selector-input" id="dm-bpm-input-label">
        BPM
      </label>

      <select id="dm-bpm-sequence-select" onChange={handleUpdateSequence}>
        <option defaultValue value="sequence-1">
          Sequence 1
        </option>
        <option value="sequence-2">Sequence 2</option>
        <option value="sequence-3">Sequence 3</option>
      </select>
    </div>
  );
};

export default ControlBar;
