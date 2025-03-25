import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import AllEventsPage from "./pages/AllEventsPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import Footer from "./components/footer";

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
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
