import { memo, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import "./CustomModal.scss";

const CustomModal = (props) => {

  const { showModal, toggle, showCloseButton, description, title, successButtonLabel, resetButtonLabel, successButtonClick, resetButtonClick } = props;

  const toggleModal = (showModalArg) => {
    const modal = document.querySelector(".modal");
    if (showModalArg) {
      modal?.classList.add("show-modal");
    }
    else {
      modal?.classList.remove("show-modal");
    }
  }

  // to close modal on click outside following use effect need to be enabled
  // useEffect(() => {
  //   const modal = document.querySelector(".modal");
  //   function windowOnClick(event) {
  //     if (event.target === modal) {
  //       toggleModal();
  //     }
  //   }
  //   window.addEventListener("click", windowOnClick);
  //   return ()=>{
  //     window?.removeEventListener("click");
  //   }
  // }, []);

  useEffect(() => {
    toggleModal(showModal);
  }, [showModal]);

  const handleCloseClick = useCallback(() => {
    toggle(!showModal);
  }, [showModal]);

  const onClickResetBtn = useCallback(()=>{
    toggle(!showModal);
    if(resetButtonClick) {
      resetButtonClick()
    }
  },[showModal]);

  const onClickSuccessBtn = useCallback(()=>{
    if(successButtonClick) {
      successButtonClick();
    }
  },[])

  return (
    <>
      {/* The Modal Container */}
      <div id="customModal" className="modal">
        {/*  Modal content */}
        <div className="modal-content">
          {/* Modal header */}
          <div className="modal-header">
            {showCloseButton ? <span className="close-button" onClick={handleCloseClick}>&times;</span> : null}
            <h2 className="modal-heading">{title}</h2>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <p className="modal-body-description">{description}</p>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <div className="modal-footer-action-container">
            <button  className="reset-button" onClick={onClickResetBtn}>{resetButtonLabel ? resetButtonLabel : "Cancel"}</button>
              <button className="success-button" onClick={onClickSuccessBtn}>{successButtonLabel ? successButtonLabel : "Confirm"}</button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  successButtonLabel: PropTypes.string.isRequired,
  resetButtonLabel: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  successButtonClick: PropTypes.func,
  resetButtonClick: PropTypes.func,
  toggle: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool
};

export default memo(CustomModal);
