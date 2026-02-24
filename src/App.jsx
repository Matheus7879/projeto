import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { useState } from "react";
import { DocsPage } from "./pages/DocsPage";
import { ShowCasePage } from "./pages/ShowCasePage";
import { BlogPage } from "./pages/BlogPage";
import { SponsorPage } from "./pages/SponsorPage";
import { PlusPage } from "./pages/PlusPage";
import { GitPage } from "./pages/GitPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { TemplatePage } from "./pages/TemplatePage"
import { UIkitPage } from "./pages/UIkitPage"
import { PlayPage } from "./pages/PlayPlage";
import { CoursePage } from "./pages/CoursePage"
import { CommunityPage } from "./pages/CommunityPage"

function App() {

  const [page, setPage] = useState('home');


  const pagina = () => {
    switch (page) {
      case 'home':
        return <HomePage />
      case 'docs':
        return <DocsPage onChange={setPage} />
      case 'case':
        return <ShowCasePage />
      case 'blog':
        return <BlogPage />
      case 'sponsor':
        return <SponsorPage />
      case 'plus':
        return <PlusPage />
      case 'github':
        return <GitPage />
      case 'comp':
        return <ComponentsPage />
      case 'temp':
        return <TemplatePage />
      case 'ui':
        return <UIkitPage />
      case 'play':
        return <PlayPage />
      case 'curso':
        return <CoursePage />
      case 'comu':
        return <CommunityPage />
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