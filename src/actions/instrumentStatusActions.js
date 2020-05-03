export const toggleButtonStatus = (instrument, sequenceNumber) => {
  return {
    type: "TOGGLE_BUTTON_STATUS",
    payload: {
      sequenceName,
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
