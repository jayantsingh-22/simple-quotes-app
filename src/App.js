import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import QuoteComments from "./pages/QuoteComments";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/quotes" element={<AllQuotes />} />

        <Route path="/quotes/:quoteId">
          <Route index element={<QuoteDetail/>} />
          <Route path="comments" element={<QuoteComments />} />
        </Route>

        <Route path="/new-quote" element={<NewQuote />} />
        
        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}


export default App;