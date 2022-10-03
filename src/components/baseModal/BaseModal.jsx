import { memo, useEffect, useCallback } from 'react';
import PropTypes from "prop-types";
import CloseIcon from '../../assets/images/icons/close_icon.svg';

import './BaseModal.scss'

const BaseModal = (props) => {

    const { showModal, toggle, showCloseButton, headerContent, bodyContent, footerContent } = props;

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

    return (
        <>{/* The Modal Container */}
            <div id="customModal" className="modal">
                {/*  Modal content */}
                <div className="modal-content">
                    {/* Modal header */}
                    <div className="modal-header">
                        {showCloseButton ? <span className="close-button" onClick={handleCloseClick}><img alt="close" src="/images/close_icon.svg" /></span> : null}
                        {headerContent}
                    </div>

                    <div className='separator-div' />

                    {/* Modal Body */}
                    <div className="modal-body">
                        {bodyContent}
                    </div>

                    {/* Modal Footer */}
                    <div className="modal-footer">
                        {footerContent}
                    </div>
                </div>
            </div>
        </>
    )
}

BaseModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    showCloseButton: PropTypes.bool,
    headerContent: PropTypes.element,
    bodyContent: PropTypes.element,
    footerContent: PropTypes.element
};

export default memo(BaseModal);