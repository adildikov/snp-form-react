import { PUT_DATA } from "../constants";

export const putData = (field, value) => ({
  type: PUT_DATA,
  field,
  value,
});
