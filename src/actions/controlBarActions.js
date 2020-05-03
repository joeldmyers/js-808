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
