import React, { useState, useEffect } from "react";
import { BookOpen, ChevronRight, Loader, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

// Configuración de APIs
const BIBLE_ID = "592420522e16049f-01"; // RVR1960
const API_KEY = import.meta.env.VITE_BIBLE_API_KEY;
const API_BIBLE_URL = "https://rest.api.bible/v1";
const EVANGELIZO_URL = "https://feed.evangelizo.org/v2/reader.php";

// Mapeo de abreviaturas de Evangelizo a API.Bible
const BOOK_MAPPING = {
  "Mt": "MAT", "Mateo": "MAT",
  "Mc": "MRK", "Marcos": "MRK",
  "Lc": "LUK", "Lucas": "LUK",
  "Jn": "JHN", "Juan": "JHN"
};

const NOMBRES_EVANGELIO = {
  "MAT": "Mateo",
  "MRK": "Marcos",
  "LUK": "Lucas",
  "JHN": "Juan"
};

function parseReference(raw) {
  // Limpiar HTML de la referencia (como el <font dir="ltr">)
  let clean = raw.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  
  // Ejemplos: "Mt 18,21-35", "Lc 1,1-4", "Jn 3,16"
  // El formato de Evangelizo usa coma para separar capítulo de versículo
  const match = clean.match(/^([a-zA-ZáéíóúÁÉÍÓÚ]+)\s+(\d+),(\d+)(?:-(\d+))?$/);
  
  if (!match) return null;

  const [_, bookKey, chapter, startVerse, endVerse] = match;
  const bibleBook = BOOK_MAPPING[bookKey.replace(".", "")] || bookKey;
  
  const startId = `${bibleBook}.${chapter}.${startVerse}`;
  if (!endVerse) return { id: startId, book: bibleBook, chapter };
  
  const endId = `${bibleBook}.${chapter}.${endVerse}`;
  return { id: `${startId}-${endId}`, book: bibleBook, chapter };
}

function decodeHTMLEntities(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

function limpiarTexto(html) {
  if (!html) return "";
  let clean = html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "")
    // Borrar agresivamente cualquier mención al Libro del Pueblo de Dios o Evangelizo
    .split(/Extraído de la Biblia/i)[0]
    .split(/Para recibir cada mañana/i)[0]
    .split(/evangeliodeldia/i)[0]
    .trim();
    
  clean = decodeHTMLEntities(clean);
  // Quitar la referencia si viene al inicio (ej: "Mt 18,21.")
  return clean.replace(/\s+/g, " ").replace(/^([a-zA-ZáéíóúÁÉÍÓÚ]{1,3}\s+\d+,\d+[-]?\d*[\s.:]*)+/i, "").trim();
}

export function EvangelioDelDia() {
  const [data, setData] = useState({
    texto: "",
    ref: "",
    refParsed: null
  });
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    async function fetchEvangelioCompleto() {
      try {
        const hoy = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        
        // 1. Obtener la referencia
        const resRef = await fetch(`${EVANGELIZO_URL}?date=${hoy}&lang=SP&type=reading_st&content=GSP`);
        const rawRef = await resRef.text();
        const refParsed = parseReference(rawRef);

        let textoFinal = "";

        // 2. Intentar buscar en API.Bible (RVR1960)
        if (refParsed && API_KEY && API_KEY !== "TU_API_KEY_AQUI") {
          try {
            const resBible = await fetch(
              `${API_BIBLE_URL}/bibles/${BIBLE_ID}/passages/${refParsed.id}?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=false`,
              { headers: { "api-key": API_KEY } }
            );
            if (resBible.ok) {
              const bibleData = await resBible.json();
              textoFinal = bibleData.data.content.trim();
            }
          } catch (e) { }
        }

        // 3. Fallback a Evangelizo limpio
        if (!textoFinal) {
          const resText = await fetch(`${EVANGELIZO_URL}?date=${hoy}&lang=SP&type=reading&content=GSP`);
          const htmlText = await resText.text();
          textoFinal = limpiarTexto(htmlText);
        }

        setData({
          texto: textoFinal,
          ref: rawRef.replace(/<[^>]*>/g, "").replace(".", "").trim(),
          refParsed: refParsed
        });
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setCargando(false);
        setTimeout(() => setVisible(true), 50);
      }
    }
    fetchEvangelioCompleto();
  }, []);

  const toggleExpand = () => setExpanded(!expanded);

  const hoy = new Date();
  const diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  const fechaFormateada = `${diasSemana[hoy.getDay()]} ${hoy.getDate()} de ${meses[hoy.getMonth()]}`;

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        margin: "2.5rem 0",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        border: "1px solid var(--color-border)",
        background: "white",
      }}
    >
      {/* Header / Trigger */}
      <div
        onClick={toggleExpand}
        style={{
          background: "linear-gradient(135deg, var(--color-accent) 0%, #8b0000 100%)",
          padding: "1.2rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ background: "rgba(255,255,255,0.2)", padding: "8px", borderRadius: "10px" }}>
            <BookOpen size={22} style={{ color: "white" }} />
          </div>
          <div>
            <span style={{ color: "white", fontFamily: "var(--font-heading)", fontWeight: "800", fontSize: "1.1rem", display: "block", letterSpacing: "0.02em" }}>
              Evangelio del día: {data.ref || "Cargando..."}
            </span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", fontFamily: "var(--font-ui)", textTransform: "uppercase" }}>
              Reina Valera 1960
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ color: "white", background: "rgba(255,255,255,0.2)", borderRadius: "50%", padding: "5px", display: "flex" }}>
            {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>
      </div>

      {/* Contenido Colapsable */}
      <div 
        style={{ 
          maxHeight: expanded ? "2000px" : "0px",
          transition: "max-height 0.8s cubic-bezier(0, 1, 0, 1)",
          overflow: "hidden",
          background: "white"
        }}
      >
        <div style={{ padding: "2.2rem 2.5rem" }}>
          {cargando ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", padding: "40px 0" }}>
              <RefreshCw size={30} style={{ color: "var(--color-accent)", animation: "spin 2s linear infinite" }} />
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "1rem", color: "var(--color-text-light)" }}>Consultando el leccionario de hoy...</span>
            </div>
          ) : error ? (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <p style={{ color: "var(--color-text-light)", fontStyle: "italic", fontFamily: "var(--font-body)" }}>
                No se pudo sincronizar el evangelio. Por favor intente más tarde.
              </p>
            </div>
          ) : (
            <>
              <div style={{ position: "relative" }}>
                 <span style={{ position: "absolute", left: "-15px", top: "-10px", fontSize: "4rem", color: "rgba(181, 152, 90, 0.1)", fontFamily: "serif", lineHeight: "1" }}>“</span>
                 <p
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: "1.8",
                    fontFamily: "var(--font-body)",
                    color: "var(--color-text)",
                    fontStyle: "italic",
                    margin: "0 0 2rem 0",
                    paddingLeft: "10px"
                  }}
                >
                  {data.texto}
                </p>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: "800", color: "var(--color-accent)", fontSize: "1.3rem" }}>
                    {data.ref}
                  </span>
                </div>
                
                {data.refParsed && (
                  <Link
                    to={`/${NOMBRES_EVANGELIO[data.refParsed.book].toLowerCase()}/capitulos/${data.refParsed.chapter}`}
                    className="btn-hover-effect"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "var(--color-accent)",
                      color: "white",
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      padding: "12px 24px",
                      borderRadius: "30px",
                      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      boxShadow: "0 4px 15px rgba(181, 152, 90, 0.3)"
                    }}
                  >
                    Leer Capítulo Completo <ChevronRight size={18} />
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .btn-hover-effect:hover { 
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(181, 152, 90, 0.4);
        }
      `}</style>
    </div>
  );
}
