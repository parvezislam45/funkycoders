import React, { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 300); // Adjust the animation duration as needed
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`fixed inset-0 bg-black opacity-50 transition-opacity ${
              isAnimating ? "duration-300" : ""
            }`}
            onClick={closeModal}
          ></div>
          <div
            className={`bg-white p-4 rounded-lg shadow-lg transition-all transform ${
              isAnimating ? "duration-300" : ""
            }`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
