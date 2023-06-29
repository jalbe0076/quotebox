const QuoteGenerator = ({ setNewQuote }) => {
  const getNewQuote = () => {
    setNewQuote(prevQuote => prevQuote + 1);
  };

  return <button className='quote-box-btn' onClick={() => getNewQuote()}>New Quote</button>;
};

export default QuoteGenerator;
