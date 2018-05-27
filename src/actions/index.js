import { setValues } from "./reducer";

export const getAndSetValues = (name, options) => dispatch => {
  dispatch(setValues(name, options));
};
