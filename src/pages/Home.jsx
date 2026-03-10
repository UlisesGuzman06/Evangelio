import React from "react";
import { Link } from "react-router-dom";
import { Book, Library } from "lucide-react";
import { EvangelioDelDia } from "../components/EvangelioDelDia";
import "./pages.css";

export function Home() {
  return (
    <div className="app-container">
      {/* Navbar Minimalista */}
      <header className="navbar glass-panel">
        <div
          className="navbar-content container"
          style={{ justifyContent: "center" }}
        >
          <div className="logo text-center">
            <Link to="/">
              <h1
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Library size={24} /> La Santa Biblia
              </h1>
            </Link>
          </div>
        </div>
      </header>

      <main
        className="main-content container animate-fade-in"
        style={{ padding: "2rem 1rem" }}
      >
        <div className="page-container" style={{ marginTop: "0" }}>
          <header className="page-header text-center">
            <h1 className="title-large">La Palabra que se hizo carne</h1>
            <p className="subtitle">
              Explora los relatos de la vida, enseñanzas, muerte y resurrección
              de Jesucristo.
            </p>
          </header>

          <EvangelioDelDia />

          <div className="grid-2" style={{ alignItems: "stretch" }}>
            <Link
              to="/mateo"
              className="card highlight-card border-accent"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Book
                  size={24}
                  style={{ color: "var(--color-accent)", marginRight: "10px" }}
                />
                <h2
                  style={{
                    fontSize: "1.5rem",
                    margin: 0,
                    color: "var(--color-accent)",
                    borderBottom: "none",
                    paddingBottom: 0,
                  }}
                >
                  Evangelio según Mateo
                </h2>
              </div>
              <p
                style={{
                  color: "var(--color-text)",
                  marginBottom: "0",
                  flexGrow: 1,
                }}
              >
                Escrito para una audiencia judía, presenta a Jesús como el
                Mesías prometido y el Rey de Israel cumpliendo las profecías del
                Antiguo Testamento.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "1rem",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    color: "var(--color-accent)",
                    fontWeight: "600",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.95rem",
                  }}
                >
                  Leer ahora →
                </span>
              </div>
            </Link>

            <Link
              to="/marcos"
              className="card highlight-card border-accent"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Book
                  size={24}
                  style={{ color: "var(--color-accent)", marginRight: "10px" }}
                />
                <h2
                  style={{
                    fontSize: "1.5rem",
                    margin: 0,
                    color: "var(--color-accent)",
                    borderBottom: "none",
                    paddingBottom: 0,
                  }}
                >
                  Evangelio según Marcos
                </h2>
              </div>
              <p
                style={{
                  color: "var(--color-text)",
                  marginBottom: "0",
                  flexGrow: 1,
                }}
              >
                Un relato rápido y enfocado en la acción, resalta a Jesús como
                el Siervo sufriente actuando con poder y autoridad divinos.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "1rem",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    color: "var(--color-accent)",
                    fontWeight: "600",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.95rem",
                  }}
                >
                  Leer ahora →
                </span>
              </div>
            </Link>

            <Link
              to="/lucas"
              className="card highlight-card border-accent"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Book
                  size={24}
                  style={{ color: "var(--color-accent)", marginRight: "10px" }}
                />
                <h2
                  style={{
                    fontSize: "1.5rem",
                    margin: 0,
                    color: "var(--color-accent)",
                    borderBottom: "none",
                    paddingBottom: 0,
                  }}
                >
                  Evangelio según Lucas
                </h2>
              </div>
              <p
                style={{
                  color: "var(--color-text)",
                  marginBottom: "0",
                  flexGrow: 1,
                }}
              >
                El evangelio más detallado e histórico, enfatiza la humanidad de
                Jesús, su compasión por los marginados y la obra del Espíritu
                Santo.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "1rem",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    color: "var(--color-accent)",
                    fontWeight: "600",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.95rem",
                  }}
                >
                  Leer ahora →
                </span>
              </div>
            </Link>

            <Link
              to="/juan"
              className="card highlight-card border-accent"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Book
                  size={24}
                  style={{ color: "var(--color-accent)", marginRight: "10px" }}
                />
                <h2
                  style={{
                    fontSize: "1.5rem",
                    margin: 0,
                    color: "var(--color-accent)",
                    borderBottom: "none",
                    paddingBottom: 0,
                  }}
                >
                  Evangelio según Juan
                </h2>
              </div>
              <p
                style={{
                  color: "var(--color-text)",
                  marginBottom: "0",
                  flexGrow: 1,
                }}
              >
                El evangelio teológico y espiritual que revela profundamente la
                identidad divina de Jesucristo como el Verbo encarnado.
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "1rem",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    color: "var(--color-accent)",
                    fontWeight: "600",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.95rem",
                  }}
                >
                  Leer ahora →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="footer" style={{ borderTop: "none", paddingTop: "0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p>Un estudio profundo sobre La Santa Biblia.</p>
        </div>
      </footer>
    </div>
  );
}
