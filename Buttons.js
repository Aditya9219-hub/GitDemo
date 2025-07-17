import React, { useState } from 'react'

export default function Buttons() {
    
      return (
    <div className='mx-4'>
      <button type="button" className="btn btn-primary" value={text} onClick={handleonChange} >Convert to Uppercase</button>
<button type="button" className="btn btn-secondary">Convert to lowercase</button>
<button type="button" className="btn btn-success">Copy to clipboard</button>
<button type="button" className="btn btn-danger">Remove the space </button>
    </div>
  )
}
