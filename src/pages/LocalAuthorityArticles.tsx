import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getCampaignArticlesByLocalAuthorityId } from "../api/campaignArticleService";
import type { Article } from "../types";
import Spinner from "../components/Spinner";

const LocalAuthorityArticles: React.FC = () => {
  const { laId } = useParams<{ laId: string }>();
  const location = useLocation();
  const { laName } = location.state || {};
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const fetchCampaignArticlesByLocalAuthorityId = async (id: number) => {
    try {
      setLoading(true);
      const articles = await getCampaignArticlesByLocalAuthorityId(id);
      setArticles(articles);
    } catch (error) {
      setHasError(true);
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (laId) {
      fetchCampaignArticlesByLocalAuthorityId(Number(laId));
    }
  }, [laId]);

  if (loading) return <Spinner />;

  if (hasError) {
    return (
      <main className="container mx-auto px-4 py-4">
        <div className="text-center text-gray-600 mt-20">
          An error occurred, please try again later.
        </div>
      </main>
    );
  }

  if (articles.length === 0) {
    navigate("/register-interest", {
      state: {
        localAuthorityName: laName,
      },
    });
    // return (
    //   <main className="container mx-auto px-4 py-4">
    //     <div className="text-2xl font-bold text-gray-800 mb-4">
    //       {laName} Local Authority - Articles
    //     </div>
    //     <div className="text-center text-gray-600">Articles not found</div>
    //   </main>
    // );
  }

  return (
    <main className="container mx-auto px-4 py-4">
      <div className="text-2xl font-bold text-gray-800 mb-4">
        {laName} Local Authority - Articles
      </div>
      {articles.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className=" my-6 text-center">Articles not found</div>
      )}
    </main>
  );
};

export default LocalAuthorityArticles;
