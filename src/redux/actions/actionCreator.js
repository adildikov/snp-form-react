import { PUT_DATA, REMOVE_DATA } from "../constants";

export const putData = (field, value) => ({
  type: PUT_DATA,
  field,
  value,
});

export const removeData = () => ({
  type: REMOVE_DATA,
});
