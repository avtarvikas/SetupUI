import { setValues } from "./earningSetupData";

export const getAndSetValues = (name, options) => dispatch => {
  dispatch(setValues(name, options));
};
