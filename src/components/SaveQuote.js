const SaveQuote = ({ savedQuotes, setSavedQuotes, randomQuote }) => {

  const saveQuote = (newQuote) => {
    !savedQuotes.find(quote => quote._id === randomQuote._id) && setSavedQuotes([...savedQuotes, newQuote]);
  };

  return <button className="quote-box-btn" onClick={() => saveQuote(randomQuote)}>Save Quote</button>
};

export default SaveQuote;
