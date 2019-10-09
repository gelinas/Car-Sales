// action suite - 3 things

// action creators - function that... creates actions! (return action objects out of it)

// action types - variables that contain the action type strings to save us from spelling errors

// actions - objects that describe to the reducer what event has occured and how it should update the state

export const BUY_FEATURE = 'BUY_FEATURE';
export const buyFeature = () => ({ type: TOGGLE_EDIT });

export const SET_TITLE = 'SET_TITLE';
export const setTitle = title => {
  console.log(`setTitle AC, ${title}`);
  return { type: SET_TITLE, payload: title };
};
