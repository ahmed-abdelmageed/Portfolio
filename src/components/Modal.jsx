import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-[95%] w-[800px] sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] relative">
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
