import { PUT_DATA, REMOVE_DATA } from "../constants";
import { load } from "redux-localstorage-simple";

let initialState = load({ namespace: "data" });
if (
  initialState === undefined ||
  initialState === null ||
  initialState === {} ||
  !initialState.data
) {
  initialState = {
    data: {
      lastName: "",
      firstName: "",
      middleName: "",
      study_work: "",
      dateOfBirth: "",
      email: "",
      other: "",
    },
  };
}
const data = (state = initialState.data, { type, value, field }) => {
  switch (type) {
    case PUT_DATA:
      return {
        ...state,
        [field]: value,
      };
    case REMOVE_DATA:
      return {
        lastName: "",
        firstName: "",
        middleName: "",
        study_work: "",
        dateOfBirth: "",
        email: "",
        other: "",
      };
    default:
      return state;
  }
};

export default data;
