import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBPM,
  startPlaying,
  stopPlaying,
  updatecurrentlyPlayingStep,
  updateIntervalId,
} from "../../actions/controlBarActions";
import { resetToBuiltInSequence } from "../../actions/instrumentStatusActions";
import "./ControlBar.scss";

const ControlBar = () => {
  const bpm = useSelector((state) => state.controlBar.bpm);
  const currentlyPlayingStep = useSelector(
    (state) => state.controlBar.currentlyPlayingStep
  );
  const intervalId = useSelector((state) => state.controlBar.intervalId);
  const dispatch = useDispatch();

  const handleBPMChange = (e) => {
    dispatch(updateBPM(e.currentTarget.value));
  };

  const handleUpdateSequence = (e) => {
    dispatch(resetToBuiltInSequence(e.currentTarget.value));
  };

  const handleStartClick = () => {
    dispatch(startPlaying());
    const intervalId = startSamplerInterval(bpm);
    dispatch(updateIntervalId(intervalId));
  };

  const handleStopClick = () => {
    dispatch(stopPlaying());
    clearInterval(intervalId);
  };

  const startSamplerInterval = (bpm) => {
    let counter = 1;
    const intervalId = setInterval(() => {
      const currentlyPlayingStep = (counter % 16) + 1;
      dispatch(updatecurrentlyPlayingStep(currentlyPlayingStep));
      counter++;
    }, 800);
    return intervalId;
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
