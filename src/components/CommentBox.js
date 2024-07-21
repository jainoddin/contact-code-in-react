import React, { useRef, useEffect, useCallback } from 'react';
import './CommentBox.css';

function CommentBox() {
  const textareaRef = useRef(null);
  const handleRef = useRef(null);
  const isResizing = useRef(false);

  const startResize = useCallback((e) => {
    isResizing.current = true;
    document.addEventListener('mousemove', resizeTextarea);
    document.addEventListener('mouseup', stopResize);
  }, []);

  const resizeTextarea = useCallback((e) => {
    if (isResizing.current) {
      const rect = textareaRef.current.getBoundingClientRect();
      textareaRef.current.style.height = `${e.clientY - rect.top}px`;
    }
  }, []);

  const stopResize = useCallback(() => {
    isResizing.current = false;
    document.removeEventListener('mousemove', resizeTextarea);
    document.removeEventListener('mouseup', stopResize);
  }, [resizeTextarea]);

  useEffect(() => {
    const handle = handleRef.current;
    handle.addEventListener('mousedown', startResize);
    return () => {
      handle.removeEventListener('mousedown', startResize);
    };
  }, [startResize]);

  const makeBold = () => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start !== end) {
      const selectedText = textarea.value.substring(start, end);
      const beforeText = textarea.value.substring(0, start);
      const afterText = textarea.value.substring(end);
      textarea.value = `${beforeText}**${selectedText}**${afterText}`;
    }
  };

  return (
    <div className="comment-box">
      <button onClick={makeBold}>Bold</button>
      <textarea
        ref={textareaRef}
        rows="4"
        cols="80"
        placeholder="Your text here..."
        className="contact-dropdownlist-text focus-input"
      ></textarea>
      <div className="custom-resize-handle" ref={handleRef}></div>
    </div>
  );
}

export default CommentBox;


