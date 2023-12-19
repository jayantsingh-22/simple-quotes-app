import { Fragment } from "react";
import { useParams, Link, useLocation} from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const location = useLocation();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  const isCommentsRoute = location.pathname === `/quotes/${params.quoteId}/comments`;

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {!isCommentsRoute && (
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default QuoteDetail;
