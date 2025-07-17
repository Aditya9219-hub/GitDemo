//import React, { useState } from 'react'

export default function About(props) {
  // Make herostyle an object, not a function
  let herostyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#8ab3dcff' : 'white',
  }


  return (
    <div>
      <div className="accordion" id="accordionExample" style={{color: props.mode === 'dark' ? 'white' : 'black',}} >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes...
            </div>
          </div>
        </div>

        <div className="accordion-item" style={herostyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Browser friendly</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Textutil gives you a way to analyze your text quickly and efficiently.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={herostyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Easy to use</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Textutil is a free character tool that provides instant character count & word count stats for a given text.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
