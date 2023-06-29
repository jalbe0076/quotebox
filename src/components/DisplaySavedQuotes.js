import DisplayQuote from "./DisplayQuote";

const DisplaySavedQuotes = ({ savedQuotes, setSavedQuotes }) => {
  const savedQuotesList = savedQuotes.map(quote => {
    return (
      <article className="saved-quote">
        <DisplayQuote
          id={quote._id}
          key={quote._id}
          quote={quote.content}
          author={quote.author} 
        />
        <button className='delete-quote' onClick={() => removeQuote(quote._id)}>🗑️</button>
      </article>
    );
  });

  const removeQuote = (id) => {
    const filteredQuotes = savedQuotes.filter(quote => quote._id !== id)
    setSavedQuotes(filteredQuotes);
  };

  return (
    <section className="saved-section">
      {console.log(savedQuotesList) /*DELETE THIS CONSOLE LOG AFTER TROUBLESHOOTING THE MISSING KEY */}
      <h2>Favourite Quotes</h2>
      {savedQuotesList}
    </section>
  );  
};

export default DisplaySavedQuotes;