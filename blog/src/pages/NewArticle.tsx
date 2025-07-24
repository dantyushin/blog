import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return alert("Заполните все поля");

    const res = await fetch("http://localhost:8000/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      navigate("/");
    } else {
      alert("Ошибка при создании статьи");
    }
  };

  return (
    <div>
      <h1>Новая статья</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Текст статьи"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};
