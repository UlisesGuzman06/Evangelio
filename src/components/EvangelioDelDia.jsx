"use client";
import React, { useState, useEffect } from "react";
import { BookOpen, ChevronRight, RefreshCw, ChevronDown, ChevronUp, Sparkles, Music } from "lucide-react";
import Link from 'next/link';

// Configuración de APIs
const BIBLE_ID = "592420522e16049f-01"; // RVR1960
const API_KEY = process.env.NEXT_PUBLIC_BIBLE_API_KEY;
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
    .split(/Extraído de la Biblia/i)[0]
    .split(/Para recibir cada mañana/i)[0]
    .split(/evangeliodeldia/i)[0]
    .trim();
    
  clean = decodeHTMLEntities(clean);
  // Limpiar códigos de versículos al inicio o entre el texto si los hubiera
  return clean
    .replace(/\s+/g, " ")
    .replace(/^([a-zA-ZáéíóúÁÉÍÓÚ]{1,3}\s+\d+,\d+[-]?\d*[a-z]*[\s.:]*)+/i, "")
    .trim();
}

function limpiarReferenciaSalmo(ref) {
  if (!ref) return "";
  return ref
    .replace(/<[^>]*>/g, "") // Quitar HTML
    .replace(/Ps/g, "Salmo")  // Cambiar Ps por Salmo
    .replace(/([0-9]+)[a-z]+/g, "$1") // Quitar sufijos técnicos como 4bc, 5ab
    .replace(/\./g, ". ")      // Añadir espacio tras los puntos
    .replace(/,/g, ", ")      // Añadir espacio tras las comas
    .replace(/\s+/g, " ")     // Quitar espacios dobles
    .trim();
}

