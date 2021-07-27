import React from "react";
import Input from "../Input/Input";
import "./style.css";

export default function Form() {
  return (
    <div className="form_wrapper">
      <div className="form_header">
        <p className="header__title">Простая форма</p>
        <p className="header__content">
          Заполните форму ниже. Введите все свои данные максимально полно.
        </p>
        <p className="required_fields">* - обязательные поля</p>
      </div>
      <div className="form_body">
        <Input labelText="Фамилия" id="lastName" type="text" />
        <Input labelText="Имя" id="firstName" type="text" />
        <Input labelText="Отчество" id="middleName" type="text" />
      </div>
    </div>
  );
}
