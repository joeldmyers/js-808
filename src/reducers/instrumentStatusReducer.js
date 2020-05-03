import {
  sequenceOne,
  sequenceTwo,
  sequenceThree,
} from "../constants/builtInSequences";

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

      return {
        ...state,
        [instrumentName]: newInstrumentState,
      };

    case "RESET_TO_BUILT_IN_SEQUENCE":
      const { sequenceName } = action.payload;

      if (sequenceName === "sequence-1") {
        return {
          ...sequenceOne,
        };
      } else if (sequenceName === "sequence-2") {
        return {
          ...sequenceTwo,
        };
      } else if (sequenceName === "sequence-3") {
        return {
          ...sequenceThree,
        };
      } else {
        return { ...state };
      }

    default:
      return state;
  }
}
