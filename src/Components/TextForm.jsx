import React, { useState } from 'react';
import Info from './Info';

const TextForm = () => {
  const [text, setText] = useState('');
  const [sum, setSum] = useState(false);
  const [copy, setCopy] = useState('Click to Copy');
  const [history, setHistory] = useState([]);
  const [actionInfo, setActionInfo] = useState('');
  const [showPreSuf, setShowPreSuf] = useState(false);
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');

  const showAction = (type) => {
    const descriptions = {
      upper: "Uppercase: Converts all letters in the text to uppercase.\nExample: 'hello' → 'HELLO'",
      lower: "Lowercase: Converts all letters in the text to lowercase.\nExample: 'HELLO' → 'hello'",
      cleanup: "Cleanup: Removes extra spaces from the text.\nExample: 'hello    world' → 'hello world'",
      prefixSuffix: "Prefix/Suffix: Adds a prefix and suffix to each word.\nExample: prefix='@', suffix='#', 'hi there' → '@hi# @there#'",
      shuffle: "Shuffle: Randomly rearranges the words in the text.",
      undo: "Undo: Reverts the text to the previous state.",
      sum: "Text Summary: Shows statistics like word count, character count, etc.",
      clear: "Clear: Removes all text.",
      copy: "Copy: Copies the current text to clipboard."
    };

    setActionInfo(descriptions[type] || '');
  };

  const updateText = (newText) => {
    setHistory([...history, text]);
    setText(newText);
  };

  const handleChange = (e) => {
    setHistory([...history, text]);
    setText(e.target.value);
  };

  const handleUpper = () => {
    updateText(text.toUpperCase());
    showAction('upper');
    setSum(false);
    setShowPreSuf(false);
  };

  const handleLower = () => {
    updateText(text.toLowerCase());
    showAction('lower');
    setSum(false);
    setShowPreSuf(false);
  };

  const handleClear = () => {
    updateText('');
    showAction('clear');
    setShowPreSuf(false);
    setSum(false);
  };

  const handleCleanUp = () => {
    updateText(text.replace(/\s+/g, ' ').trim());
    showAction('cleanup');
    setSum(false);
   setShowPreSuf(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopy('Copied');
    setTimeout(() => setCopy('Click to Copy'), 500);
    showAction('copy');
   setShowPreSuf(false);
   setSum(false);
  };

  const handlePrefixSuffix = () => {
    if (prefix === '' && suffix === '') return;
    const modifiedText = text
    .split('\n') // split text into lines
    .map(line =>
      line
        .split(/\s+/) // split each line into words
        .map(word => word ? `${prefix}${word}${suffix}` : '')
        .join(' ') // join words back into a line
    )
    .join('\n'); // join lines back with line breaks

    updateText(modifiedText);
    setShowPreSuf(false); // hide inputs after applying
    showAction('prefixSuffix');
  };

  const handleShuffle = () => {
    const words = text.split(/\s+/);
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    updateText(words.join(' '));
    showAction('shuffle');
    setSum(false);
   setShowPreSuf(false);
  };

  const handleSum = () => {
    setSum(!sum);
    showAction('sum');
   setShowPreSuf(false);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setText(prev);
      showAction('undo');
    }
    setSum(false);
   setShowPreSuf(false);
  };

  const togglePreSufForm = () => {
    setShowPreSuf(!showPreSuf);
    showAction('prefixSuffix');
    setSum(false);
  };

  return (
    <div className='d-flex justify-content-center align-items-center flex-column text-center my-5'>
      <div className='mb-3'>
        <button className='btn btn-primary mx-1' onClick={handleUpper}>Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLower}>Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleCleanUp}>CleanUp</button>
        <button className='btn btn-primary mx-1' onClick={togglePreSufForm}>Prefix/Suffix</button>
        <button className='btn btn-primary mx-1' onClick={handleShuffle}>Shuffle</button>
        <button className='btn btn-warning mx-1' onClick={handleSum}>Text Summary</button>
        <button className='btn btn-secondary mx-1' onClick={handleUndo} disabled={history.length === 0}>Undo</button>
      </div>

      <div className="position-relative mb-3" style={{ width: '50vw' }}>
        <textarea
          value={text}
          onChange={handleChange}
          className='form-control'
          id="myBox"
          rows="8"
          placeholder='Enter your text'
          style={{ height: '40vh', resize: 'none' }}
        />
        <div className="position-absolute" style={{ bottom: '10px', right: '10px' }}>
          <button className='btn btn-sm btn-info mx-1' onClick={handleCopy}>{copy}</button>
          <button className='btn btn-sm btn-danger' onClick={handleClear}>Clear</button>
        </div>
      </div>

      <Info sum={sum} text={text} action={actionInfo} />

      {showPreSuf ? (
        <div className="mb-3" style={{ width: '50vw' }}>
          <h5>Prefix</h5>
          <input
            type="text"
            className="form-control mb-2"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            placeholder="Enter prefix"
          />

          <h5>Suffix</h5>
          <input
            type="text"
            className="form-control mb-2"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            placeholder="Enter suffix"
          />

          <button className="btn btn-success mt-2" onClick={handlePrefixSuffix}>
            Apply Prefix/Suffix
          </button>
        </div>
      ) : ''}
    </div>
  );
};

export default TextForm;
