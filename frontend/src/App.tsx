import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ArticlesList } from "./pages/ArticlesList";
import { ArticleDetails } from "./pages/ArticleDetails";
import { NewArticle } from "./pages/NewArticle";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Статьи</Link> | <Link to="/new">Добавить статью</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/new" element={<NewArticle />} />
      </Routes>
    </BrowserRouter>
  );
}
