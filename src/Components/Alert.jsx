import React from 'react';

const Alert = (props) => {
  if (!props.alert) {
    return null; // Don't render anything if no alert message
  }

  return (
    <div>
      <div
        className="alert alert-info alert-dismissible fade show"
        role="alert"
      >
        {props.alert}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Alert;
