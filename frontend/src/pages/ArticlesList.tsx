import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export const ArticlesList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>Список статей</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={`/articles/${article.id}`}>
              <h3>{article.title}</h3>
              <small>{new Date(article.created_at).toLocaleDateString()}</small>
              <p>{article.content.slice(0, 100)}...</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
