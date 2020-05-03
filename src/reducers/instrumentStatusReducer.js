import { sequenceOne } from "../constants/builtInSequences";

const initialState = {
  ...sequenceOne,
};

export default function (state = initialState, action) {
  console.log("old state from sequencer row", state);
  switch (action.type) {
    case "TOGGLE_BUTTON_STATE":
      const { instrumentName, buttonNumber } = action.payload;
      const buttonIndex = buttonNumber - 1;
      const newValue = state[instrumentName][buttonIndex] === 1 ? 0 : 1;
      const newInstrumentState = [...state[instrumentName]];
      newInstrumentState[buttonIndex] = newValue;

      return {
        ...state,
        activeInstruments,
        [instrumentName]: newInstrumentState,
      };

    default:
      return state;
  }
}
