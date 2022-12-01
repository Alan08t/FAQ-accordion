import React from "react";

import iconArrowDown from "../images/icon-arrow-down.svg";

export const Accordion = ({ id, title, content }) => {
  return (
    <div className="flex p-3 w-full flex-col border-b-2">
      <input type="checkbox" id={id} className="hidden" />
      <label className="flex justify-between py-3 text-very-dark-grayish-blue" for={id}>
        {title}
        <img className="flex w-4 h-4 pt-1" src={iconArrowDown} />
      </label>
      <div className="content hidden">
        <p>{content}</p>
      </div>
    </div>
  );
};
