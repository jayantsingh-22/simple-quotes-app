import { useRef, useState, Fragment } from "react";
import ReactRouterPrompt from "react-router-prompt";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const addHandler =() => {
    setIsEntering(false);
  }

  return (
    <Fragment>
      <ReactRouterPrompt when={isEntering}>
        {({ isActive, onConfirm, onCancel }) =>
          isActive && (
            <Card>
              <div className="centered prompt-modal">
                <p>Do you really want to leave?</p>
                <button className="btn" onClick={onCancel}>
                  No
                </button>
                <button className="btn" onClick={onConfirm}>
                  Yes!
                </button>
              </div>
            </Card>
          )
        }
      </ReactRouterPrompt>
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={addHandler}>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
