import React, { useRef } from 'react';

const TextBoldifier = () => {
  const contentEditableRef = useRef(null);

  const handleBoldClick = () => {
    document.execCommand('bold', false, null);
  };

  return (
    <div>
      <div
        ref={contentEditableRef}
        contentEditable={true}
        style={{
          border: '1px solid black',
          minHeight: '100px',
          padding: '5px',
        }}
      ></div>
      <button onClick={handleBoldClick}>B</button>
    </div>
  );
};

export default TextBoldifier;




