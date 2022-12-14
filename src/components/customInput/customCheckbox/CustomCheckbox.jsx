import { memo, useCallback } from "react";
import PropTypes from "prop-types";

import "./CustomCheckbox.css";

const CustomCheckbox = (props) => {
  const { value, checked, label, id, name, onChange } = props;
  return (
    <span>
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

  const handleChange = useCallback((e) => {
    const { value, name, checked, id } = e.target;
    if (getSelectedItem) {
      getSelectedItem({ value, name, checked, id });
    }
  }, []);

  return (
    <div onChange={handleChange}>
      {checkboxList.map((checkboxItem, index) => {
        return (
          <div>
            <CustomCheckbox
              key={`${JSON.stringify(checkboxItem)}_${index}`}
              value={checkboxItem.value}
              label={checkboxItem.label}
              name={
                checkboxesName
                  ? checkboxesName
                  : checkboxItem.name
                  ? checkboxItem.name
                  : "checkbox"
              }
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
  checkboxesName: PropTypes.string,
};
