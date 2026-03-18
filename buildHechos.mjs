import fs from 'fs';
import path from 'path';

const mkdirp = dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const viewsDir = 'src/views/hechos';
const appDir = 'app/hechos';

const components = [
  { name: 'EstructuraHechos', slug: 'estructura', title: 'Estructura' },
  { name: 'TemasHechos', slug: 'temas', title: 'Temas Principales' },
  { name: 'PasajesHechos', slug: 'pasajes', title: 'Pasajes Clave' },
  { name: 'TeologiaHechos', slug: 'teologia', title: 'Enfoque Teológico' },
  { name: 'HistoriaHechos', slug: 'historia', title: 'Contexto Histórico' },
  { name: 'ConclusionHechos', slug: 'conclusion', title: 'Conclusión' }
];

mkdirp(viewsDir);
mkdirp(appDir);

components.forEach(c => {
  // Generate View Component
  const viewContent = `"use client";
import React from "react";
import "../pages.css";

export function ${c.name}() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">${c.title}</h1>
        <p className="subtitle">Explorando el libro de los Hechos de los Apóstoles.</p>
      </header>
      <section className="content-section card">
        <h2>Contenido en construcción</h2>
        <p>Esta sección sigue el esquema oficial de los Evangelios.</p>
      </section>
    </div>
  );
}
`;
  fs.writeFileSync(`${viewsDir}/${c.name}.jsx`, viewContent);

  // Generate Next.js App Route
  mkdirp(`${appDir}/${c.slug}`);
  const pageContent = `import { ${c.name} } from "../../../src/views/hechos/${c.name}";

export default function Page() {
  return <${c.name} />;
}
`;
  fs.writeFileSync(`${appDir}/${c.slug}/page.jsx`, pageContent);
});

// Update LayoutHechos.jsx
let layoutPath = 'src/components/LayoutHechos.jsx';
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

// Replace navItems array
const newNavItems = `const navItems = [
  { path: "/hechos", label: "Introducción", icon: <Info size={20} /> },
  { path: "/hechos/estructura", label: "Estructura", icon: <BookOpen size={20} /> },
  { path: "/hechos/capitulos", label: "Capítulos", icon: <BookOpen size={20} /> },
  { path: "/hechos/temas", label: "Temas Principales", icon: <BookOpen size={20} /> },
  { path: "/hechos/pasajes", label: "Pasajes Clave", icon: <BookOpen size={20} /> },
  { path: "/hechos/teologia", label: "Enfoque Teológico", icon: <Info size={20} /> },
  { path: "/hechos/historia", label: "Contexto Histórico", icon: <BookOpen size={20} /> },
  { path: "/hechos/conclusion", label: "Conclusión", icon: <Info size={20} /> }
];`;

layoutContent = layoutContent.replace(/const navItems = \[[\s\S]*?\];/, newNavItems);
fs.writeFileSync(layoutPath, layoutContent);

console.log("Components created and LayoutHechos updated");
