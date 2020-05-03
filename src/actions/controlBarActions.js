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

export const updatecurrentlyPlayingStep = (currentlyPlayingStep) => {
  return {
    type: "UPDATE_CURRENT_PLAY_STEP",
    payload: {
      currentlyPlayingStep,
    },
  };
};

export const updateIntervalId = (intervalId) => {
  return {
    type: "UPDATE_INTERVAL_ID",
    payload: {
      intervalId,
    },
  };
};
