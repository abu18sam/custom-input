import { memo } from 'react';
import PropTypes from 'prop-types';

import './CustomRadio.css';

const CustomRadio = (props) => {
    const { value, checked, label, id, name, onChange } = props;

    return (
        <>
            <span className="custom-radio-container">
                <input className="custom-radio-input" onChange={onChange} type="radio" name={name} id={id ? id : label} value={value} checked={checked} />
                <label htmlFor={id ? id : label}>{label}</label>
            </span>
        </>
    )
}

CustomRadio.propTypes = {
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default memo(CustomRadio);