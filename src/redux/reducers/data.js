import { PUT_DATA } from "../constants";

const initialState = {
  lastName: "",
  firstName: "",
  middleName: "",
  study_work: "",
  dateOfBirth: "",
  email: "",
  other: "",
};

const data = (state = initialState, { type, value, field }) => {
  switch (type) {
    case PUT_DATA:
      return {
        ...state,
        [field]: value,
      };
    default:
      return state;
  }
};

export default data;
