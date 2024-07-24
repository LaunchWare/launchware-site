import React, { MouseEventHandler, useEffect } from "react";

import { useModal } from "@launchware/replicator";

import { BookCallModal } from "../BookCallModal";

import "@launchware/replicator/dist/css/Modal/modal.css";
import "../css/book-call-modal.css";

export const useBookCallModal = () => {
  const {
    modal,
    isVisible: isModalVisible,
    setVisibility: setModalVisibility,
  } = useModal(() => <BookCallModal enabled={isModalVisible} />, {
    scrollToTop: false,
    size: "large",
  });

  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.data.event && e.data.event.indexOf("calendly")) {
        setModalVisibility(false);
      }
    });
  }, [setModalVisibility]);

  const clickHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    if (setModalVisibility) {
      setModalVisibility(true);
    }
  };

  return { clickHandler, isModalVisible, modal };
};
