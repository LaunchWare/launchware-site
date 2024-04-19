import React, { MouseEventHandler, useEffect, useRef, useState } from "react";

import { useModal } from "@launchware/replicator";
import "@launchware/replicator/dist/css/Modal/modal.css";

import { companyContactInformation } from "../../../configuration/companyContactInformation";
import { BookCallModal } from "../BookCallModal";
import "../css/book-call-modal.css";

export const useBookCallModal = () => {
  const {
    modal,
    isVisible: isModalVisible,
    setVisibility: setModalVisibility,
  } = useModal(() => <BookCallModal enabled={isModalVisible} />, {
    scrollToTop: false,
    size: "large"
  });


  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.data.event && e.data.event.indexOf("calendly")) {
        setModalVisibility(false);
      }
    });
  }, []);

  const clickHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    if (setModalVisibility) {
      setModalVisibility(true);
    }
  };

  return { clickHandler, isModalVisible, modal };
};
