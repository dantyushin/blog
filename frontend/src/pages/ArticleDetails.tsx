import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Comment {
  id: number;
  author_name: string;
  content: string;
  created_at: string;
}

interface Article {
  id: number;
  title: string;
  content: string;
  created_at: string;
  comments: Comment[];
}

export const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [authorName, setAuthorName] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !commentContent) return alert("Заполните все поля");

    await fetch(`http://localhost:8000/api/articles/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author_name: authorName,
        content: commentContent,
      }),
    });

    const res = await fetch(`http://localhost:8000/api/articles/${id}`);
    const data = await res.json();
    setArticle(data);

    setAuthorName("");
    setCommentContent("");
  };

  if (loading) return <div>Загрузка статьи...</div>;
  if (!article) return <div>Статья не найдена</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <small>{new Date(article.created_at).toLocaleDateString()}</small>
      <p>{article.content}</p>

      <h3>Комментарии</h3>
      <ul>
        {article.comments.map((c) => (
          <li key={c.id}>
            <b>{c.author_name}</b> ({new Date(c.created_at).toLocaleString()}):
            <br />
            {c.content}
          </li>
        ))}
      </ul>

      <h4>Добавить комментарий</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Комментарий"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
