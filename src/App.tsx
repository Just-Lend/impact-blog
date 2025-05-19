import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ArticlePage from "./pages/Article";
import CategorisedArticle from "./pages/CategorisedArticles";

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="/categories/:category" element={<CategorisedArticle />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
