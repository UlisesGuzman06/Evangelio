import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
import { LayoutJuan } from "./components/LayoutJuan";
import { IntroduccionJuan } from "./pages/juan/IntroduccionJuan";
import { EstructuraJuan } from "./pages/juan/EstructuraJuan";

import { CapitulosJuan } from "./pages/juan/CapitulosJuan";
import { TemasJuan } from "./pages/juan/TemasJuan";
import { PasajesJuan } from "./pages/juan/PasajesJuan";
import { TeologiaJuan } from "./pages/juan/TeologiaJuan";
import { HistoriaJuan } from "./pages/juan/HistoriaJuan";
import { ConclusionJuan } from "./pages/juan/ConclusionJuan";
import { Home } from "./pages/Home";
import { LayoutMateo } from "./components/LayoutMateo";
import { IntroduccionMateo } from "./pages/mateo/IntroduccionMateo";
import { EstructuraMateo } from "./pages/mateo/EstructuraMateo";
import { CapitulosMateo } from "./pages/mateo/CapitulosMateo";
import { TemasMateo } from "./pages/mateo/TemasMateo";
import { PasajesMateo } from "./pages/mateo/PasajesMateo";
import { TeologiaMateo } from "./pages/mateo/TeologiaMateo";
import { HistoriaMateo } from "./pages/mateo/HistoriaMateo";
import { ConclusionMateo } from "./pages/mateo/ConclusionMateo";

import { LayoutMarcos } from "./components/LayoutMarcos";
import { IntroduccionMarcos } from "./pages/marcos/IntroduccionMarcos";
import { EstructuraMarcos } from "./pages/marcos/EstructuraMarcos";
import { CapitulosMarcos } from "./pages/marcos/CapitulosMarcos";
import { TemasMarcos } from "./pages/marcos/TemasMarcos";
import { PasajesMarcos } from "./pages/marcos/PasajesMarcos";
import { TeologiaMarcos } from "./pages/marcos/TeologiaMarcos";
import { HistoriaMarcos } from "./pages/marcos/HistoriaMarcos";
import { ConclusionMarcos } from "./pages/marcos/ConclusionMarcos";

import { LayoutLucas } from "./components/LayoutLucas";
import { IntroduccionLucas } from "./pages/lucas/IntroduccionLucas";
import { EstructuraLucas } from "./pages/lucas/EstructuraLucas";
import { CapitulosLucas } from "./pages/lucas/CapitulosLucas";
import { TemasLucas } from "./pages/lucas/TemasLucas";
import { PasajesLucas } from "./pages/lucas/PasajesLucas";
import { TeologiaLucas } from "./pages/lucas/TeologiaLucas";
import { HistoriaLucas } from "./pages/lucas/HistoriaLucas";
import { ConclusionLucas } from "./pages/lucas/ConclusionLucas";
import { SantoBiografia } from "./pages/SantoBiografia";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Evangelio de Mateo */}
        <Route
          path="/mateo"
          element={
            <LayoutMateo>
              <Outlet />
            </LayoutMateo>
          }
        >
          <Route index element={<IntroduccionMateo />} />
          <Route path="estructura" element={<EstructuraMateo />} />
          <Route path="capitulos/*" element={<CapitulosMateo />} />
          <Route path="temas" element={<TemasMateo />} />
          <Route path="pasajes" element={<PasajesMateo />} />
          <Route path="teologia" element={<TeologiaMateo />} />
          <Route path="historia" element={<HistoriaMateo />} />
          <Route path="conclusion" element={<ConclusionMateo />} />
        </Route>

        {/* Evangelio de Marcos */}
        <Route
          path="/marcos"
          element={
            <LayoutMarcos>
              <Outlet />
            </LayoutMarcos>
          }
        >
          <Route index element={<IntroduccionMarcos />} />
          <Route path="estructura" element={<EstructuraMarcos />} />
          <Route path="capitulos/*" element={<CapitulosMarcos />} />
          <Route path="temas" element={<TemasMarcos />} />
          <Route path="pasajes" element={<PasajesMarcos />} />
          <Route path="teologia" element={<TeologiaMarcos />} />
          <Route path="historia" element={<HistoriaMarcos />} />
          <Route path="conclusion" element={<ConclusionMarcos />} />
        </Route>

        {/* Evangelio de Lucas */}
        <Route
          path="/lucas"
          element={
            <LayoutLucas>
              <Outlet />
            </LayoutLucas>
          }
        >
          <Route index element={<IntroduccionLucas />} />
          <Route path="estructura" element={<EstructuraLucas />} />
          <Route path="capitulos/*" element={<CapitulosLucas />} />
          <Route path="temas" element={<TemasLucas />} />
          <Route path="pasajes" element={<PasajesLucas />} />
          <Route path="teologia" element={<TeologiaLucas />} />
          <Route path="historia" element={<HistoriaLucas />} />
          <Route path="conclusion" element={<ConclusionLucas />} />
        </Route>

        {/* Evangelio de Juan */}
        <Route
          path="/juan"
          element={
            <LayoutJuan>
              <Outlet />
            </LayoutJuan>
          }
        >
          <Route index element={<IntroduccionJuan />} />
          <Route path="estructura" element={<EstructuraJuan />} />
          <Route path="capitulos/*" element={<CapitulosJuan />} />
          <Route path="temas" element={<TemasJuan />} />
          <Route path="pasajes" element={<PasajesJuan />} />
          <Route path="teologia" element={<TeologiaJuan />} />
          <Route path="historia" element={<HistoriaJuan />} />
          <Route path="conclusion" element={<ConclusionJuan />} />
        </Route>

        <Route path="/santo-biografia/:id" element={<SantoBiografia />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
