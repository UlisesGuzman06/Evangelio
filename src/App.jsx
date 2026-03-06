import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Introduccion } from "./pages/Introduccion";
import { Estructura } from "./pages/Estructura";

import { Capitulos } from "./pages/Capitulos";
import { Temas } from "./pages/Temas";
import { Pasajes } from "./pages/Pasajes";
import { Teologia } from "./pages/Teologia";
import { Historia } from "./pages/Historia";
import { Conclusion } from "./pages/Conclusion";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Introduccion />} />
          <Route path="/estructura" element={<Estructura />} />
          <Route path="/capitulos/*" element={<Capitulos />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/pasajes" element={<Pasajes />} />
          <Route path="/teologia" element={<Teologia />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
