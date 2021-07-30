import { createSelector } from "reselect";

const getDataSelector = (state) => {
  return state.data;
};

export const getData = createSelector(getDataSelector, (data) => {
  return data;
});
