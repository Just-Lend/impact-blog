import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
import ProductView1 from "./pages/ProductView1";
import ProductView2 from "./pages/ProductView2";
import ProductView3 from "./pages/ProductView3";
import ProductView4 from "./pages/ProductView4";
import TermsAndConditions from "./pages/TermsAndConditions";

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <LayoutContainer>
      <Routes>
        <Route path="/" element={<Magazine />} />
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
        <Route path="/products/zine-subscription" element={<ProductView1 />} />
        <Route
          path="/products/digital-zine-subscription"
          element={<ProductView2 />}
        />
        <Route
          path="/products/impact-news-tower-hamlets-2"
          element={<ProductView3 />}
        />
        <Route
          path="/products/impact-news-tower-hamlets-1"
          element={<ProductView4 />}
        />{" "}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </LayoutContainer>
    <Footer />
  </Router>
);

export default App;
