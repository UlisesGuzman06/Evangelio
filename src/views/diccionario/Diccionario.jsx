"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Users, ArrowLeft, Search, Library } from 'lucide-react';
import diccionariosData from '../../data/diccionarios.json';
import '../pages.css';

export function Diccionario() {
  const [activeTab, setActiveTab] = useState('terminos');
  const [searchTerm, setSearchTerm] = useState('');

  const normalizeString = (str) => {
    if (!str) return '';
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const terminos = diccionariosData.terminos || [];
  const personajes = diccionariosData.personajes || [];

  const searchNormalized = normalizeString(searchTerm);

  const filteredTerminos = terminos.filter(t => 
    normalizeString(t.termino).includes(searchNormalized)
  ).sort((a, b) => (a.termino || '').localeCompare(b.termino || ''));

  const filteredPersonajes = personajes.filter(p => 
    normalizeString(p.nombre).includes(searchNormalized)
  ).sort((a, b) => (a.nombre || '').localeCompare(b.nombre || ''));

  return (
    <div className="app-container">
      {/* Header elegante */}
      <header style={{
        borderBottom: "1px solid var(--color-border)",
        padding: "1.5rem 0",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", color: "var(--color-dark)", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "600" }}>
            <ArrowLeft size={20} />
            <span className="hide-mobile-text">Volver</span>
          </Link>
          <Link href="/" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <Library size={22} style={{ color: "var(--color-accent)" }} />
              <span style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "var(--color-dark)",
                letterSpacing: "0.02em",
              }}>La Santa Biblia</span>
            </div>
          </Link>
          <div style={{ width: "80px" }}></div>
        </div>
      </header>

      <main className="main-content container animate-fade-in" style={{ padding: "2rem 1rem" }}>
        <div className="page-container" style={{ marginTop: "0" }}>
          <header className="page-header text-center">
            <h1 className="title-large">Diccionario Bíblico</h1>
            <p className="subtitle">Explora los términos y personajes bíblicos para profundizar en tu estudio</p>
          </header>

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem"
          }}>
            <button 
              onClick={() => setActiveTab('terminos')}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "30px",
                border: "none",
                background: activeTab === 'terminos' ? "var(--color-accent)" : "var(--color-bg-alt)",
                color: activeTab === 'terminos' ? "white" : "var(--color-text)",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              <Book size={20} />
              Términos
            </button>
            <button 
              onClick={() => setActiveTab('personajes')}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "30px",
                border: "none",
                background: activeTab === 'personajes' ? "var(--color-accent)" : "var(--color-bg-alt)",
                color: activeTab === 'personajes' ? "white" : "var(--color-text)",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              <Users size={20} />
              Personajes
            </button>
          </div>

          <div style={{ position: "relative", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem auto" }}>
            <div style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--color-text-light)" }}>
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder={`Buscar ${activeTab === 'terminos' ? 'términos' : 'personajes'}...`} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "1rem 1rem 1rem 3rem",
                borderRadius: "8px",
                border: "1px solid var(--color-border)",
                fontSize: "1.1rem",
                outline: "none",
                boxShadow: "var(--shadow-sm)",
                fontFamily: "var(--font-body)"
              }}
            />
          </div>

          {activeTab === 'terminos' ? (
            <div className="grid-2">
              {filteredTerminos.length > 0 ? (
                filteredTerminos.map((item, index) => (
                  <div key={index} className="card border-accent highlight-card" style={{ display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: "1.3rem", color: "var(--color-accent)", marginBottom: "0.5rem" }}>
                      {item.termino}
                    </h2>
                    {item.categoria && (
                      <span style={{ 
                        display: "inline-block", 
                        padding: "0.25rem 0.75rem", 
                        background: "var(--color-bg-alt)", 
                        color: "var(--color-dark)", 
                        borderRadius: "20px", 
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        marginBottom: "1rem",
                        alignSelf: "flex-start"
                      }}>
                        {item.categoria}
                      </span>
                    )}
                    <p style={{ margin: 0, color: "var(--color-text)", lineHeight: "1.6" }}>
                      {item.definicion}
                    </p>
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--color-text-light)" }}>
                  No se encontraron términos que coincidan con la búsqueda.
                </div>
              )}
            </div>
          ) : (
            <div className="grid-2">
              {filteredPersonajes.length > 0 ? (
                filteredPersonajes.map((item, index) => (
                  <div key={index} className="card border-dark highlight-card" style={{ display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: "1.3rem", color: "var(--color-dark)", marginBottom: "0.5rem" }}>
                      {item.nombre}
                    </h2>
                    {item.rol && (
                      <span style={{ 
                        display: "inline-block", 
                        padding: "0.25rem 0.75rem", 
                        background: "var(--color-bg-alt)", 
                        color: "var(--color-dark)", 
                        borderRadius: "20px", 
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        marginBottom: "1rem",
                        alignSelf: "flex-start"
                      }}>
                        {item.rol}
                      </span>
                    )}
                    <p style={{ margin: 0, color: "var(--color-text)", lineHeight: "1.6" }}>
                      {item.descripcion}
                    </p>
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--color-text-light)" }}>
                  No se encontraron personajes que coincidan con la búsqueda.
                </div>
              )}
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid var(--color-border)",
        padding: "1.5rem 0",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        marginTop: "auto"
      }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "0.4rem" }}>
            <Library size={16} style={{ color: "var(--color-accent)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: "600", color: "var(--color-dark)" }}>La Santa Biblia</span>
          </div>
          <p style={{ color: "var(--color-text-light)", fontSize: "0.85rem", fontFamily: "var(--font-ui)" }}>Un estudio profundo sobre la Palabra de Dios.</p>
        </div>
      </footer>
    </div>
  );
}
