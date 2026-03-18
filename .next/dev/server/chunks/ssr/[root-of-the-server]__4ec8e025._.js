module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/EvangelioDelDia.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EvangelioDelDia",
    ()=>EvangelioDelDia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Configuración de APIs
const BIBLE_ID = "592420522e16049f-01"; // RVR1960
const API_KEY = process.env.NEXT_PUBLIC_BIBLE_API_KEY;
const API_BIBLE_URL = "https://rest.api.bible/v1";
const EVANGELIZO_URL = "https://feed.evangelizo.org/v2/reader.php";
// Mapeo de abreviaturas de Evangelizo a API.Bible
const BOOK_MAPPING = {
    "Mt": "MAT",
    "Mateo": "MAT",
    "Mc": "MRK",
    "Marcos": "MRK",
    "Lc": "LUK",
    "Lucas": "LUK",
    "Jn": "JHN",
    "Juan": "JHN"
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
    if (!endVerse) return {
        id: startId,
        book: bibleBook,
        chapter
    };
    const endId = `${bibleBook}.${chapter}.${endVerse}`;
    return {
        id: `${startId}-${endId}`,
        book: bibleBook,
        chapter
    };
}
function decodeHTMLEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
}
function limpiarTexto(html) {
    if (!html) return "";
    let clean = html.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]*>/g, "").split(/Extraído de la Biblia/i)[0].split(/Para recibir cada mañana/i)[0].split(/evangeliodeldia/i)[0].trim();
    clean = decodeHTMLEntities(clean);
    // Limpiar códigos de versículos al inicio o entre el texto si los hubiera
    return clean.replace(/\s+/g, " ").replace(/^([a-zA-ZáéíóúÁÉÍÓÚ]{1,3}\s+\d+,\d+[-]?\d*[a-z]*[\s.:]*)+/i, "").trim();
}
function limpiarReferenciaSalmo(ref) {
    if (!ref) return "";
    return ref.replace(/<[^>]*>/g, "") // Quitar HTML
    .replace(/Ps/g, "Salmo") // Cambiar Ps por Salmo
    .replace(/([0-9]+)[a-z]+/g, "$1") // Quitar sufijos técnicos como 4bc, 5ab
    .replace(/\./g, ". ") // Añadir espacio tras los puntos
    .replace(/,/g, ", ") // Añadir espacio tras las comas
    .replace(/\s+/g, " ") // Quitar espacios dobles
    .trim();
}
function EvangelioDelDia() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        texto: "",
        ref: "",
        refParsed: null,
        santo: "",
        santoBio: "",
        santoResumen: "",
        santoId: "",
        salmo: "",
        salmoRef: "",
        lecturas: [],
        santoImage: "/santo_del_dia.png"
    });
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedGsp, setExpandedGsp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedPsl, setExpandedPsl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
                        const resBible = await fetch(`${API_BIBLE_URL}/bibles/${BIBLE_ID}/passages/${refParsed.id}?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=false`, {
                            headers: {
                                "api-key": API_KEY
                            }
                        });
                        if (resBible.ok) {
                            const bibleData = await resBible.json();
                            textoFinal = bibleData.data.content.trim();
                        }
                    } catch (e) {}
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
                    santoNombre = rawSaint.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<[^>]*>/g, " ").split("\n")[0].trim();
                    if (currentSantoId) {
                        const resBio = await fetch(`https://feed.evangelizo.org/v2/display_saint.php?id=${currentSantoId}&lang=SP`);
                        const htmlBio = await resBio.text();
                        // Extraer imagen
                        const imgMatch = htmlBio.match(/https:\/\/files\.evangelizo\.org\/images\/santibeati\/[^"']+/);
                        if (imgMatch) santoImg = imgMatch[0];
                        // Limpiar biografía (Extraer solo el texto relevante)
                        let cleanedBio = htmlBio.replace(/<head>[\s\S]*?<\/head>/gi, "") // Eliminar cabecera HTML
                        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "") // Eliminar scripts
                        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "") // Eliminar estilos CSS
                        .replace(/<[^>]*>/g, " ") // Eliminar todas las etiquetas HTML
                        .replace(/\s+/g, " ") // Colapsar espacios
                        .trim();
                        // Función para decodificar entidades HTML (ej: &oacute; -> ó)
                        const decodeHtml = (html)=>{
                            const txt = document.createElement("textarea");
                            txt.innerHTML = html;
                            return txt.value;
                        };
                        // Intentar encontrar el inicio real de la biografía tras los títulos
                        const markers = [
                            "Biografía",
                            "Vida de",
                            "Santo del día:",
                            "Saint of the day:"
                        ];
                        let bioText = cleanedBio;
                        for (const marker of markers){
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
                const readingTypes = [
                    "FR",
                    "SR"
                ];
                for (const type of readingTypes){
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
                setData((prev)=>({
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
            } finally{
                setCargando(false);
                setTimeout(()=>setVisible(true), 50);
            }
        }
        fetchLiturgiaCompleta();
    }, []);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (cargando) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                padding: "60px 20px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                    size: 40,
                    style: {
                        color: "var(--color-accent)",
                        animation: "spin 2s linear infinite"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "var(--font-ui)",
                        fontSize: "1.1rem",
                        color: "var(--color-text-light)"
                    },
                    children: "Preparando la liturgia de hoy..."
                }, void 0, false, {
                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/EvangelioDelDia.jsx",
            lineNumber: 267,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            margin: "3rem 0",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out"
        },
        children: [
            data.santo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "white",
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "2rem",
                    alignItems: "center"
                },
                children: [
                    data.santoImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "180px",
                            height: "180px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                            flexShrink: 0,
                            border: "4px solid white"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: data.santoImage,
                            alt: data.santo,
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                            lineNumber: 309,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                        lineNumber: 300,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "1.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 20,
                                        style: {
                                            color: "var(--color-accent)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            margin: 0,
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "1.4rem",
                                            color: "var(--color-dark)"
                                        },
                                        children: [
                                            "Santo del día: ",
                                            data.santo
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            data.santoId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/santo-biografia/${data.santoId}`,
                                style: {
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
                                },
                                onMouseOver: (e)=>e.currentTarget.style.opacity = "0.7",
                                onMouseOut: (e)=>e.currentTarget.style.opacity = "1",
                                children: [
                                    "Ver biografía completa ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                        lineNumber: 337,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                lineNumber: 320,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                lineNumber: 287,
                columnNumber: 9
            }, this),
            data.lecturas.map((lectura, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "white",
                        borderRadius: "16px",
                        padding: "2.5rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                        border: "1px solid var(--color-border)",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "1.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "rgba(0,0,0,0.03)",
                                        padding: "10px",
                                        borderRadius: "12px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 24,
                                        style: {
                                            color: "var(--color-dark)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: 0,
                                                fontFamily: "var(--font-heading)",
                                                fontSize: "1.3rem",
                                                color: "var(--color-dark)"
                                            },
                                            children: index === 0 ? "Primera Lectura" : "Segunda Lectura"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.85rem",
                                                color: "var(--color-accent)",
                                                fontWeight: "700"
                                            },
                                            children: lectura.ref
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "1.15rem",
                                lineHeight: "1.8",
                                color: "var(--color-text)",
                                margin: 0,
                                fontFamily: "var(--font-body)",
                                maxWidth: "900px"
                            },
                            children: lectura.texto
                        }, void 0, false, {
                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this)),
            data.salmo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "rgba(181, 152, 90, 0.03)",
                    borderRadius: "16px",
                    padding: "2.5rem",
                    border: "1px dashed var(--color-accent)",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "1.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "white",
                                    padding: "10px",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                    size: 24,
                                    style: {
                                        color: "var(--color-accent)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            margin: 0,
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "1.3rem",
                                            color: "var(--color-dark)"
                                        },
                                        children: "Salmo Responsorial"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.85rem",
                                            color: "var(--color-accent)",
                                            fontWeight: "700"
                                        },
                                        children: data.salmoRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "1.2rem",
                            lineHeight: "1.8",
                            color: "var(--color-text)",
                            fontStyle: "italic",
                            margin: 0,
                            fontFamily: "var(--font-body)",
                            maxWidth: "900px"
                        },
                        children: data.salmo
                    }, void 0, false, {
                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                        lineNumber: 396,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                lineNumber: 380,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(139, 0, 0, 0.15)",
                    border: "1px solid var(--color-border)",
                    background: "white"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setExpandedGsp(!expandedGsp),
                        style: {
                            background: "linear-gradient(135deg, var(--color-accent) 0%, #8b0000 100%)",
                            padding: "1.5rem 2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            userSelect: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "rgba(255,255,255,0.2)",
                                            padding: "10px",
                                            borderRadius: "12px"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            size: 26,
                                            style: {
                                                color: "white"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "white",
                                                fontFamily: "var(--font-heading)",
                                                fontWeight: "800",
                                                fontSize: "1.30rem",
                                                display: "block",
                                                letterSpacing: "0.02em"
                                            },
                                            children: [
                                                "Evangelio del Día: ",
                                                data.ref
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: "white",
                                    background: "rgba(255,255,255,0.2)",
                                    borderRadius: "50%",
                                    padding: "8px",
                                    display: "flex"
                                },
                                children: expandedGsp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                    lineNumber: 444,
                                    columnNumber: 28
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                    lineNumber: 444,
                                    columnNumber: 54
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                lineNumber: 443,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: expandedGsp ? "1500px" : "0px",
                            transition: "max-height 0.8s cubic-bezier(0, 1, 0, 1)",
                            overflow: "hidden",
                            background: "white"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "3rem 3.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                left: "-25px",
                                                top: "-20px",
                                                fontSize: "6rem",
                                                color: "rgba(181, 152, 90, 0.1)",
                                                fontFamily: "serif",
                                                lineHeight: "1"
                                            },
                                            children: "“"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                            lineNumber: 457,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.4rem",
                                                lineHeight: "2",
                                                fontFamily: "var(--font-body)",
                                                color: "var(--color-text)",
                                                fontStyle: "italic",
                                                margin: "0 0 3rem 0"
                                            },
                                            children: data.texto
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                            lineNumber: 458,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        gap: "1.5rem",
                                        borderTop: "1px solid rgba(0,0,0,0.08)",
                                        paddingTop: "2rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-heading)",
                                                fontWeight: "800",
                                                color: "var(--color-accent)",
                                                fontSize: "1.8rem"
                                            },
                                            children: data.ref
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                            lineNumber: 471,
                                            columnNumber: 15
                                        }, this),
                                        data.refParsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${NOMBRES_EVANGELIO[data.refParsed.book].toLowerCase()}/capitulos/${data.refParsed.chapter}`,
                                            style: {
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
                                            },
                                            onMouseOver: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-3px)";
                                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(181, 152, 90, 0.5)";
                                            },
                                            onMouseOut: (e)=>{
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "0 6px 20px rgba(181, 152, 90, 0.4)";
                                            },
                                            children: [
                                                "Continuar Estudiando ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 22
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                                    lineNumber: 501,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EvangelioDelDia.jsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EvangelioDelDia.jsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    !expandedGsp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1.5rem",
                            textAlign: "center",
                            background: "rgba(0,0,0,0.02)",
                            color: "var(--color-dark)",
                            fontWeight: "600",
                            fontSize: "0.95rem"
                        },
                        children: [
                            "Haz clic para abrir el Evangelio de hoy: ",
                            data.ref
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EvangelioDelDia.jsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/EvangelioDelDia.jsx",
                lineNumber: 516,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EvangelioDelDia.jsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/diccionarios.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"terminos":[{"termino":"Abba","definicion":"Palabra aramea que significa 'Padre'. Jesús la usó para expresar su relación íntima y de confianza con Dios, invitando a sus seguidores a hacer lo mismo.","categoria":"Teológico"},{"termino":"Adulterio","definicion":"En el contexto bíblico, no solo se refiere a la infidelidad conyugal física, sino que Jesús lo extiende a la intención del corazón y codicia.","categoria":"Ética"},{"termino":"Apóstol","definicion":"Del griego 'apostolos', que significa 'enviado'. Se refiere específicamente a los doce elegidos por Jesús para ser testigos de su resurrección.","categoria":"Eclesiástico"},{"termino":"Arrepentimiento","definicion":"Traducción de 'metanoia', que implica un cambio de mentalidad y de dirección en la vida, volviéndose hacia Dios.","categoria":"Teológico"},{"termino":"Bautismo","definicion":"Rito de inmersión en agua que simboliza la purificación, el arrepentimiento y el nuevo nacimiento en la fe cristiana.","categoria":"Rito"},{"termino":"Bienaventuranza","definicion":"Dicho de felicidad suprema. Las Bienaventuranzas de Jesús (Mateo 5) definen los valores invertidos del Reino de los Cielos.","categoria":"Enseñanza"},{"termino":"Blasfemia","definicion":"Palabra o acto que insulta la majestad de Dios. En el N.T., atribuir las obras de Dios al demonio es considerado blasfemia.","categoria":"Religioso"},{"termino":"Centurión","definicion":"Oficial del ejército romano al mando de una centuria (aproximadamente 100 soldados). Varios centuriones muestran una fe notable en los Evangelios.","categoria":"Histórico"},{"termino":"Circuncisión","definicion":"Señal física del pacto entre Dios e Israel. Fue un tema de gran debate en la iglesia primitiva sobre si los gentiles debían practicarla.","categoria":"Ley"},{"termino":"Concilio (Sanedrín)","definicion":"El tribunal supremo religioso y civil de los judíos en Jerusalén, compuesto por 71 miembros.","categoria":"Político"},{"termino":"Escriba","definicion":"Experto en la Ley de Moisés y en las tradiciones religiosas. A menudo cuestionaban la autoridad de Jesús.","categoria":"Social"},{"termino":"Espíritu Santo","definicion":"La tercera persona de la Trinidad. Guía, consuela y empodera a los creyentes tras la ascensión de Jesús.","categoria":"Teológico"},{"termino":"Eucaristía","definicion":"Acción de gracias. Se refiere a la Cena del Señor instituida por Jesús como memorial de su sacrificio.","categoria":"Rito"},{"termino":"Fariseos","definicion":"Grupo religioso judío conocido por su estricta observancia de la Ley y las tradiciones orales. Jesús criticó su hipocresía legalista.","categoria":"Religioso"},{"termino":"Gentil","definicion":"Persona que no pertenece al pueblo judío. El Nuevo Testamento narra la apertura del Evangelio a todas las naciones gentiles.","categoria":"Social"},{"termino":"Gloria (Shekhiná)","definicion":"La presencia visible y manifiesta de la majestad de Dios. En los Evangelios, se manifiesta plenamente en la Transfiguración de Jesús.","categoria":"Teológico"},{"termino":"Gracia","definicion":"El favor inmerecido de Dios hacia la humanidad, manifestado principalmente en la salvación a través de Jesucristo.","categoria":"Teológico"},{"termino":"Hades","definicion":"En el N.T., se refiere al lugar de los muertos o el reino invisible. No siempre equivale al concepto moderno de infierno de fuego.","categoria":"Escatológico"},{"termino":"Hijo del Hombre","definicion":"Título que Jesús usaba frecuentemente para sí mismo, aludiendo a la visión profética de Daniel sobre una figura celestial y humana.","categoria":"Cristológico"},{"termino":"Mesías","definicion":"Del hebreo 'Mashíaj', que significa 'Ungido'. Equivale al griego 'Cristos'. El libertador prometido por Dios a Israel.","categoria":"Cristológico"},{"termino":"Parábola","definicion":"Relato corto e imaginario que utiliza elementos de la vida cotidiana para enseñar verdades espirituales profundas.","categoria":"Enseñanza"},{"termino":"Pascua","definicion":"Fiesta judía que conmemora la liberación de Egipto. Jesús fue crucificado durante la Pascua, convirtiéndose en el Cordero Pascual definitivo.","categoria":"Fiesta"},{"termino":"Pentecostés","definicion":"Fiesta 50 días después de la Pascua. Marca el descenso del Espíritu Santo y el nacimiento público de la Iglesia.","categoria":"Fiesta"},{"termino":"Publicano","definicion":"Recaudador de impuestos para el Imperio Romano. Eran despreciados por los judíos y considerados traidores y pecadores.","categoria":"Social"},{"termino":"Reino de los Cielos","definicion":"El gobierno soberano de Dios que irrumpe en la historia con la venida de Jesús, transformando vidas y sociedades.","categoria":"Teológico"},{"termino":"Saduceos","definicion":"Grupo aristocrático judío que controlaba el Templo. No creían en la resurrección ni en los ángeles.","categoria":"Religioso"},{"termino":"Sinagoga","definicion":"Lugar de reunión para la oración, el estudio de la ley y la enseñanza en las comunidades judías.","categoria":"Religioso"},{"termino":"Talento","definicion":"Unidad de medida de peso y moneda de gran valor. En las parábolas de Jesús, simboliza las responsabilidades y dones dados por Dios.","categoria":"Moneda"}],"personajes":[{"nombre":"Agripa (Herodes Agripa)","descripcion":"Rey de Judea que persiguió a la iglesia primitiva y ante quien Pablo se defendió en Cesarea.","rol":"Gobernante"},{"nombre":"Andrés","descripcion":"Uno de los primeros discípulos de Jesús, hermano de Simón Pedro. Era pescador en el mar de Galilea.","rol":"Apóstol"},{"nombre":"Bernabé","descripcion":"Creyente de Chipre apodado 'Hijo de Consolación'. Fue el principal compañero de Pablo en su primer viaje misionero.","rol":"Líder"},{"nombre":"Cornelio","descripcion":"Centurión romano de Cesarea, el primer gentil en ser bautizado tras una visión dada a Pedro.","rol":"Converso"},{"nombre":"Esteban","descripcion":"Uno de los siete diáconos y el primer mártir cristiano, apedreado tras un discurso valiente ante el Sanedrín.","rol":"Mártir"},{"nombre":"Felipe (El Evangelista)","descripcion":"Uno de los siete diáconos que llevó el evangelio a Samaria y bautizó al eunuco etíope.","rol":"Evangelista"},{"nombre":"Herodes el Grande","descripcion":"Rey de Judea al nacer Jesús, conocido por ordenar la matanza de los inocentes en Belén.","rol":"Gobernante"},{"nombre":"Jacobo (Hijo de Zebedeo)","descripcion":"Hermano de Juan y el primer apóstol en ser martirizado, ejecutado por orden de Herodes Agripa.","rol":"Apóstol"},{"nombre":"Jesucristo","descripcion":"El centro de la fe cristiana, Hijo de Dios y Salvador del mundo. Dios hecho hombre para la redención de la humanidad.","rol":"Mesías"},{"nombre":"Juan el Bautista","descripcion":"El precursor de Jesús, que predicaba el arrepentimiento y bautizaba en el Jordán preparando el camino del Señor.","rol":"Profeta"},{"nombre":"Juan (El Amado)","descripcion":"Apóstol, autor del cuarto Evangelio y las Epístolas. Estuvo presente al pie de la cruz y cuidó de María.","rol":"Apóstol"},{"nombre":"Lucas","descripcion":"Médico y compañero de viaje de Pablo. Autor del tercer Evangelio y del libro de los Hechos de los Apóstoles.","rol":"Evangelista"},{"nombre":"María (Madre de Jesús)","descripcion":"La virgen que concibió a Jesús por obra del Espíritu Santo. Figura central de obediencia y gracia.","rol":"Madre"},{"nombre":"Marcos","descripcion":"Colaborador de Pedro y Pablo, autor del segundo Evangelio. Se dice que escribió basado en las memorias de Pedro.","rol":"Evangelista"},{"nombre":"Mateo (Leví)","descripcion":"Publicano (recaudador de impuestos) llamado por Jesús para ser uno de sus doce apóstoles y autor del primer Evangelio.","rol":"Apóstol"},{"nombre":"Pablo (Saulo de Tarso)","descripcion":"Perseguidor de la iglesia convertido milagrosamente. El más prolífico misionero y autor de gran parte del Nuevo Testamento.","rol":"Apóstol"},{"nombre":"Pedro (Simón)","descripcion":"Líder de los apóstoles, el 'pescador de hombres'. Sobre su confesión de fe se edificó el fundamento de la iglesia.","rol":"Apóstol"},{"nombre":"Pilato (Poncio Pilato)","descripcion":"Prefecto romano de Judea que juzgó a Jesús y, a pesar de encontrarlo inocente, lo entregó para ser crucificado.","rol":"Gobernante"},{"nombre":"Tomás (El Dídimo)","descripcion":"Apóstol conocido por dudar de la resurrección hasta que tocó las heridas de Jesús, confesando: '¡Señor mío y Dios mío!'.","rol":"Apóstol"}]});}),
