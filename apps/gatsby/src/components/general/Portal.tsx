import { useEffect, useMemo } from "react";

import ReactDOM from "react-dom";

// Use a ternary operator to make sure that the document object is defined
// const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

const Portal = ({ children }) => {
  const el = useMemo(() => {
    if (document) {
      return document.createElement("div");
    }
    return null;
  }, []);

  useEffect(() => {
    const portalRoot = typeof document !== `undefined` ? document.getElementById("portal") : null;

    if (el) {
      portalRoot?.appendChild(el);
      return () => {
        portalRoot?.removeChild(el);
      };
    }
  }, [el]);

  if (el) {
    return ReactDOM.createPortal(children, el);
  }
  return null;
};

export default Portal;
