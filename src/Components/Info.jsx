import React from 'react';
import TextSum from './textSum';

const Info = ({ sum, text, action }) => {
  return (
    <div className="mt-3 px-4" style={{ maxWidth: '50vw' }}>
      {action && (
        <div className="alert alert-info" style={{ whiteSpace: 'pre-wrap' }}>
          {action}
        </div>
      )}
      {sum && <TextSum text={text} />}
    </div>
  );
};

export default Info;
