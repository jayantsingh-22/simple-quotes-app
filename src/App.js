import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import QuoteComments from "./pages/QuoteComments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllQuotes />} />
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
      <Route path="/new-quote" element={<NewQuote />} />
      <Route path="/quotes/:quoteId/comments" element={<QuoteComments />} />
    </Routes>
  );
}

export default App;
