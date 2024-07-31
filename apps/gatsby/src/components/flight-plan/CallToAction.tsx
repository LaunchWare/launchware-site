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
          It’s time to let your software ideas take flight. Schedule your launch call with our
          founder today.
        </p>

        <button className="exasperation__button button" type="button" onClick={clickHandler}>
          Let's Launch Together
        </button>
      </div>
    </div>
  );
};
