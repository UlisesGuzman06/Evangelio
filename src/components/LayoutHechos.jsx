"use client";
import React, { useState } from "react";
import { Menu, X, BookOpen, ArrowLeft, Info } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Layout.css";

const navItems = [
  { path: "/hechos", label: "Introducción", icon: <Info size={20} /> },
  { path: "/hechos/estructura", label: "Estructura", icon: <BookOpen size={20} /> },
  { path: "/hechos/capitulos", label: "Capítulos", icon: <BookOpen size={20} /> },
  { path: "/hechos/temas", label: "Temas Principales", icon: <BookOpen size={20} /> },
  { path: "/hechos/pasajes", label: "Pasajes Clave", icon: <BookOpen size={20} /> },
  { path: "/hechos/teologia", label: "Enfoque Teológico", icon: <Info size={20} /> },
  { path: "/hechos/historia", label: "Contexto Histórico", icon: <BookOpen size={20} /> },
  { path: "/hechos/conclusion", label: "Conclusión", icon: <Info size={20} /> }
];

export function LayoutHechos({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="app-container">
      <header className="navbar glass-panel">
        <div className="navbar-content container">
          <button className="menu-btn" onClick={toggleSidebar} aria-label="Toggle Menu">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="logo">
            <Link href="/hechos">
              <h1>Hechos de los Apóstoles</h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="main-layout">
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <nav className="sidebar-nav">
            <Link
              href="/"
              className="nav-item"
              style={{ borderBottom: "1px solid var(--color-border)", marginBottom: "0.5rem", paddingBottom: "1rem", color: "var(--color-dark)" }}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="nav-icon"><ArrowLeft size={20} /></span>
              <span className="nav-label">Volver a La Santa Biblia</span>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-item ${pathname === item.path || (item.path === "/hechos/capitulos" && pathname.startsWith("/hechos/capitulos")) ? "active" : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

        <main className="main-content container animate-fade-in">
          {children}
        </main>
      </div>

      <footer className="footer">
        <div className="container">
          <p>Un estudio profundo sobre los Hechos de los Apóstoles.</p>
        </div>
      </footer>
    </div>
  );
}
