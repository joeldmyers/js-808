export const toggleButtonStatus = (instrumentName, sequenceNumber) => {
  return {
    type: "TOGGLE_BUTTON_STATUS",
    payload: {
      instrumentName,
      sequenceNumber,
    },
  };
};

export const resetToBuiltInSequence = (sequenceName) => {
  return {
    type: "RESET_TO_BUILT_IN_SEQUENCE",
    payload: {
      sequenceName,
    },
  };
};
