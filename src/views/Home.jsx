import React from "react";
import Link from 'next/link';
import { Book, Library } from "lucide-react";
import { EvangelioDelDia } from "../components/EvangelioDelDia";
import "./pages.css";

export function Home() {
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
          <div style={{ width: "100px" }} className="hide-mobile-text"></div>
          <Link href="/" style={{ textDecoration: "none", color: "inherit", cursor: "default" }}>
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
          <Link href="/diccionario" style={{ textDecoration: "none", color: "var(--color-accent)", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Book size={18} />
            <span className="hide-mobile-text">Diccionario</span>
          </Link>
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
              href="/mateo"
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
              href="/marcos"
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
              href="/lucas"
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
              href="/juan"
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

            <Link
              href="/hechos"
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
                  Hechos de los Apóstoles
                </h2>
              </div>
              <p
                style={{
                  color: "var(--color-text)",
                  marginBottom: "0",
                  flexGrow: 1,
                }}
              >
                El inicio de la Iglesia primitiva bajo el poder del Espíritu Santo, conectando los Evangelios con las Epístolas.
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

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid var(--color-border)",
        padding: "1.5rem 0",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
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
