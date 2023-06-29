const DisplayQuote = ({ quote, author }) => {
  return (
    <>
      {!quote ? (<p>Loading...</p>) : 
        (<div className="quote-container">
          <p className="quote">{quote}</p>
          <p className="quote-author">-{author}</p>
        </div>)
      }
    </>
  );
};

export default DisplayQuote;
