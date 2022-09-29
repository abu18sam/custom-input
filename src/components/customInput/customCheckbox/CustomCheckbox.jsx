import { memo } from 'react';
import PropTypes from 'prop-types';

import './CustomCheckbox.css';

const CustomCheckboxLabel = (props) => {
    const { value, checked, label, id, name, onChange } = props;

    return (
        <>
            <span className="custom-checkbox-container">
                <input className="custom-checkbox-input" onChange={onChange} type="checkbox" name={name} id={id ? id : label} value={value} checked={checked} />
                <label htmlFor={id ? id : label}>{label}</label>
            </span>
        </>
    )
}

CustomCheckboxLabel.propTypes = {
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default memo(CustomCheckboxLabel);