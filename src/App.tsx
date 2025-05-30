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
import About from "./pages/about/About";
import ScrollToTop from "./components/ScrollToTop";
import RegisterInterest from "./pages/RegisterInterest";
import Magazine from "./pages/Magazine";
import Support from "./pages/Support";

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <LayoutContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/categories/:id" element={<CategorisedArticles />} />
        <Route path="/unsdgs/:unsdgNumber" element={<UNSDGArticles />} />
        <Route
          path="/local-authorities/:laId"
          element={<LocalAuthorityArticles />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/register-interest" element={<RegisterInterest />} />
        <Route path="/support" element={<Support />} />
        <Route path="/magazine" element={<Magazine />} />
      </Routes>
    </LayoutContainer>
    <Footer />
  </Router>
);

export default App;
