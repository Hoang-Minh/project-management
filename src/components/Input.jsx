import React from "react";

export default function Input({ label, isTextArea, ...props }) {
  return (
    <p>
      <lable>{label}</lable>
      {isTextArea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
