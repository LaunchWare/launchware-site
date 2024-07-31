import React from "react";
import { useBookCallModal } from "../book-call/hooks/useBookCallModal.tsx";

import "./css/custom-development-call-to-action.css";

export const CustomDevelopmentCallToAction = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <div className="custom-development-call-to-action">
      {modal}
      <div className="custom-development-call-to-action__contents">
        <h2 className="custom-development-call-to-action__heading">Ready to get started?</h2>
        <p>
          Ready to get started? Let’s schedule a call and begin your journey to software success.
        </p>

        <button className="exasperation__button button" type="button" onClick={clickHandler}>
          Book Your Launch Call
        </button>
      </div>
    </div>
  );
};
