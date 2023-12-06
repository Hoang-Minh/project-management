import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";

const Modal = ({ children, buttonCaption }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form>
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default forwardRef(Modal);
