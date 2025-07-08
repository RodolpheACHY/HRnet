import React from "react";


const Modal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Success",
  message = "Employee Created Successfully!",
  confirmText = "OK",
  showCloseButton = true,
  overlayClassName = "",
  contentClassName = ""
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className={`modal-overlay ${overlayClassName}`} 
      onClick={onClose}
    >
      <div 
        className={`modal-content ${contentClassName}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3>{title}</h3>
          {showCloseButton && (
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
          )}
        </div>

        <div className="modal-body">
          <p>{message}</p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
