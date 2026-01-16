import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { useState } from "react";
import { DocsPage } from "./pages/DocsPage";
import { ShowCasePage } from "./pages/ShowCasePage";
import { BlogPage } from "./pages/BlogPage";
import { SponsorPage } from "./pages/SponsorPage";
import { PlusPage } from "./pages/PlusPage";

function App() {

  const [page, setPage] = useState('home');


  const pagina = () => {
    switch (page) {
      case 'home':
        return <HomePage />
      case 'docs':
        return <DocsPage />
      case 'case':
        return <ShowCasePage />
      case 'blog':
        return <BlogPage />
      case 'sponsor':
        return <SponsorPage />
      case 'plus':
        return <PlusPage />
      default:
        return <HomePage />
    }
  }


  return (
    <div>
      <Header page={page} onChange={setPage} />
      {pagina()}
    </div>
  );
}

export default App