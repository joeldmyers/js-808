const initialState = {
  bpm: 128,
  isPlaying: false,
  currentlyPlayingStep: 0,
  intervalId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_BPM":
      const { newBPM } = action.payload;
      return {
        ...state,
        bpm: newBPM,
      };
    case "START_PLAYING":
      return {
        ...state,
        isPlaying: true,
      };

    case "STOP_PLAYING":
      return {
        ...state,
        isPlaying: false,
        currentlyPlayingStep: 1,
        intervalId: null,
      };
    case "UPDATE_CURRENT_PLAY_STEP":
      const { currentlyPlayingStep } = action.payload;
      return {
        ...state,
        currentlyPlayingStep,
      };
    case "UPDATE_INTERVAL_ID":
      const { intervalId } = action.payload;
      return {
        ...state,
        intervalId,
      };

    default:
      return state;
  }
}
