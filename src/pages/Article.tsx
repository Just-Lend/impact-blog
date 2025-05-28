import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCampaignArticleBySlug } from "../api/campaignArticleService";
import type { Article } from "../types";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Spinner from "../components/Spinner";

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchCampaignArticleBySlug = async (slug: string) => {
    try {
      const article = await getCampaignArticleBySlug(slug);
      setArticle(article);
    } catch (error) {
      setHasError(true);
      console.error("Error fetching article:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchCampaignArticleBySlug(slug);
    }
  }, [slug]);

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

  if (!article) {
    return (
      <main className="container mx-auto px-4 py-4">
        <div className="text-center text-gray-600 mt-10">
          Articles not found
        </div>
      </main>
    );
  }

  const encodedUrl = encodeURIComponent(
    window.location.origin + window.location.pathname
  );
  const encodedTitle = encodeURIComponent(article.title);
  return (
    <article className="container mx-auto px-4 article-page">
      <img src={article.image_urls[0]} className="coverImage" />
      <h1 className=" text-5xl font-bold leading-14 text-gray-800 mb-4 w-[60%] px-4 mx-auto">
        {article.title}
      </h1>
      <div className=" flex justify-between w-full mt-8 ">
        <div className=" w-[20%] flex flex-col gap-y-2 pr-4">
          <div>
            <div className=" underline">Categories</div>
            <div className=" flex flex-col gap-y-2">
              {article.external_campaign?.campaign_category_infos?.map(
                (c: any) => (
                  <Link
                    className=" text-[#5603AD] font-semibold text-sm hover:underline"
                    to={{
                      pathname: "/categories/" + c.campaign_category?.id,
                    }}
                    state={{
                      categoryName: c.campaign_category?.new_description,
                    }}
                  >
                    {c.campaign_category?.new_description}
                  </Link>
                )
              )}
            </div>
          </div>
          <div>
            <div className=" underline">UNSDGs</div>
            <div className=" flex flex-col gap-y-1 -ml-3">
              {article.external_campaign?.campaign_category_infos?.map(
                (c: any) => (
                  <div className="flex justify-start items-center">
                    <div className="w-3/12 h-12 flex items-center">
                      <img
                        src={c.campaign_category?.unsdg?.icon_url}
                        className="w-full h-auto block"
                        alt={
                          c.campaign_category?.unsdg?.short_title || "SDG Icon"
                        }
                      />
                    </div>
                    <Link
                      className="text-[#5603AD] font-semibold text-xs hover:underline w-9/12 flex items-center h-full"
                      to={{
                        pathname: "/unsdgs/" + c.campaign_category?.unsdg?.id,
                      }}
                      state={{ sdg: c.campaign_category?.unsdg }}
                    >
                      {c.campaign_category?.unsdg?.short_title || "Untitled"}
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <div className=" underline">Tags</div>
            <div className=" flex flex-col gap-y-2">
              {article.tags?.map((tag: string) => (
                <div className=" font-semibold text-xs hover:underline">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 border-l border-l-gray-300 px-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            {article.preview}
          </h3>
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
        <div className=" w-[10%] flex flex-col gap-y-2 px-6">
          <div className=" font-semibold">Share:</div>
          <div className=" flex flex-col gap-y-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                size={30}
                color="white"
                className=" cursor-pointer bg-[#5603AD] rounded-md p-1"
              />
            </a>
            <a
              href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                size={30}
                color="white"
                className=" cursor-pointer bg-[#5603AD] rounded-md p-1"
              />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={30}
                color="white"
                className=" cursor-pointer bg-[#5603AD] rounded-md p-1"
              />
            </a>
          </div>
        </div>
      </div>
      {/* {article?.image_urls.length > 0 && (
        <img
          src={article.image_urls[0]}
          alt={article.title}
          className="w-full h-64 object-cover mb-6"
        />
      )} */}
    </article>
  );
};

export default ArticlePage;
