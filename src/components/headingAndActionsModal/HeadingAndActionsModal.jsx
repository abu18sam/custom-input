import PropTypes from "prop-types";

import BaseModal from "../baseModal/BaseModal";

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
  } = props;

  const onClickResetBtn = () => {
    toggle(false);
    if (cancelHandler) {
      cancelHandler();
    }
  };

  return (
    <>
      <BaseModal
        showModal={showModal}
        toggle={toggle}
        showCloseButton={true}
        headerContent={<ModalHeader heading={heading} />}
        bodyContent={children}
        footerContent={
          <ModalFooter
            onClickResetBtn={onClickResetBtn}
            onClickSuccessBtn={submitHandler}
            resetButtonLabel={cancelButtonLabel ? cancelButtonLabel : "Cancel"}
            successButtonLabel={
              submitButtonLabel ? submitButtonLabel : "Submit"
            }
          />
        }
      />
    </>
  );
};

HeadingAndActionsModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  heading: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
  cancelHandler: PropTypes.func,
  submitButtonLabel: PropTypes.string,
  cancelButtonLabel: PropTypes.string,
};

export default HeadingAndActionsModal;
