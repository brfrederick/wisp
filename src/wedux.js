// some sweet state
// expose that sultry state
export const VIEW_STATES = {
  RECORDING: 'RECORDING',
  PREVIEW: 'PREVIEW',
  LISTENING: 'LISTENING',
  MENU: 'MENU',
  SETTINGS: 'SETTINGS',
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  ONBOARDING: 'ONBOARDING',
};

export const BUTTON_STATES = {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE'
}

const getInitialSate = () => ({
  view: VIEW_STATES.LOADING,
  button: BUTTON_STATES.INACTIVE
});
export let state = getInitialSate();

// We have one listener
let stateListener;
export const connect = listener => stateListener = listener;

export const updateState = newState => {
  state = Object.assign(state, newState);

  stateListener(state);
};
