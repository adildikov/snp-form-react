import React from "react";
import { fieldsNames } from "../../utils/mockData";
import "./style.css";

export default React.memo(function Display({ data, onClickRemoveData }) {
  return (
    <div className="display_wrapper">
      <div className="display_header">
        <p className="header__title">Your Profile</p>
      </div>
      <div className="display_body">
        <div className="info_block">
          <span>{fieldsNames.lastName}</span>
          <p className="last_name">{data.lastName}</p>
        </div>
        <div className="info_block">
          <span>{fieldsNames.firstName}</span>
          <p className="first_name">{data.firstName}</p>
        </div>
        <div className="info_block">
          <span>{fieldsNames.middleName}</span>
          <p className="middle_name">{data.middleName}</p>
        </div>
        <div className="info_block study">
          <span>{fieldsNames.study_work}</span>
          <p className="study_work">{data.study_work}</p>
        </div>
        <div className="info_block">
          <span>{fieldsNames.dateOfBirth}</span>
          <p className="dateOfBirth">{data.dateOfBirth}</p>
        </div>
        <div className="info_block">
          <span>{fieldsNames.email}</span>
          <p className="email">{data.email}</p>
        </div>
        <div className="info_block other">
          <span>{fieldsNames.other}</span>
          <p className="other">{data.other}</p>
        </div>
        <button onClick={onClickRemoveData} className="clear_btn">
          Clear All
        </button>
      </div>
    </div>
  );
});
