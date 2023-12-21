import { Fragment, useEffect } from "react";
import { useParams, Link, useLocation} from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const params = useParams();
  const location = useLocation();

  const {quoteId} = params;

  const {sendRequest, status, data:loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if(status === 'pending') {
    return <div className="centered"><LoadingSpinner/></div>
  }

  if(error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  const isCommentsRoute = location.pathname === `/quotes/${params.quoteId}/comments`;

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
