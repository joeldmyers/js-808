import React from "react";
import Counter from "./Counter/Counter";
import Header from "../components/Header/Header";
import SequencerRow from "./SequencerRow/SequencerRow";
import "../styles/fonts.scss";
import "./App.scss";
import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  const numSteps = 16;
  const instruments = ["kick", "snare", "open-hat", "closed-hat"];
  const buttonWidth = `calc(${100 / numSteps}% - 12px)`;

  return (
    <Provider store={store}>
      <main id="tr-drum-machine">
        <Header numSteps={numSteps} buttonWidth={buttonWidth} />
        {instruments.map((instrumentName, index) => {
          return (
            <SequencerRow
              instrumentName={instrumentName}
              numSteps={numSteps}
              buttonWidth={buttonWidth}
              key={`${instrumentName}-${index}`}
            />
          );
        })}
      </main>
    </Provider>
  );
};

export default App;
