export const toggleButtonStatus = (instrumentName, sequenceNumber) => {
  return {
    type: "TOGGLE_BUTTON_STATUS",
    payload: {
      instrumentName,
      sequenceNumber,
    },
  };
};

export const resetToBuiltInSequence = (sequenceNumber) => {
  return {
    type: "RESET_TO_SEQUENCE",
    payload: {
      sequenceName,
    },
  };
};
