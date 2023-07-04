import './App.css';
import QuoteGenerator from './components/QuoteGenerator';
import DisplayFetchError from './components/DisplayFecthError';
import DisplayQuote from './components/DisplayQuote';
import SaveQuote from './components/SaveQuote';
import DisplaySavedQuotes from './components/DisplaySavedQuotes';
import { useEffect, useState } from 'react';

function App() {
  const [hasError, setHasError] = useState(null);
  const [randomQuote, setRandomQuote] = useState([]);
  const [newQuote, setNewQuote] = useState(0);
  const [savedQuotes, setSavedQuotes] = useState([]);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://api.quotable.io/quotes/random');
        const data = await errorHandle(response);
        setRandomQuote(data[0]);
      } 
      catch (error) {
        setHasError(error);
      }
    })();
  }, [newQuote, setRandomQuote]);   

  const errorHandle = (response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log('Error Response:', response)
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  };

  return (
    <main>
      {hasError ? <DisplayFetchError error={hasError}/> :
        <>
        <div className='quote-generator'>
          <div className='new-quote-container'>
          <h1>Inspirational Quotes</h1>
            <DisplayQuote
              id={randomQuote._id}
              key={randomQuote._id}
              quote={randomQuote.content}
              author={randomQuote.author} 
            />
            </div>
            <div className='btn-area'>
              <QuoteGenerator setNewQuote={setNewQuote} />
              <SaveQuote savedQuotes={savedQuotes} setSavedQuotes={setSavedQuotes} randomQuote={randomQuote} />
          </div>
        </div>
          {savedQuotes.length ? <DisplaySavedQuotes savedQuotes={savedQuotes} setSavedQuotes={setSavedQuotes} /> : <></>}
        </>
      }
    </main>
  );
}

export default App;
