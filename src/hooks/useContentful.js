import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import client from "../utils/contentfulClient";

const useContentful = (contentType) => {
  const { i18n } = useTranslation();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "homepage",
          locale: i18n.language, // Should now be 'en-US' or 'it-IT'
        });

        if (entries.items.length > 0) {
          const fetchedContent = entries.items[0].fields;
          setContent(fetchedContent);
        } else {
          console.error(`No entries found for content type "${contentType}"`);
        }
      } catch (error) {
        console.error("Error fetching content from Contentful:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [contentType, i18n.language]);

  return { content, loading };
};

export default useContentful;
