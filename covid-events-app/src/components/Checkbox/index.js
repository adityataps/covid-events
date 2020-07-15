import React from "reactn";
import PropTypes from 'prop-types';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
    <label>
        <input
            type="checkbox"
            name={label}
            checked={isSelected}
            onChange={onCheckboxChange}
        />
    </label>
);

Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

export default Checkbox;