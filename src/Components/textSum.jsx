import React from 'react'

const textSum = ({text}) => {
  return (
    <div>
      <div className='mt-4'>
        <h2>Text Summary</h2>
        <p>{text.trim().split(/\s+/).filter(Boolean).length} words, {text.length} characters</p>
        <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text || 'Nothing to preview'}</p> 
      </div>
    </div>
  )
}

export default textSum