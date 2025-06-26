import React from "react";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Success</h3>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <p>Employee Created Successfully!</p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onConfirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
