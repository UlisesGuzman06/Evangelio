import React, { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  FileText,
  Info,
  Compass,
  Sunrise,
  ArrowLeft,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Layout.css";

const navItems = [
  { path: "/marcos", label: "Introducción", icon: <Info size={20} /> },
  {
    path: "/marcos/estructura",
    label: "Estructura",
    icon: <BookOpen size={20} />,
  },
  {
    path: "/marcos/capitulos",
    label: "Capítulos",
    icon: <FileText size={20} />,
  },
  {
    path: "/marcos/temas",
    label: "Temas Principales",
    icon: <Compass size={20} />,
  },
  {
    path: "/marcos/pasajes",
    label: "Pasajes Clave",
    icon: <Sunrise size={20} />,
  },
  {
    path: "/marcos/teologia",
    label: "Enfoque Teológico",
    icon: <Info size={20} />,
  },
  {
    path: "/marcos/historia",
    label: "Contexto Histórico",
    icon: <BookOpen size={20} />,
  },
  { path: "/marcos/conclusion", label: "Conclusión", icon: <Info size={20} /> },
];

export function LayoutMarcos({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="app-container">
      {/* Navbar Mobile/Header */}
      <header className="navbar glass-panel">
        <div className="navbar-content container">
          <button
            className="menu-btn"
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="logo">
            <Link to="/marcos">
              <h1>El Evangelio de Marcos</h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <nav className="sidebar-nav">
            <Link
              to="/"
              className="nav-item"
              style={{
                borderBottom: "1px solid var(--color-border)",
                marginBottom: "0.5rem",
                paddingBottom: "1rem",
                color: "var(--color-dark)",
              }}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="nav-icon">
                <ArrowLeft size={20} />
              </span>
              <span className="nav-label">Volver a La Santa Biblia</span>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path || (item.path === "/marcos/capitulos" && location.pathname.startsWith("/marcos/capitulos")) ? "active" : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        )}

        {/* Main Content */}
        <main className="main-content container animate-fade-in">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Un estudio profundo sobre el Evangelio de Marcos.</p>
        </div>
      </footer>
    </div>
  );
}
