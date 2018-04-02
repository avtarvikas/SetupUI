export const SET_EARNING_DATA = "SET_EARNING_DATA";

const earningSetupData = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_EARNING_DATA:
      const { name, options } = payload;
      return {
        ...state,
        [name]: options
      };
    default:
      return state;
  }
};

export default earningSetupData;

/** Action Creators */
export const setValues = (name, options) => ({
  type: SET_EARNING_DATA,
  payload: { name, options }
});
