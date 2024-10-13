import React, { useState } from 'react';

const DadJokeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);  // To handle loading state
  const [error, setError] = useState(null);  // To handle errors

  const handleGenerateJoke = async () => {
    if (!inputText) {
      console.log("Input is empty");
      return;  // Don't proceed if input is empty
    }
  
    setLoading(true);  // Start loading spinner
    setError(null);  // Reset error
    console.log("Sending request to backend...");
  
    try {
      const response = await fetch('http://localhost:5000/generate-joke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputText }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setJoke(data.joke);
      } else {
        setError('Failed to generate joke.');
      }
    } catch (error) {
      setError('Something went wrong while generating the dad joke.');
      console.error('Error generating joke:', error);
    } finally {
      setLoading(false);  // Stop loading spinner
    }
  };
  return (
    <div className="dadjoke-generator">
      <h1>Dad Joke Generator</h1>

      {/* Textarea for input */}
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something to inspire a dad joke..."
        rows="4"
        cols="50"
      />

      {/* Button to generate the joke */}
      <button onClick={handleGenerateJoke} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Joke'}
      </button>

      {/* Display the joke */}
      {error && <p className="error">{error}</p>}
      <div className="joke-box">
        <h2>Dad Joke:</h2>
        <p>{joke || "Your joke will appear here!"}</p>
      </div>
    </div>
  );
};

export default DadJokeGenerator;
