import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/header';
import HomePage from './pages/HomePage';
import AllEventsPage from './pages/AllEventsPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import Footer from './components/footer';
import TutorialPage from './pages/kickoff';
import ProjectsPage from './pages/ProjectsPage';
import PythonIntro from './pages/events/pythonintro';
import ProjectDetailPage from './ProjectDetailPage';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<AllEventsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/tutorialpage" element={<TutorialPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/pythonintro" element={<PythonIntro />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
