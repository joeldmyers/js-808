import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBPM } from "../../actions/controlBarActions";
import "./BPMInput.scss";

const BPMInput = () => {
  const bpm = useSelector((state) => state.controlBar.bpm);
  const dispatch = useDispatch();

  const handleBPMChange = (e) => {
    let newBPM = e.currentTarget.value;
    dispatch(updateBPM(newBPM));
  };
  return (
    <div id="dm-bpm-selector">
      <input
        type="number"
        name="dm-bpm-selector-input"
        id="dm-bpm-selector-input"
        value={bpm}
        onChange={handleBPMChange}
      />
      <label htmlFor="dm-bpm-selector-input">BPM</label>
    </div>
  );
};

export default BPMInput;
