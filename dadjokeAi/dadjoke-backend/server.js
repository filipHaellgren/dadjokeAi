const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware to enable CORS for requests from your Vite frontend
app.use(cors({
  origin: 'http://localhost:5173',  // Allow only requests from your Vite frontend
}));
app.use(express.json());

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: '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',  // Replace with your actual API key
});

// Route to handle joke generation
app.post('/generate-joke', async (req, res) => {
  const { prompt } = req.body;

  console.log('Received prompt:', prompt);  // Log the incoming prompt

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",  // Use gpt-3.5-turbo if you don't have access to gpt-4
      messages: [
        { "role": "user", "content": `Make a dad joke based on: ${prompt}` }
      ]
    });

    console.log('Generated joke:', completion.choices[0].message.content);  // Log the joke
    res.json({ joke: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error calling OpenAI API:', error.message);  // Log detailed error message
    res.status(500).json({ error: 'Failed to generate joke' });
  }
});

// Add the root route (to handle requests to "/")
app.get('/', (req, res) => {
  res.send('Dad Joke Generator Backend is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
