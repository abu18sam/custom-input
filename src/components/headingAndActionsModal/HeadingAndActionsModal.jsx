import { useCallback, useEffect, useRef } from 'react';
import PropTypes from "prop-types";

// import BaseModal from "../baseModal/BaseModal";

import "./HeadingAndActionsModal.scss";

const ModalHeader = ({ heading }) => {
  return <h2 className="modal-heading">{heading}</h2>;
};

const ModalFooter = (props) => {
  const {
    onClickResetBtn,
    onClickSuccessBtn,
    resetButtonLabel,
    successButtonLabel,
  } = props;
  return (
    <>
      <div className="modal-footer-action-container">
        <button className="reset-button" onClick={onClickResetBtn}>
          {resetButtonLabel ? resetButtonLabel : "Cancel"}
        </button>
        <button className="success-button" onClick={onClickSuccessBtn}>
          {successButtonLabel ? successButtonLabel : "Confirm"}
        </button>
      </div>
    </>
  );
};

ModalFooter.propTypes = {
  onClickResetBtn: PropTypes.func,
  onClickSuccessBtn: PropTypes.func.isRequired,
  resetButtonLabel: PropTypes.string,
  successButtonLabel: PropTypes.string
}

const HeadingAndActionsModal = (props) => {
  const {
    showModal,
    toggle,
    heading,
    children,
    cancelHandler,
    submitHandler,
    submitButtonLabel,
    cancelButtonLabel,
    showCloseButton = true,
    classes
  } = props;
  
  const toggleModal = (showModalArg) => {
    // const modal = document.querySelector(".modal");
    const modal = document.getElementById(`customModal_${heading}`)
    if (showModalArg) {
      modal?.classList.add("show-modal");
    } else {
      modal?.classList.remove("show-modal");
    }
  };

  useEffect(() => {
    toggleModal(showModal);
  }, [showModal]);

  const onClickResetBtn = useCallback(() => {
    toggle(false);
    if (cancelHandler) {
      cancelHandler();
    }
  },[]);

  const handleCloseClick = useCallback(() => {
    toggle(!showModal);
  }, [showModal]);

  return (
    <>
      {/* The Modal Container */}
      <div id={`customModal_${heading}`} className="modal">
        {/*  Modal content */}
        <div className={`modal-content ${classes?.modalContent ? classes?.modalContent: ''}`}>
          {/* Modal header */}
          <div className={`modal-header ${classes?.modalHeader ? classes?.modalHeader : ''}`}>
            {showCloseButton ? (
              <span className="close-button" onClick={handleCloseClick}>
                <img alt="close" src="/images/close_icon.svg" />
              </span>
            ) : null}
            <ModalHeader heading={heading} />
          </div>

          <div className="separator-div" />

          {/* Modal Body */}
          <div className={`modal-body ${classes?.modalBody ? classes?.modalBody : ''}`}>
            {children}
          </div>

          {/* Modal Footer */}
          <div className={`modal-footer ${classes?.modalFooter ? classes?.modalFooter : ''}`}>
            <ModalFooter
              onClickResetBtn={onClickResetBtn}
              onClickSuccessBtn={submitHandler}
              resetButtonLabel={cancelButtonLabel ? cancelButtonLabel : "Cancel"}
              successButtonLabel={
                submitButtonLabel ? submitButtonLabel : "Submit"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

HeadingAndActionsModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool,
  heading: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
  cancelHandler: PropTypes.func,
  submitButtonLabel: PropTypes.string,
  cancelButtonLabel: PropTypes.string,
  classes: PropTypes.shape({
    modalContent: PropTypes.string,
    modalHeader: PropTypes.string,
    modalBody: PropTypes.string,
    modalFooter: PropTypes.string,
  }),
};

export default HeadingAndActionsModal;
