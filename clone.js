import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, "src", "pages");
const compDir = path.join(__dirname, "src", "components");

const mateoDir = path.join(pagesDir, "mateo");
const marcosDir = path.join(pagesDir, "marcos");
const lucasDir = path.join(pagesDir, "lucas");

if (!fs.existsSync(marcosDir)) fs.mkdirSync(marcosDir, { recursive: true });
if (!fs.existsSync(lucasDir)) fs.mkdirSync(lucasDir, { recursive: true });

function duplicate(src, dest, search1, replace1, search2, replace2) {
  let content = fs.readFileSync(src, "utf-8");
  content = content.replace(new RegExp(search1, "g"), replace1);
  content = content.replace(new RegExp(search2, "g"), replace2);
  fs.writeFileSync(dest, content);
}

// Pages
const files = fs.readdirSync(mateoDir).filter((f) => f.endsWith(".jsx"));
for (const file of files) {
  const marcosFile = path.join(marcosDir, file.replace("Mateo", "Marcos"));
  const lucasFile = path.join(lucasDir, file.replace("Mateo", "Lucas"));

  // Replace "Mateo" with "Marcos"/"Lucas", and "mateo" with "marcos"/"lucas"
  duplicate(
    path.join(mateoDir, file),
    marcosFile,
    "Mateo",
    "Marcos",
    "mateo",
    "marcos",
  );
  duplicate(
    path.join(mateoDir, file),
    lucasFile,
    "Mateo",
    "Lucas",
    "mateo",
    "lucas",
  );
}

// Components
duplicate(
  path.join(compDir, "LayoutMateo.jsx"),
  path.join(compDir, "LayoutMarcos.jsx"),
  "Mateo",
  "Marcos",
  "mateo",
  "marcos",
);
duplicate(
  path.join(compDir, "LayoutMateo.jsx"),
  path.join(compDir, "LayoutLucas.jsx"),
  "Mateo",
  "Lucas",
  "mateo",
  "lucas",
);

console.log("Componentes y Layous clonados correctamente a Marcos y Lucas.");
