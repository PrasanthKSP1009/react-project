//Handling Click Events

/*import React from 'react';

function ClickExample() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default ClickExample;


// Handling Form Input

import React, { useState } from 'react';

function InputExample() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default InputExample;


// Handling Mouse Events

import React from 'react';

function MouseEventExample() {
  const handleMouseEnter = () => {
    console.log('Mouse entered!');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left!');
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}
    >
      Hover over me!
    </div>
  );
}

export default MouseEventExample;


// Handling Keyboard Events

import React from 'react';

function KeyboardEventExample() {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      alert('Enter key pressed');
    }
  };

  return (
    <input type="text" onKeyPress={handleKeyPress} placeholder="Press Enter" />
  );
}

export default KeyboardEventExample;


// Handling Multiple Events

import React, { useState } from 'react';

function MultipleEventsExample() {
  const [value, setValue] = useState('');

  const handleFocus = () => {
    console.log('Input is focused');
  };

  const handleBlur = () => {
    console.log('Input is blurred');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder="Focus and type"
    />
  );
}

export default MultipleEventsExample;
*/

// Handling Form Submission with Prevent Default

import React, { useState } from 'react';

function FormSubmitExample() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with name: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmitExample;
