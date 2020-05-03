const initialState = {
  bpm: 128,
  isPlaying: false,
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
      };

    default:
      return state;
  }
}
