// action suite - 3 things

// action creators - function that... creates actions! (return action objects out of it)

// action types - variables that contain the action type strings to save us from spelling errors

// actions - objects that describe to the reducer what event has occured and how it should update the state

export const BUY_FEATURE = 'BUY_FEATURE';
export const buyFeature = feature => { 
    console.log("Buy feature AC", feature);
    return { type: BUY_FEATURE, payload: feature };
};

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = feature => { 
    console.log("Remove feature AC", feature);
    return { type: REMOVE_FEATURE, payload: feature };
};
