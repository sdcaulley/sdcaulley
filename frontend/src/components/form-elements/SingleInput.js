import React from 'react';
import PropTypes from 'prop-types';

function SingleInput(props) {
    return (
        <div>
            <label>{props.title}</label>
            <input
                name={props.name}
                type={props.type}
                value={props.content}
                onChange={props.controlFunc}
                placeholder={props.placeholder} />
        </div>
    );
}

SingleInput.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'text', 'number', 'password', 'email'    ]).isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array
    ]).isRequired,
    controlFunc: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default SingleInput;
