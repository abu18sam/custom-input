import { memo } from "react";
import PropTypes from "prop-types";

import "./CustomCheckbox.css";

const CustomCheckbox = (props) => {
  const { value, checked, label, id, name, onChange } = props;
  return (
    <>
      {/* <input class="checkbox-effect checkbox-effect-1" id="make-bed-1" type="checkbox" value="make-bed-1" name="make-bed-1"/>
    <label for="make-bed-1"></label> */}
      <input className="checkbox-input" type="checkbox" id="check1" />
      <label htmlFor="check1" class="label-class">
        Custom 1
      </label>
    </>
    // <label class="custom-checkbox-container">
    //   {label}
    //   <input
    //     type="checkbox"
    //     checked={checked}
    //     value={value}
    //     onChange={onChange}
    //     id={id}
    //     name={name}
    //   />
    //   <span class="checkmark"></span>
    // </label>
  );
};

CustomCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default memo(CustomCheckbox);
