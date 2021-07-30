import React from "react";
import { fieldsNames } from "../../utils/mockData";
import InputContainer from "../Input/InputContainer";
import InputTextFieldContainer from "../InputTextField/TextFieldContainer";
import "./style.css";

export default function Form() {
  return (
    <div className="form_wrapper">
      <div className="form_header">
        <p className="header__title">Simple Form</p>
        <p className="header__content">
          Fill out the form below. Enter all your details as completely as
          possible.
        </p>
      </div>
      <div className="form_body">
        <InputContainer
          labelText={fieldsNames.lastName + "*:"}
          id="lastName"
          type="text"
        />
        <InputContainer
          labelText={fieldsNames.firstName + "*:"}
          id="firstName"
          type="text"
        />
        <InputContainer
          labelText={fieldsNames.middleName + ":"}
          id="middleName"
          type="text"
          validation="nonrequired"
        />
        <InputContainer
          labelText={fieldsNames.study_work + "*:"}
          id="study_work"
          type="text"
          validation="studyLength"
        />
        <InputContainer
          labelText={fieldsNames.dateOfBirth + "*:"}
          id="dateOfBirth"
          type="date"
          validation="date"
        />
        <InputContainer
          labelText={fieldsNames.email + "*:"}
          id="email"
          type="email"
          validation="email"
        />
        <InputTextFieldContainer
          labelText={fieldsNames.other + ":"}
          id="other"
        />
      </div>
      <p className="required_fields">* - required fields</p>
    </div>
  );
}
