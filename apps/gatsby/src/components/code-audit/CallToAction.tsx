import React from "react";
import { useBookCallModal } from "../book-call/hooks/useBookCallModal.tsx";

import "./css/custom-development-call-to-action.css";

export const CallToAction = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <div className="custom-development-call-to-action">
      {modal}
      <div className="custom-development-call-to-action__contents">
        <h2 className="custom-development-call-to-action__heading">Ready to get started?</h2>
        <p>
          Ready to transform your software project? Schedule your code audit with LaunchWare today.
        </p>

        <button className="exasperation__button button" type="button" onClick={clickHandler}>
          Book Your Launch Call
        </button>
      </div>
    </div>
  );
};
