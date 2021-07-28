import { errors } from "./mockData";

const emailRegEx =
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validators = {
  email: {
    isValid: (value) => value.length && emailRegEx.test(value),
    error: errors.email,
  },
  required: {
    isValid: (value) => value.length,
    error: errors.required,
  },
  maxLength: {
    isValid: (value) => value.length < 25,
    error: errors.maxLength,
  },
  studyLength: {
    isValid: (value) => value.length < 45,
    error: errors.studyLength,
  },
};
