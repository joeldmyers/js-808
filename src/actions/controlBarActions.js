export const updateBPM = (newBPM) => {
  return {
    type: "UPDATE_BPM",
    payload: {
      newBPM,
    },
  };
};

export const startPlaying = () => {
  return {
    type: "START_PLAYING",
  };
};

export const stopPlaying = () => {
  return {
    type: "STOP_PLAYING",
  };
};

export const updateCurrentSequence = (sequenceName) => {
  return {
    type: "RESET_TO_SEQUENCE",
    payload: {
      sequenceName,
    },
  };
};
