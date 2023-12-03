import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const Modal = ({ title, children, isOpen, onClose }) => {
  const handleContentClick = (e) => e.stopPropagation();

  return isOpen ? (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {title && (
          <div className={styles.modalHeader}>
            <h1>{title}</h1>
          </div>
        )}
        {children}
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: "", // Título por defecto como una cadena vacía si no se proporciona.
};

export default Modal;
