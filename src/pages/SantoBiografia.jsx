import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Calendar, BookOpen } from "lucide-react";

export function SantoBiografia() {
  const { id } = useParams();
  const [santo, setSanto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const resBio = await fetch(`https://feed.evangelizo.org/v2/display_saint.php?id=${id}&lang=SP`);
        const htmlBio = await resBio.text();

        // Extraer imagen
        const imgMatch = htmlBio.match(/https:\/\/files\.evangelizo\.org\/images\/santibeati\/[^"']+/);
        const santoImg = imgMatch ? imgMatch[0] : "";

        // Limpiar biografía
        let cleanedBio = htmlBio
          .replace(/<head>[\s\S]*?<\/head>/gi, "")
          .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
          .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
          .replace(/<[^>]*>/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        const decodeHtml = (html) => {
          const txt = document.createElement("textarea");
          txt.innerHTML = html;
          return txt.value;
        };

        const markers = ["Biografía", "Vida de", "Santo del día:", "Saint of the day:"];
        let bioText = cleanedBio;
        let santoNombre = "Santo del Día";

        for (const marker of markers) {
          if (cleanedBio.includes(marker)) {
            const parts = cleanedBio.split(marker);
            if (parts[1]) {
              bioText = parts[1].trim();
              break;
            }
          }
        }

        // Extraer nombre del título si es posible
        const nameMatch = cleanedBio.match(/([^.]+)/);
        if (nameMatch) santoNombre = decodeHtml(nameMatch[0]);

        setSanto({
          nombre: santoNombre,
          imagen: santoImg,
          biografia: decodeHtml(bioText)
        });
      } catch (e) {
        console.error("Error cargando biografía:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchBio();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f9fa" }}>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "1.2rem", color: "var(--color-accent)" }}>Cargando biografía sagrada...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#fcfaf5", color: "#333" }}>
      {/* Header / Nav */}
      <nav style={{ 
        padding: "1.5rem 2rem", 
        background: "white", 
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <Link to="/" style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "8px", 
          textDecoration: "none", 
          color: "var(--color-accent)",
          fontWeight: "700",
          fontFamily: "var(--font-ui)"
        }}>
          <ArrowLeft size={20} /> Volver al Inicio
        </Link>
      </nav>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ 
            width: "300px", 
            height: "300px", 
            borderRadius: "50%", 
            overflow: "hidden", 
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            border: "8px solid white",
            marginBottom: "2.5rem"
          }}>
            <img src={santo?.imagen} alt={santo?.nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--color-accent)", marginBottom: "1rem" }}>
            <Sparkles size={24} />
            <span style={{ fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.9rem" }}>Vida de Santidad</span>
          </div>
          
          <h1 style={{ 
            fontFamily: "var(--font-heading)", 
            fontSize: "3.5rem", 
            margin: 0, 
            color: "var(--color-dark)",
            lineHeight: "1.1"
          }}>
            {santo?.nombre}
          </h1>
        </div>

        <div style={{ 
          background: "white", 
          padding: "4rem", 
          borderRadius: "32px", 
          boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
          lineHeight: "1.8",
          fontSize: "1.25rem",
          fontFamily: "var(--font-body)",
          color: "#444",
          textAlign: "justify"
        }}>
           {santo?.biografia.split('. ').map((para, i) => (
             <p key={i} style={{ marginBottom: "1.5rem" }}>{para}.</p>
           ))}
        </div>
        
        <footer style={{ marginTop: "4rem", textAlign: "center", paddingBottom: "4rem", opacity: 0.6 }}>
          <p style={{ fontSize: "0.9rem", fontFamily: "var(--font-ui)" }}>Fuentes: Evangelizo.org - Liturgia diaria</p>
        </footer>
      </div>
    </div>
  );
}