export function EvangelioDelDia() {
  const [data, setData] = useState({
    texto: "",
    ref: "",
    refParsed: null,
    santo: "",
    santoBio: "",
    santoResumen: "",
    santoId: "",
    salmo: "",
    salmoRef: "",
    lecturas: [], // Array para Primera y Segunda lectura
    santoImage: "/santo_del_dia.png",
  });
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expandedGsp, setExpandedGsp] = useState(false);
  const [expandedPsl, setExpandedPsl] = useState(false);

  useEffect(() => {
    async function fetchLiturgiaCompleta() {
      try {
        const hoy = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        
        // 1. Obtener la referencia del Evangelio
        const resRef = await fetch(`${EVANGELIZO_URL}?date=${hoy}&lang=SP&type=reading_st&content=GSP`);
        const rawRef = await resRef.text();
        const refParsed = parseReference(rawRef);

        let textoFinal = "";

        // 2. Intentar buscar en API.Bible (RVR1960)
        if (refParsed && API_KEY) {
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

        if (!textoFinal) {
          const resText = await fetch(`${EVANGELIZO_URL}?date=${hoy}&lang=SP&type=reading&content=GSP`);
          const htmlText = await resText.text();
          textoFinal = limpiarTexto(htmlText);
        }

        // Santo del Día (con ID para biografía e imagen)
        let santoNombre = "";
        let santoBio = "";
        let santoResumen = "";
        let santoImg = "";
        let currentSantoId = "";
        try {
          // Primero obtenemos el nombre y el link (HTML)
          const resSaint = await fetch(`${EVANGELIZO_URL}?date=${hoy}&lang=SP&type=saint`);
          const rawSaint = await resSaint.text();
          
          // Extraer ID del link (ej: display_saint.php?id=...)
          const idMatch = rawSaint.match(/id=([^"&'\s>]+)/);
          if (idMatch) currentSantoId = idMatch[1];
          
          santoNombre = rawSaint
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
            .replace(/<[^>]*>/g, " ")
            .split("\n")[0].trim();
          
          if (currentSantoId) {
            const resBio = await fetch(`https://feed.evangelizo.org/v2/display_saint.php?id=${currentSantoId}&lang=SP`);
            const htmlBio = await resBio.text();
            
            // Extraer imagen
            const imgMatch = htmlBio.match(/https:\/\/files\.evangelizo\.org\/images\/santibeati\/[^"']+/);
            if (imgMatch) santoImg = imgMatch[0];
            
            // Limpiar biografía (Extraer solo el texto relevante)
            let cleanedBio = htmlBio
              .replace(/<head>[\s\S]*?<\/head>/gi, "") // Eliminar cabecera HTML
              .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "") // Eliminar scripts
              .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")  // Eliminar estilos CSS
              .replace(/<[^>]*>/g, " ") // Eliminar todas las etiquetas HTML
              .replace(/\s+/g, " ") // Colapsar espacios
              .trim();

            // Función para decodificar entidades HTML (ej: &oacute; -> ó)
            const decodeHtml = (html) => {
              const txt = document.createElement("textarea");
              txt.innerHTML = html;
              return txt.value;
            };

            // Intentar encontrar el inicio real de la biografía tras los títulos
            const markers = ["Biografía", "Vida de", "Santo del día:", "Saint of the day:"];
            let bioText = cleanedBio;
            
            for (const marker of markers) {
              if (cleanedBio.includes(marker)) {
                const parts = cleanedBio.split(marker);
                if (parts[1]) {
                  bioText = parts[1].trim();
                  break;
                }
              }
            }

            // Aplicar decodificación final
            const fullBio = decodeHtml(bioText.trim());
            santoBio = fullBio;
            santoResumen = fullBio.substring(0, 200).trim() + "...";
            santoNombre = decodeHtml(santoNombre);
          }
        } catch (e) {
          console.log("Error fetching saint details:", e);
        }

        // Salmo del Día
        let salmoTexto = "";
        let salmoRef = "";
        try {
          const resPSL = await fetch(`${EVANGELIZO_URL}?date=${hoy}&lang=SP&type=reading&content=PS`);
          const rawPSL = await resPSL.text();
          salmoTexto = limpiarTexto(rawPSL);
          
          const resPSLRef = await fetch(`${EVANGELIZO_URL}?date=${hoy}&lang=SP&type=reading_st&content=PS`);
          const rawPSLRef = await resPSLRef.text();
          salmoRef = limpiarReferenciaSalmo(rawPSLRef);
        } catch (e) {}

        // Lecturas del Día (FR, SR)
        const lecturasFinales = [];
        const readingTypes = ["FR", "SR"];
        for (const type of readingTypes) {
          try {
            const resRef = await fetch(`${EVANGELIZO_URL}?date=${hoy}&lang=SP&type=reading_st&content=${type}`);
            const rawRef = await resRef.text();
            
            // Si la respuesta contiene "Error" o es el manual de ayuda, no es una lectura válida
            if (rawRef && !rawRef.includes("Error") && !rawRef.includes("SYNOPSIS") && rawRef.trim().length > 0) {
              const resText = await fetch(`${EVANGELIZO_URL}?date=${hoy}&lang=SP&type=reading&content=${type}`);
              const rawText = await resText.text();
              
              if (rawText && !rawText.includes("Error")) {
                lecturasFinales.push({
                  ref: rawRef.replace(/<[^>]*>/g, "").trim(),
                  texto: limpiarTexto(rawText)
                });
              }
            }
          } catch (e) {}
        }

        setData(prev => ({
          ...prev,
          texto: textoFinal,
          ref: rawRef.replace(/<[^>]*>/g, "").replace(".", "").trim(),
          refParsed: refParsed,
          santo: santoNombre,
          santoBio: santoBio,
          santoResumen: santoResumen,
          santoId: currentSantoId,
          santoImage: santoImg || "/santo_del_dia.png",
          salmo: salmoTexto,
          salmoRef: salmoRef,
          lecturas: lecturasFinales
        }));
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setCargando(false);
        setTimeout(() => setVisible(true), 50);
      }
    }
    fetchLiturgiaCompleta();
  }, []);

  const [expanded, setExpanded] = useState(false);
  if (cargando) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", padding: "60px 20px" }}>
        <RefreshCw size={40} style={{ color: "var(--color-accent)", animation: "spin 2s linear infinite" }} />
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "1.1rem", color: "var(--color-text-light)" }}>Preparando la liturgia de hoy...</span>
      </div>
    );
  }

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: "2.5rem", 
      margin: "3rem 0",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: "all 0.8s ease-out"
    }}>
      
      {/* 1. SECCIÓN: SANTO DEL DÍA (Independiente) */}
      {data.santo && (
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          border: "1px solid var(--color-border)",
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          gap: "2rem",
          alignItems: "center"
        }}>
          {data.santoImage && (
            <div style={{ 
              width: "180px", 
              height: "180px", 
              borderRadius: "50%", 
              overflow: "hidden", 
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)", 
              flexShrink: 0,
              border: "4px solid white"
            }}>
              <img src={data.santoImage} alt={data.santo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
              <Sparkles size={20} style={{ color: "var(--color-accent)" }} />
              <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.4rem", color: "var(--color-dark)" }}>
                Santo del día: {data.santo}
              </h3>
            </div>
            {data.santoId && (
              <Link 
                href={`/santo-biografia/${data.santoId}`}
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  color: "var(--color-accent)", 
                  textDecoration: "none", 
                  fontWeight: "700",
                  fontSize: "1rem",
                  borderBottom: "2px solid var(--color-accent)",
                  paddingBottom: "2px",
                  transition: "all 0.2s ease"
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = "0.7"}
                onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
              >
                Ver biografía completa <ChevronRight size={18} />
              </Link>
            )}
          </div>
        </div>
      )}

      {/* 2. SECCIÓN: LECTURAS DEL DÍA */}
      {data.lecturas.map((lectura, index) => (
        <div key={index} style={{
          background: "white",
          borderRadius: "16px",
          padding: "2.5rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          border: "1px solid var(--color-border)",
          position: "relative"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ background: "rgba(0,0,0,0.03)", padding: "10px", borderRadius: "12px" }}>
              <BookOpen size={24} style={{ color: "var(--color-dark)" }} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--color-dark)" }}>
                {index === 0 ? "Primera Lectura" : "Segunda Lectura"}
              </h3>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", fontWeight: "700" }}>{lectura.ref}</span>
            </div>
          </div>
          <p style={{ 
            fontSize: "1.15rem", 
            lineHeight: "1.8", 
            color: "var(--color-text)", 
            margin: 0, 
            fontFamily: "var(--font-body)",
            maxWidth: "900px" 
          }}>
            {lectura.texto}
          </p>
        </div>
      ))}

      {/* 3. SECCIÓN: SALMO DEL DÍA (Independiente) */}
      {data.salmo && (
        <div style={{
          background: "rgba(181, 152, 90, 0.03)",
          borderRadius: "16px",
          padding: "2.5rem",
          border: "1px dashed var(--color-accent)",
          position: "relative"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ background: "white", padding: "10px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
              <Music size={24} style={{ color: "var(--color-accent)" }} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--color-dark)" }}>Salmo Responsorial</h3>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", fontWeight: "700" }}>{data.salmoRef}</span>
            </div>
          </div>
          <p style={{ 
            fontSize: "1.2rem", 
            lineHeight: "1.8", 
            color: "var(--color-text)", 
            fontStyle: "italic", 
            margin: 0, 
            fontFamily: "var(--font-body)",
            maxWidth: "900px" 
          }}>
            {data.salmo}
          </p>
        </div>
      )}

      {/* 4. SECCIÓN: EVANGELIO DEL DÍA (DISEÑO ORIGINAL RESTAURADO) */}
      <div 
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(139, 0, 0, 0.15)",
          border: "1px solid var(--color-border)",
          background: "white",
        }}
      >
        {/* Header exacto como el original */}
        <div
          onClick={() => setExpandedGsp(!expandedGsp)}
          style={{
            background: "linear-gradient(135deg, var(--color-accent) 0%, #8b0000 100%)",
            padding: "1.5rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            userSelect: "none"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={{ background: "rgba(255,255,255,0.2)", padding: "10px", borderRadius: "12px" }}>
              <BookOpen size={26} style={{ color: "white" }} />
            </div>
            <div>
              <span style={{ color: "white", fontFamily: "var(--font-heading)", fontWeight: "800", fontSize: "1.30rem", display: "block", letterSpacing: "0.02em" }}>
                Evangelio del Día: {data.ref}
              </span>
            </div>
          </div>
          <div style={{ color: "white", background: "rgba(255,255,255,0.2)", borderRadius: "50%", padding: "8px", display: "flex" }}>
            {expandedGsp ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </div>
        </div>

        {/* Contenido colapsable exacto */}
        <div style={{ 
          maxHeight: expandedGsp ? "1500px" : "0px",
          transition: "max-height 0.8s cubic-bezier(0, 1, 0, 1)",
          overflow: "hidden",
          background: "white"
        }}>
          <div style={{ padding: "3rem 3.5rem" }}>
            <div style={{ position: "relative" }}>
               <span style={{ position: "absolute", left: "-25px", top: "-20px", fontSize: "6rem", color: "rgba(181, 152, 90, 0.1)", fontFamily: "serif", lineHeight: "1" }}>“</span>
               <p style={{
                  fontSize: "1.4rem",
                  lineHeight: "2",
                  fontFamily: "var(--font-body)",
                  color: "var(--color-text)",
                  fontStyle: "italic",
                  margin: "0 0 3rem 0"
                }}>
                {data.texto}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "2rem" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: "800", color: "var(--color-accent)", fontSize: "1.8rem" }}>
                {data.ref}
              </span>
              {data.refParsed && (
                <Link
                  href={`/${NOMBRES_EVANGELIO[data.refParsed.book].toLowerCase()}/capitulos/${data.refParsed.chapter}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "var(--color-accent)",
                    color: "white",
                    fontFamily: "var(--font-ui)",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    textDecoration: "none",
                    fontWeight: "800",
                    fontSize: "1rem",
                    boxShadow: "0 6px 20px rgba(181, 152, 90, 0.4)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(181, 152, 90, 0.5)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(181, 152, 90, 0.4)";
                  }}
                >
                  Continuar Estudiando <ChevronRight size={22} />
                </Link>
              )}
            </div>
          </div>
        </div>
        
        {/* Barra inferior que dice "Haz clic para abrir" */}
        {!expandedGsp && (
          <div style={{ padding: "1.5rem", textAlign: "center", background: "rgba(0,0,0,0.02)", color: "var(--color-dark)", fontWeight: "600", fontSize: "0.95rem" }}>
            Haz clic para abrir el Evangelio de hoy: {data.ref}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
