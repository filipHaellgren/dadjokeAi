import React from 'react';
import DadJokeGenerator from './dadjoke';  // Adjust path if needed
/* import './App.css';  // Optional: if you want to style the app with a CSS file */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Dad Joke Generator</h1>
      </header>
      <main>
        <DadJokeGenerator />
      </main>
    </div>
  );
}

export default App;
