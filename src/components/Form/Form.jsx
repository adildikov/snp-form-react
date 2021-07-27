import React from "react";
import Input from "../Input/Input";
import InputTextField from "../InputTextField/InputTextField";
import "./style.css";

export default function Form() {
  return (
    <div className="form_wrapper">
      <div className="form_header">
        <p className="header__title">Простая форма</p>
        <p className="header__content">
          Заполните форму ниже. Введите все свои данные максимально полно.
        </p>
      </div>
      <div className="form_body">
        <Input labelText="Фамилия" id="lastName" type="text" />
        <Input labelText="Имя" id="firstName" type="text" />
        <Input labelText="Отчество" id="middleName" type="text" />
        <Input labelText="Место учебы/работы" id="study_work" type="text" />
        <Input labelText="Дата рождения" id="dateOfBirth" type="date" />
        <Input labelText="Почта" id="email" type="email" />
        <InputTextField labelText="Другое" id="other" />
      </div>
      <p className="required_fields">* - обязательные поля</p>
    </div>
  );
}
