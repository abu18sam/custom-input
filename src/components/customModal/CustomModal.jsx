import { memo } from "react";
import PropTypes from "prop-types";

import "./CustomModal.css";

const CustomModal = (props) => {
  return (
    <>
      {/* <!-- The Modal --> */}
      <div id="myModal" class="modal">
        {/* <!-- Modal content --> */}
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div class="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div class="modal-footer">
            <h3>Modal Footer</h3>
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
};

export default memo(CustomModal);
