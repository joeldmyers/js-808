import { sequenceOne } from "../constants/builtInSequences";

const initialState = {
  ...sequenceOne,
};

export default function (state = initialState, action) {
  console.log("old state from sequencer row", state);
  switch (action.type) {
    case "TOGGLE_BUTTON_STATUS":
      const { instrumentName, sequenceNumber } = action.payload;
      const newValue = state[instrumentName][sequenceNumber] === 1 ? 0 : 1;
      const newInstrumentState = [...state[instrumentName]];
      newInstrumentState[sequenceNumber] = newValue;
      console.log("here", instrumentName, sequenceNumber, newInstrumentState);

      return {
        ...state,
        [instrumentName]: newInstrumentState,
      };

    default:
      return state;
  }
}
