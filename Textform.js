import React, { useState } from "react";

export default function Textform(props) {

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleToggleCase = () => {
    if (text === text.toLowerCase()) {
      setText(text.toUpperCase());
    } else {
      setText(text.toLowerCase());
    }
  };

  const handleToLowercase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <>
      <h4 className="text-center">{props.head}</h4>
      <div className="input-group my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          rows="8"
          style={{
            backgroundColor: props.mode === 'dark' ? '#292456ff' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleToggleCase}
      >
        Toggle Uppercase
      </button>
      <button
        disabled={text.length === 0}
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleToLowercase}
      >
        Convert to Lowercase
      </button>
      <button
        disabled={text.length === 0}
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={clearText}
      >
        Clear Text
      </button>
      <button
        disabled={text.length === 0}
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={copyToClipboard}
      >
        Copy to Clipboard
      </button>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>Character count: {text.length} characters</p>
        <p>Word count: {wordCount} words</p>
        <p>Estimated reading time: {(0.008 * wordCount).toFixed(2)} minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview."}</p>
      </div>
    </>
  );
}
