# js-808

A React-based Drum Machine / Sequencer, inspired by the TR-808.

## Getting Started

Just to be safe, use NVM to use Node v12. Then run `npm i`, and then when that's done run `npm start`.

Then navigate to http://localhost:3000

## Tech

- Node (v12.16.2) / NPM (v6.4.4)
- React
- Redux
- Webpack
- Babel
- Prettier
- ESLint

## My Notes on How I would finish:

Generally this is a working prototype that meets the spec (including sound!). However, there is a lot of refactoring I'd like to do. Honestly, I had a lot of fun with this, but I also have a very busy few days and am pretty short on time to continue, otherwise I would probably spend more time making this stronger and maybe adding some more features.

### Notes on my Next Steps for Refactoring

- **setInterval:** The setInterval aspect in the player component is rough. React is actually somewhat known for handling setInterval poorly, and this was the hardest part of the assignment to me - not the setInterval itself, but tracking the reference to it so the stop button could stop it effectively. I'd want to go back and refactor that creating a custom hook, using useRef and useEffect, and make sure it returns a function to clear the effect, to avoid any memory leaks.

- **Font:** I'd want to bring in the 808-esque font I poached from a quick Internet search, rather than linking to an external link (of course with all credit left on there).

- **Webpack Setup:** - my setup was fairly minimal and focused on setting up all the dev tooling I needed. I'd ideally go back and work through and set up code splitting, tree shaking, etc. if this were to go into production.

- **BPM:**: currently, you can't update the bpm while playing. I think this could be resolved by essentially clearing the old interval and creating a new setInterval every time the BPM value is changed, but I didn't get time to work that in.

- **Redux:**: In 2020, with useContext and useReducer hooks, Redux probably isn't necessary anymore. I am still getting up to speed on these newer hooks, and since this was a timed assignment I didn't have as much time as I'd like to circle back and set up, so I did it the somewhat "older" way. If this were something going into production, I'd strongly consider abandoning Redux, just to spare having to have the extra library.

- **Mobile:**: Obviously this is not optimized for mobile, but there is a sort of UI component to this, so this is where I might ask the designer for some guidance on how this should look on mobile exactly.

- **Audio:** - there is some weird clipping going on, particularly with the bass, which has a long tail. I actually had to dial through several 808 drum sounds to find one that didn't sound terrible with this; I'd want to go through and clean up the sound aspect of this generally.

### Testing

I didn't get a chance to set up testing. I generally use Nightwatch for E2E tests and Jest for Unit tests. I'd also use `react-testing-library` Here is what I would test:

#### Jest

- Reducers - some basic state mutation unit tests.
- Functions - I'd like to abstract some of the functional logic within components

#### React-Testing-Library

- Render components through the library, and run basic expect statements for the controls, buttons, etc.

#### Nightwatch

- Nightwatch has some nice time-based functionality that would be great at testing the overall play functionality of this application. I could write some nice E2E tests that ensure that the overall play functionality works by having a click event on the play button, pausing for however many milliseconds are appropriate for the tempo, and then asserting that the relevant element has the "flashing" class, and so on.
