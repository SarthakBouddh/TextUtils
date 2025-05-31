import React from 'react';

const PreSuf = ({ pre, suf, setPre, setSuf }) => {
  const handlePreChange = (e) => setPre(e.target.value);
  const handleSufChange = (e) => setSuf(e.target.value);

  return (
    <form>
      <h5>Prefix</h5>
      <input
        type="text"
        className="form-control mb-2"
        value={pre}
        onChange={handlePreChange}
        placeholder="Enter prefix"
      />

      <h5>Suffix</h5>
      <input
        type="text"
        className="form-control"
        value={suf}
        onChange={handleSufChange}
        placeholder="Enter suffix"
      />
    </form>
  );
};

export default PreSuf;