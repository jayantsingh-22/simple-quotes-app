import { Fragment } from "react";
import { useNavigate,useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const history = useNavigate();
  const location = useLocation();

  const queryParams =  new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const changeSortingHandler = () => {
    history({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending? 'desc':'asc')}`
    });
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
