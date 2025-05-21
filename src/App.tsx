import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ArticlePage from "./pages/Article";
import CategorisedArticles from "./pages/CategorisedArticles";
import LayoutContainer from "./components/LayoutContainer";
import UNSDGArticles from "./pages/UNSDGArticles";
import LocalAuthorityArticles from "./pages/LocalAuthorityArticles";

const App: React.FC = () => (
  <Router>
    <Header />
    <LayoutContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/categories/:category" element={<CategorisedArticles />} />
        <Route path="/unsdgs/:unsdgNumber" element={<UNSDGArticles />} />
        <Route
          path="/local-authorities/:laId"
          element={<LocalAuthorityArticles />}
        />
      </Routes>
    </LayoutContainer>
    <Footer />
  </Router>
);

export default App;