"[project]/src/views/diccionario/Diccionario.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Diccionario",
    ()=>Diccionario
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-ssr] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/library.js [app-ssr] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diccionarios$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/diccionarios.json (json)");
"use client";
;
;
;
;
;
;
function Diccionario() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('terminos');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const terminos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diccionarios$2e$json__$28$json$29$__["default"].terminos || [];
    const personajes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diccionarios$2e$json__$28$json$29$__["default"].personajes || [];
    const filteredTerminos = terminos.filter((t)=>t.termino.toLowerCase().includes(searchTerm.toLowerCase()) || t.definicion.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b)=>a.termino.localeCompare(b.termino));
    const filteredPersonajes = personajes.filter((p)=>p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b)=>a.nombre.localeCompare(b.nombre));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    borderBottom: "1px solid var(--color-border)",
                    padding: "1.5rem 0",
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    position: "sticky",
                    top: 0,
                    zIndex: 50
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            style: {
                                textDecoration: "none",
                                color: "var(--color-dark)",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                fontWeight: "600"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hide-mobile-text",
                                    children: "Volver"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            style: {
                                textDecoration: "none",
                                color: "inherit",
                                cursor: "pointer"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {
                                        size: 22,
                                        style: {
                                            color: "var(--color-accent)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "1.4rem",
                                            fontWeight: "700",
                                            color: "var(--color-dark)",
                                            letterSpacing: "0.02em"
                                        },
                                        children: "La Santa Biblia"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "80px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content container animate-fade-in",
                style: {
                    padding: "2rem 1rem"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "page-container",
                    style: {
                        marginTop: "0"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "page-header text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "title-large",
                                    children: "Diccionario Bíblico"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "subtitle",
                                    children: "Explora los términos y personajes bíblicos para profundizar en tu estudio"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                gap: "1rem",
                                marginBottom: "2rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('terminos'),
                                    style: {
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
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        "Términos"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('personajes'),
                                    style: {
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
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        "Personajes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative",
                                marginBottom: "3rem",
                                maxWidth: "600px",
                                margin: "0 auto 3rem auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        left: "1rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        color: "var(--color-text-light)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: `Buscar ${activeTab === 'terminos' ? 'términos' : 'personajes'}...`,
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    style: {
                                        width: "100%",
                                        padding: "1rem 1rem 1rem 3rem",
                                        borderRadius: "8px",
                                        border: "1px solid var(--color-border)",
                                        fontSize: "1.1rem",
                                        outline: "none",
                                        boxShadow: "var(--shadow-sm)",
                                        fontFamily: "var(--font-body)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        activeTab === 'terminos' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-2",
                            children: filteredTerminos.length > 0 ? filteredTerminos.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card border-accent highlight-card",
                                    style: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "1.3rem",
                                                color: "var(--color-accent)",
                                                marginBottom: "0.5rem"
                                            },
                                            children: item.termino
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                            lineNumber: 139,
                                            columnNumber: 21
                                        }, this),
                                        item.categoria && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: "inline-block",
                                                padding: "0.25rem 0.75rem",
                                                background: "var(--color-bg-alt)",
                                                color: "var(--color-dark)",
                                                borderRadius: "20px",
                                                fontSize: "0.85rem",
                                                fontWeight: "600",
                                                marginBottom: "1rem",
                                                alignSelf: "flex-start"
                                            },
                                            children: item.categoria
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                            lineNumber: 143,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                color: "var(--color-text)",
                                                lineHeight: "1.6"
                                            },
                                            children: item.definicion
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                            lineNumber: 157,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 138,
                                    columnNumber: 19
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "1 / -1",
                                    textAlign: "center",
                                    padding: "3rem",
                                    color: "var(--color-text-light)"
                                },
                                children: "No se encontraron términos que coincidan con la búsqueda."
                            }, void 0, false, {
                                fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                lineNumber: 163,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-2",
                            children: filteredPersonajes.length > 0 ? filteredPersonajes.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card border-dark highlight-card",
                                    style: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "1.3rem",
                                                color: "var(--color-dark)",
                                                marginBottom: "0.5rem"
                                            },
                                            children: item.nombre
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                            lineNumber: 173,
                                            columnNumber: 21
                                        }, this),
                                        item.rol && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: "inline-block",
                                                padding: "0.25rem 0.75rem",
                                                background: "var(--color-bg-alt)",
                                                color: "var(--color-dark)",
                                                borderRadius: "20px",
                                                fontSize: "0.85rem",
                                                fontWeight: "600",
                                                marginBottom: "1rem",
                                                alignSelf: "flex-start"
                                            },
                                            children: item.rol
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                            lineNumber: 177,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                color: "var(--color-text)",
                                                lineHeight: "1.6"
                                            },
                                            children: item.descripcion
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                            lineNumber: 191,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 172,
                                    columnNumber: 19
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "1 / -1",
                                    textAlign: "center",
                                    padding: "3rem",
                                    color: "var(--color-text-light)"
                                },
                                children: "No se encontraron personajes que coincidan con la búsqueda."
                            }, void 0, false, {
                                fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                lineNumber: 197,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    borderTop: "1px solid var(--color-border)",
                    padding: "1.5rem 0",
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    marginTop: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    style: {
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                marginBottom: "0.4rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {
                                    size: 16,
                                    style: {
                                        color: "var(--color-accent)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        color: "var(--color-dark)"
                                    },
                                    children: "La Santa Biblia"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "var(--color-text-light)",
                                fontSize: "0.85rem",
                                fontFamily: "var(--font-ui)"
                            },
                            children: "Un estudio profundo sobre la Palabra de Dios."
                        }, void 0, false, {
                            fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/diccionario/Diccionario.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/diccionario/Diccionario.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4ec8e025._.js.map