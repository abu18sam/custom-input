import { memo, useState } from "react";

// import BaseModal from "../components/baseModal/BaseModal";

import HeadingAndActionsModal from "../components/headingAndActionsModal/HeadingAndActionsModal";

import "./ModalContainerPage.scss";

// const ModalFooter = (props) => {
//   const {
//     onClickResetBtn,
//     onClickSuccessBtn,
//     resetButtonLabel,
//     successButtonLabel,
//   } = props;
//   return (
//     <>
//       <div className="modal-footer-action-container">
//         <button className="reset-button" onClick={onClickResetBtn}>
//           {resetButtonLabel ? resetButtonLabel : "Cancel"}
//         </button>
//         <button className="success-button" onClick={onClickSuccessBtn}>
//           {successButtonLabel ? successButtonLabel : "Confirm"}
//         </button>
//       </div>
//     </>
//   );
// };

const ModalBody = () => {
  return (
    <div>
      <p>Hi this is modal body. Replace with your jsx element</p>
    </div>
  );
};

const ModalContainerPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickResetBtn = () => {
    console.log("Reset Clicked === ");
    setShowModal(false);
  };

  const onClickSuccessBtn = () => {
    console.log("success clicked");
    setShowModal(false);
  };

  // const ModalHeader = () => {
  //   return (
  //     <>
  //       <h2 className="modal-heading">{"Modal Title hi"}</h2>
  //     </>
  //   );
  // };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Click here to Show Modal
        </button>

        <HeadingAndActionsModal
          showModal={showModal}
          toggle={setShowModal}
          heading={"Modal Title"}
          submitHandler={onClickSuccessBtn}
        >
          <div>
            <input placeholder="ARC Name" />
            <input placeholder="Channel Name" />
          </div>
        </HeadingAndActionsModal>

        {/* <CustomModal
          title={"Are you sure?"}
          description={
            "The changes made on the details are not saved. Please confirm if you want to continue."
          }
          successButtonLabel={"Confirm"}
          resetButtonLabel={"Cancel"}
          showModal={showModal}
          successButtonClick={() => {
            console.log("confirm clicked");
            setShowModal(false);
          }}
          resetButtonClick={() => {
            console.log("cancel clicked");
          }}
          toggle={(state) => setShowModal(state)}
        /> */}
        {/* <BaseModal
          showModal={showModal}
          toggle={(state) => setShowModal(state)}
          showCloseButton={true}
          headerContent={<ModalHeader />}
          bodyContent={<ModalBody />}
          footerContent={
            <ModalFooter
              onClickResetBtn={onClickResetBtn}
              onClickSuccessBtn={onClickSuccessBtn}
              resetButtonLabel={"Cancel"}
              successButtonLabel="Submit"
            />
          }
        /> */}
      </div>
    </>
  );
};

export default memo(ModalContainerPage);
