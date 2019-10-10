
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
