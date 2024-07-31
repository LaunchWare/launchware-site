import React from "react";
import { useBookCallModal } from "../book-call/hooks/useBookCallModal.tsx";

import "./css/custom-development-call-to-action.css";

export const CallToAction = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <div className="custom-development-call-to-action">
      {modal}
      <div className="custom-development-call-to-action__contents">
        <p>
          Take the first step towards stress-free, successful development projects. Schedule your
          Launch Call today.
        </p>

        <button className="exasperation__button button" type="button" onClick={clickHandler}>
          Schedule Your Launch Call
        </button>
      </div>
    </div>
  );
};
