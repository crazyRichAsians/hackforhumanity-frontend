export const updatePrediction = prediction => ({
  type: "UPDATE_PREDICTION",
  payload: prediction
});

export const updateImageUrl = url => ({
  type: "UPDATE_URL",
  payload: url
});
