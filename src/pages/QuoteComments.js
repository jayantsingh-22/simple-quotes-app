import { Fragment } from "react";

import QuoteDetail from "./QuoteDetail";
import Comments from "../components/comments/Comments";

const QuoteComments = () => {
  return (
    <Fragment>
      <QuoteDetail />
      <Comments />
    </Fragment>
  );
};

export default QuoteComments;
