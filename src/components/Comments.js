import { useEffect, useState } from "react";

const [isLoading, setIsLoading] = useState(true);

const Comments = () => {
  useEffect(() => {
    fetch(`https://n3ws.onrender.com/api/articles/${article_id}/comments`)
      .then((response) => response.json())
      .then((body) => {
        setArticleComments(body);
        setIsLoading(false);
      });
  }, []);
};

export default Comments;
