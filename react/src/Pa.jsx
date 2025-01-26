import React, { useState } from 'react';

function TextCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setWordCount(newText.split(' ').length);
    setSentenceCount(newText.split('.').length - 1);
    setCharacterCount(newText.length);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <p>
        <strong>Word Count:</strong> {wordCount}
      </p>
      <p>
        <strong>Sentence Count:</strong> {sentenceCount}
      </p>
      <p>
        <strong>Character Count:</strong> {characterCount}
      </p>
    </div>
  );
}

export default TextCounter;

