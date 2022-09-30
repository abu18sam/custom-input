import { memo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./CustomCheckbox.css";

const CustomCheckbox = (props) => {
  const { value, checked, label, id, name, onChange } = props;
  return (
    <span>
      {/* <input class="checkbox-effect checkbox-effect-1" id="make-bed-1" type="checkbox" value="make-bed-1" name="make-bed-1"/>
    <label for="make-bed-1"></label> */}
      <input
        key={id ? id : label}
        className="checkbox-input"
        checked={checked}
        value={value}
        type="checkbox"
        id={id ? id : label}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={id ? id : label} className="label-class">
        {label}
      </label>
    </span>
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
  onChange: PropTypes.func,
};

export default memo(CustomCheckbox);

export const CustomCheckboxGroup = memo((props) => {
  const { checkboxList, getSelectedItem, checkboxesName } = props;

  console.log("checkboxList == ", checkboxList);

  const handleChange = useCallback((e) => {
    const { value, name, checked, id } = e.target;
    if (getSelectedItem) {
      getSelectedItem({ value, name, checked, id });
    }
  }, []);

  return (
    <div onChange={handleChange}>
      {checkboxList.map((checkboxItem, index) => {
        console.log("key = ", `${JSON.stringify(checkboxItem)}_${index}`);
        return (
          <div>
            <CustomCheckbox
              key={`${JSON.stringify(checkboxItem)}_${index}`}
              value={checkboxItem.value}
              label={checkboxItem.label}
              name={checkboxesName? checkboxesName: checkboxItem.name? checkboxItem.name : "checkbox"}
              id={checkboxItem.id}
              checked={checkboxItem.checked}
            />
          </div>
        );
      })}
    </div>
  );
});

CustomCheckboxGroup.propTypes = {
  checkboxList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      label: PropTypes.string,
    })
  ),
  getSelectedItem: PropTypes.func,
  checkboxesName: PropTypes.string
};
