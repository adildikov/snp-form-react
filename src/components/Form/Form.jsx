import React from "react";
import { fieldsNames } from "../../utils/mockData";
import Input from "../Input/Input";
import InputTextField from "../InputTextField/InputTextField";
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
        <Input
          labelText={fieldsNames.lastName + "*:"}
          id="lastName"
          type="text"
        />
        <Input
          labelText={fieldsNames.firstName + "*:"}
          id="firstName"
          type="text"
        />
        <Input
          labelText={fieldsNames.middleName + ":"}
          id="middleName"
          type="text"
          validation="nonrequired"
        />
        <Input
          labelText={fieldsNames.study_work + "*:"}
          id="study_work"
          type="text"
          validation="studyLength"
        />
        <Input
          labelText={fieldsNames.dateOfBirth + "*:"}
          id="dateOfBirth"
          type="date"
          validation="date"
        />
        <Input
          labelText={fieldsNames.email + "*:"}
          id="email"
          type="email"
          validation="email"
        />
        <InputTextField labelText={fieldsNames.other + ":"} id="other" />
      </div>
      <p className="required_fields">* - required fields</p>
    </div>
  );
}
