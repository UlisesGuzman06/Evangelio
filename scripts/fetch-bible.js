import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commentaries = [
  {
    chapNum: 1,
    title: "El Prólogo y los primeros discípulos",
    explicacionSencilla:
      "Este capítulo introduce a Jesús como la Palabra de Dios que existía desde el principio y se hizo hombre. También cuenta cómo Juan el Bautista dio testimonio de Él y cómo Jesús llamó a sus primeros seguidores, como Andrés, Pedro, Felipe y Natanael.",
    interpretacionTeologica:
      "El Prólogo (vv. 1-18) es una de las declaraciones cristológicas más elevadas de la Biblia. Identifica a Jesús como el 'Logos' (Verbo/Palabra), coeterno y consustancial con Dios. Establece que la encarnación es el medio definitivo de la revelación divina.",
    simbolos:
      "La Luz y las Tinieblas: Representan la verdad de Dios frente a la ignorancia y el pecado del mundo. El Cordero de Dios: Símbolo sacrificial de la redención.",
    datosHistoricos:
      "El concepto del 'Logos' conectaba tanto con la filosofía griega (la mente racional del universo) como con la teología judía (la Palabra creadora de Dios), siendo un puente perfecto para predicar a ambas culturas.",
  },
  {
    chapNum: 2,
    title: "Las Bodas de Caná y la purificación del Templo",
    explicacionSencilla:
      "Jesús hace su primer milagro convirtiendo agua en vino en una boda. Luego, va a Jerusalén y expulsa a los mercaderes del Templo, mostrando gran autoridad.",
    interpretacionTeologica:
      "El primer 'signo' (agua en vino) simboliza la nueva alianza (el vino nuevo) que reemplaza a los rituales purificatorios judíos tradicionales (las tinajas de agua). La expulsión de los mercaderes demuestra que el propio cuerpo de Jesús es el verdadero Templo de Dios, el único lugar de encuentro definitivo entre Dios y la humanidad.",
    simbolos:
      "El Vino: Símbolo de gozo escatológico y la abundancia del reino mesiánico. Las Seis Tinajas: Representan la imperfección (6) de la ley antigua comparada con la perfección de Cristo.",
    datosHistoricos:
      "Las bodas judías duraban una semana, y quedarse sin vino era una vergüenza social terrible. Además, la purificación del Templo ocurría en el Atrio de los Gentiles, el único lugar donde los no judíos podían adorar.",
  },
  {
    chapNum: 3,
    title: "Jesús y Nicodemo",
    explicacionSencilla:
      "Un líder judío llamado Nicodemo visita a Jesús de noche. Jesús le dice que para entrar al Reino de Dios, uno debe nacer de nuevo. El capítulo incluye el famoso versículo Juan 3:16.",
    interpretacionTeologica:
      "El diálogo con Nicodemo establece la necesidad de la regeneración espiritual ('nacer del agua y del Espíritu'). No basta con la religión exterior ni el linaje judío; se requiere una obra sobrenatural interna guiada por el Espíritu Santo. Además, revela el amor sacrificial de Dios hacia todo el 'cosmos'.",
    simbolos:
      "El Nuevo Nacimiento: Símbolo de regeneración espiritual. La Serpiente de Bronce: Referencia a Números 21, simbolizando que al mirar a Cristo crucificado, los pecadores reciben vida.",
    datosHistoricos:
      "Nicodemo era un fariseo y miembro del Sanedrín (el consejo gobernante judío). Que fuera a Jesús 'de noche' indica temor a sus compañeros, pero también, simbólicamente, que estaba en 'tinieblas' espirituales.",
  },
  {
    chapNum: 4,
    title: "La mujer samaritana",
    explicacionSencilla:
      "En su camino a Galilea, Jesús se detiene en Samaria y pide agua a una mujer junto al pozo de Jacob. Jesús le revela detalles de su vida y le ofrece el 'agua viva'.",
    interpretacionTeologica:
      "Este encuentro rompe barreras de género, raza y moralidad. Jesús revela ser la fuente que sacia definitivamente la sed espiritual del alma humana. Además, declara que la verdadera adoración a Dios no depende de un lugar geográfico (Jerusalén o Gerizim), sino que debe ser 'en espíritu y en verdad'.",
    simbolos:
      "El Agua Viva: Representa al Espíritu Santo y la vida eterna que fluye de Cristo hacia el creyente. El Pozo: Un recuerdo de la tradición patriarcal que ahora es superada por Jesús.",
    datosHistoricos:
      "Judíos y samaritanos se odiaban. Los samaritanos eran considerados 'paganos de sangre mezclada' por los judíos ortodoxos. Que un rabino hablara con una mujer a solas también era impensable en esa cultura.",
  },
  {
    chapNum: 5,
    title: "El paralítico de Betesda y la autoridad del Hijo",
    explicacionSencilla:
      "Jesús sana a un hombre que había estado paralítico por 38 años en un estanque. Como lo hizo en sábado (día de reposo judío), los líderes religiosos empiezan a perseguirlo.",
    interpretacionTeologica:
      "El milagro es una excusa para el discurso teológico posterior, donde Jesús afirma su igualdad con Dios Padre. Cristo declara que Él tiene la misma autoridad que el Padre para dar vida y para juzgar, indicando que el sábado no limita su obra redentora ni sostenimiento del universo.",
    simbolos:
      "Los 38 años: Posible alusión a los 38 años que Israel vagó trágicamente por el desierto (Deuteronomio 2:14) sin poder entrar al reposo.",
    datosHistoricos:
      "El estanque de Betesda fue descubierto por arqueólogos en el siglo XIX, confirmando la descripción exacta que hace Juan de que tenía 'cinco pórticos'.",
  },
  {
    chapNum: 6,
    title: "La alimentación de los 5,000 y el Pan de Vida",
    explicacionSencilla:
      "Jesús multiplica panes y peces para alimentar a una gran multitud. Más tarde, camina sobre el agua. Luego enseña a la gente que Él es el verdadero Pan que bajó del cielo.",
    interpretacionTeologica:
      "Este capítulo contiene la primera de las siete declaraciones 'Yo Soy'. Jesús se presenta como el maná definitivo. Comer su carne y beber su sangre es una metáfora poderosa sobre creer en Él e internalizar su sacrificio en la cruz para obtener vida eterna.",
    simbolos:
      "El Pan: Símbolo del sustento espiritual que Dios provee. El Maná del desierto: Un milagro antiguo temporal que Jesús supera al ofrecer vida eterna.",
    datosHistoricos:
      "La multitud quiso hacer rey a Jesús por la fuerza porque esperaban a un Mesías político y militar que solucionara sus necesidades materiales inmediatas y los liberara de Roma.",
  },
  {
    chapNum: 7,
    title: "Jesús en la Fiesta de los Tabernáculos",
    explicacionSencilla:
      "Jesús viaja en secreto a Jerusalén durante una importante fiesta judía. Mientras enseña en el templo, hay gran confusión entre la gente y los líderes religiosos debatían sobre si Él era verdaderamente el Cristo.",
    interpretacionTeologica:
      "Refleja el clímax de la tensión entre creer en Jesús o rechazarlo. En el último día de la fiesta, Jesús promete ser la fuente de 'Ríos de Agua Viva' para los creyentes, profetizando claramente el derramamiento del Espíritu Santo.",
    simbolos:
      "El Agua de la Fiesta: Durante esta festividad, los sacerdotes derramaban agua en el altar. Jesús se apropia del rito: Él es el cumplimiento de la provisión de Dios en el desierto.",
    datosHistoricos:
      "La Fiesta de los Tabernáculos (Sucot) celebraba la provisión de Dios durante los años en el desierto y a la vez era la fiesta de la cosecha de otoño. Estaba llena de rituales con agua y luz.",
  },
  {
    chapNum: 8,
    title: "La mujer adúltera y la Luz del mundo",
    explicacionSencilla:
      "Los líderes intentan atrapar a Jesús presentándole a una mujer atrapada en adulterio. Jesús muestra gracia perdonándola. Luego declara que Él es la 'Luz del mundo'.",
    interpretacionTeologica:
      "Jesús muestra la perfecta armonía entre gracia y verdad (perdonando, pero diciendo 'no peques más'). En su discurso, afirma preexistir a Abraham con la exclamación divina 'Antes que Abraham fuese, YO SOY', reclamando directamente el nombre de Dios (Yahvé).",
    simbolos:
      "La Luz: En medio de la oscuridad del pecado moral, Jesús ilumina y expone el corazón. Ser su discípulo significa dejar la ceguera y andar en luz.",
    datosHistoricos:
      "La historia de la mujer adúltera (vv. 1-11) no aparece en los manuscritos griegos más antiguos, por lo que muchos eruditos creen que es una tradición veraz pero añadida posteriormente al texto juanino.",
  },
  {
    chapNum: 9,
    title: "Sanidad de un ciego de nacimiento",
    explicacionSencilla:
      "Jesús sana a un hombre que nació ciego escupiendo en tierra para hacer lodo y aplicándolo en sus ojos. Las autoridades interrogan al hombre y, al ver que reconoce a Jesús, lo expulsan de la sinagoga.",
    interpretacionTeologica:
      "La ceguera física del hombre contrasta irónicamente con su progresiva visión espiritual (reconoce a Jesús como profeta, y luego como Señor). Por el contrario, los fariseos, que biológicamente ven, demuestran ceguera espiritual total por su soberbia e incredulidad.",
    simbolos:
      "El Lodo y la Tierra: Recuerdan al libro del Génesis cuando Dios formó al hombre del polvo de la tierra. Jesús como Creador está 're-creando' la vista del hombre.",
    datosHistoricos:
      "Ser expulsado de la sinagoga era devastador social, económica y religiosamente para un judío. Era ser cortado del pacto de Dios desde la perspectiva de la comunidad.",
  },
  {
    chapNum: 10,
    title: "El Buen Pastor",
    explicacionSencilla:
      "Jesús se describe a sí mismo como el Buen Pastor que da la vida por sus ovejas y las conoce a cada una por nombre, a diferencia de los líderes mentirosos o asalariados que huyen del peligro.",
    interpretacionTeologica:
      "Jesús apropia imágenes del Antiguo Testamento donde Dios es el único pastor de Israel (Salmos 23, Ezequiel 34). Además, anticipa la crucifixión explícitamente: Él pone su vida voluntariamente y tiene gran poder para volverla a tomar, afirmando la seguridad eterna de quienes le pertenecen.",
    simbolos:
      "La Puerta: Simboliza la exclusividad de Cristo; Él es el único acceso legítimo a la salvación. Las Ovejas: Representan a los redimidos, que escuchan individualmente su voz.",
    datosHistoricos:
      "El contexto de finales de este capítulo es la Fiesta de la Dedicación (Hanukkah), que celebraba la re-dedicación del Templo por los Macabeos en invierno.",
  },
  {
    chapNum: 11,
    title: "La resurrección de Lázaro",
    explicacionSencilla:
      "Lázaro, amigo de Jesús, muere. Jesús llega cuatro días tarde y, frente a la tristeza de Marta y María, llora. Luego ordena que abran la tumba y resucita a Lázaro con un grito.",
    interpretacionTeologica:
      "Es el séptimo y mayor signo del evangelio. Aquí vemos la plena humanidad de Jesús (llora y se conmueve) unida a su deidad (reina sobre la muerte). Él se declara como 'La Resurrección y la Vida'. Es el evento catalizador que decide a las autoridades a planear su muerte.",
    simbolos:
      "Los 4 días en la tumba: Según la creencia popular judía de la época, el alma se quedaba cerca del cuerpo por 3 días. Al cuarto día, la muerte era absoluta y no había duda del milagro.",
    datosHistoricos:
      "Betania, donde ocurrió el milagro, estaba a escasos 3 kilómetros de Jerusalén. El lugar del milagro hizo imposible que los líderes religiosos de la capital ignorasen el suceso.",
  },
  {
    chapNum: 12,
    title: "María unge a Jesús y Su entrada triunfal",
    explicacionSencilla:
      "María, hermana de Lázaro, perfuma los pies de Jesús con esencia carísima. Poco después, Jesús entra en Jerusalén montado en un asno entre celebraciones. Este capítulo cierra su ministerio público.",
    interpretacionTeologica:
      "Jesús interpreta que ha llegado su 'hora', no la de reinar en un trono terrenal, sino la de ser levantado en la cruz. Menciona la metáfora del grano de trigo: es necesario morir para llevar fruto. El evangelista reflexiona sobre por qué muchos israelitas no creyeron a pesar de los asombrosos milagros.",
    simbolos:
      "El nardo puro (perfume): Símbolo de devoción excepcional, pero también, según Jesús, unciones anticipadas para su próximo entierro.",
    datosHistoricos:
      "El nardo era un perfume exótico traído probablemente de la India. Costaba 300 denarios (casi el salario anual de un obrero o jornalero judío promedio). Judas Iscariote lo codició.",
  },
  {
    chapNum: 13,
    title: "El lavatorio de los pies",
    explicacionSencilla:
      "Durante la Última Cena, sabiendo que uno de sus discípulos lo iba a traicionar, Jesús se levanta, se ata una toalla y les lava los pies a todos. Luego les da un mandamiento nuevo.",
    interpretacionTeologica:
      "Comienza aquí el 'Libro de la Gloria'. El lavatorio no solo es una lección profunda de humildad humana, sino una parábola en acción de la cruz: la encarnación (despojarse) y la expiación (limpieza del pecado). El mandamiento nuevo eleva el estándar del amor a uno insuperable: 'como yo os he amado'.",
    simbolos:
      "Lavarse los pies: Típicamente era una tarea reservada exclusivamente al esclavo más bajo de la casa (ni siquiera un sirviente judío debía hacerlo). Cristo encarna el rol de esclavo.",
    datosHistoricos:
      "La escena sucede mientras las tropas del templo quizá ya se estaban organizando bajo las sombras por medio de Judas. En Medio Oriente las calles eran de tierra/polvo, por lo que lavar y ungir los pies era la mayor hospitalidad.",
  },
  {
    chapNum: 14,
    title: "El Camino, la Verdad y la Vida",
    explicacionSencilla:
      "Para consolar a sus discípulos tristes por Su próxima muerte, Jesús les promete ir al cielo para prepararles lugar, y les afirma que Él enviará un Abogado consolador (el Espíritu Santo).",
    interpretacionTeologica:
      "Presenta a Jesucristo como el acceso único y exclusivo al Padre ('Nadie viene al Padre, sino por mí'). Contiene profundas afirmaciones de la relación trinitaria ('El que me ha visto a mí, ha visto al Padre') y se establece la obra intercesora del Paráclito (Espíritu de Verdad) en el futuro creyente.",
    simbolos:
      "El Paráclito: Un término legal que significa Abogado, Consolador e Intercesor, indicando que el Espíritu Santo no es solo una fuerza, sino una persona divina que defiende a la iglesia.",
    datosHistoricos:
      "El concepto de las 'muchas moradas' se relaciona con la costumbre de la boda judía antigua, donde el novio salía por meses para preparar un nuevo cuarto o morada en la casa de su padre antes de venir por la novia.",
  },
  {
    chapNum: 15,
    title: "La Vid Verdadera",
    explicacionSencilla:
      "Jesús se llama a sí mismo la Vid verdadera, y a sus seguidores los pámpanos (ramas). Enseña que para dar fruto deben permanecer en Él, y advierte que el mundo los odiará como lo odió a Él.",
    interpretacionTeologica:
      "Reafirma que la vida espiritual es completamente dependiente de la permanencia en Cristo (unión íntima espiritual). Separados de Él la esterilidad es total. Muestra que la respuesta natural del mundo pecaminoso al mensaje de luz de Cristo y sus seguidores será la persecución e incomprensión.",
    simbolos:
      "La Vid: En el Antiguo Testamento Israel frecuentemente era llamado la vid plantada por Dios (Isaías 5), pero falló en dar buen fruto. Jesús es el verdadero Israel y el proveedor del buen fruto espiritual esperado.",
    datosHistoricos:
      "Es probable que de camino al huerto de Getsemaní, o al lado del templo, Jesús viera vides o las grandes puertas del templo adornadas con vides de oro, usando el objeto para construir su analogía.",
  },
  {
    chapNum: 16,
    title: "El ministerio del Espíritu Santo",
    explicacionSencilla:
      "Jesús advierte de persecuciones futuras e insiste en que Su ida es buena porque permitirá que envíe al Espíritu Santo, quien reprochará el pecado del mundo y guiará a los suyos en toda verdad.",
    interpretacionTeologica:
      "Se detalla minuciosamente la función del Espíritu en el mundo pos-resurrección: convencer de pecado (por no creer), de justicia (porque Cristo demostró ser justo yendo al Padre) y de juicio (porque el príncipe de este mundo será condenado). El creyente, aunque tendrá aflicciones, puede estar en paz porque Cristo venció.",
    simbolos:
      "El dolor de parto: Símbolo de cómo la tristeza intensa pero repentina de los discípulos pronto se convertirá en un gozo imborrable tras la cruz y la resurrección.",
    datosHistoricos:
      "La advertencia temprana de Jesús de la expulsión de sinagogas y de personas asesinando a discípulos bajo la creencia de rendir 'adoración a Dios' se cumplió literalmente pocas décadas después de manera atroz.",
  },
  {
    chapNum: 17,
    title: "La Oración Sacerdotal",
    explicacionSencilla:
      "Jesús hace una inmensa y emotiva oración al Padre antes de ser arrestado. Reza por sí mismo, por sus discípulos actuales y por todos aquellos que creerán en el futuro gracias al mensaje de ellos.",
    interpretacionTeologica:
      "A diferencia del 'Padre Nuestro', esta es La gran Oración personal del Señor. Define la misión intercesora continua de Cristo (como un Sumo Sacerdote). Juan no se enfoca en la agonía del jardín de Getsemaní (reportada por los sinópticos), sino que subraya la dignidad victoriosa de Cristo en íntimo consejo divino pidiendo unidad ('que todos sean uno') y protección espiritual del mal.",
    simbolos:
      "Estar en el mundo pero no ser del mundo: Concepto central teológico sobre la vocación de la comunidad cristiana.",
    datosHistoricos:
      "El formato se asemeja a los largos discursos y oraciones de testamento/despedida de las antiguas figuras de la tradición bíblica al momento de su inminente deceso, pero trascendiendo a una autoridad divina inherente.",
  },
  {
    chapNum: 18,
    title: "Arresto de Jesús y el juicio ante Pilato",
    explicacionSencilla:
      "Judas traiciona a Jesús en un huerto. Jesús es arrestado voluntariamente y Pedro hiere a un guardia para defenderlo. Pedro niega conocerlo tres veces, y Jesús enfrenta interrogatorio frente al gobernador romano Poncio Pilato.",
    interpretacionTeologica:
      "Juan enfatiza el control supremo de Cristo durante el sufrimiento; los guardias caen al piso cuando Jesús responde 'YO SOY' (Ego Eimi). Él es realmente un Rey, pero como le dice a Pilato, 'Mi reino no es de este mundo', una teología directa contrarrestando la política romana coercitiva con el poder de la Cruz.",
    simbolos:
      "La copa de ira: Simboliza la ineludible obediencia al plan absoluto del redentor de sufrir para expiar las faltas humanas. El gallo de Pedro cantando devela la debilidad autoconfiada del hombre natural.",
    datosHistoricos:
      "El interrogatorio romano bajo Pilato requería traducciones probablemente latín-griego/arameo. Los judíos no podían llevar a cabo ejecuciones legales por lo que se requería el poder de la máxima autoridad romana.",
  },
  {
    chapNum: 19,
    title: "La Crucifixión y sepultura de Jesús",
    explicacionSencilla:
      "Jesús es flagelado o azotado, el pueblo grita pidiendo su crucifixión. Jesucristo es clavado en la cruz en el Monte del Calvario. Al morir declara 'Consumado es'. Finalmente es bajado y enterrado por Nicodemo y José de Arimatea en una tumba nueva.",
    interpretacionTeologica:
      "A lo largo de su agonía, Juan subraya que todo sucede para que 'se cumpla la Escritura'. El grito asombroso final ('Tetelestai' - Consumado es) no es de derrota cristiana, sino una nota monumental de victoria comercial romana o legal que quiere decir 'La Deuda se ha Saldado Completamente'. El cordero pascual verdadero finalmente ha sido ofrecido al mundo por los redimidos.",
    simbolos:
      "El agua y la sangre (brotando del costado): Físicamente el resultado la lanzada fatal y teológicamente un reflejo profundo de los grandes sacramentos, la sanidad espiritual y derramamiento vital inmensurable para perdón.",
    datosHistoricos:
      "Curiosamente, el Evangelio de Juan hace la conexión que a Jesús no se le rompieron las piernas –un requerimiento crucial para los animales de la cena ceremonial que el pueblo de Israel debía comer durante la Pascua judía.",
  },
  {
    chapNum: 20,
    title: "La Resurrección, primera escena y el Tomás dador de títulos",
    explicacionSencilla:
      "El domingo, María Magdalena descubre la tumba de Jesús vacía e informa a Pedro y Juan quienes corren a confirmarlo. Más tarde, Jesús Resucitado conversa y nombra con amor a María M. y después aparece a los dudosos discípulos donde Tomás confiesa la célebre frase: '¡Señor mío, y Dios mío!'.",
    interpretacionTeologica:
      "Se muestra que creer es sinónimo de atestiguar y aceptar un gran hecho a pesar de no presenciar el fenómeno biológico: benditos los creyentes porque confiaron sin el milagro frente a ellos. La fe personal sobre el cuerpo crucificado es sellada aquí (las llagas verificando la realidad y no fantasmagórico).",
    simbolos:
      "El primer día de la semana: Un símbolo del Nuevo Génesis. Se inicia definitivamente la Nueva Creación por encima y contra toda condenación existiendo paz total en sus temerosos discípulos asombrados en un lugar a puerta bloqueadas.",
    datosHistoricos:
      "Es la figura femenina quien se convierte asombrosamente en la primera 'Apóstol de Apóstoles' llevando el mayor anuncio cristiano (dado que el testimonio presencial de mujer no era bien avalado legislativamente en esa cultura), marcando total divinidad veraz e igualitaria en dignidad salvadora.",
  },
  {
    chapNum: 21,
    title:
      "La milagrosa pesca en Tiberíades y restitución post-negación a Pedro",
    explicacionSencilla:
      "En este último epílogo, tras resurrección, los discípulos vuelven frustrados a su vieja pesca por incomprensión de mandatos evangélicos, pero el Señor nuevamente se muestra cocinándoles la red prodigiosa y procede una triple confirmación pública íntima hacia Simón Pedro sanando las tres negaciones.",
    interpretacionTeologica:
      "Es necesario pastorear. Amar al Señor no trata en una abstracción filosófica vacía; el Cristo vivo requiere obediencia devota de servicio sacrificando las previas metas. 'Si me amas', pastorea a los míos. Acaba Juan admitiendo la ilimitada e insondable envergadura sobre la magnitud infinita biográfica (no cabrían los libros).",
    simbolos:
      "Ciento cincuenta y tres peces: Los padres apostólicos frecuentemente argumentaron alegóricamente que se presentaba como un emblema prefigurando universalidad para las misiones gentiles con plenitud.",
    datosHistoricos:
      "En su último adiós personal previene curiosidades mal sanas (Pedro comparándose frente la vida final de este mismo apóstol que narra -Juan- al oír susurros equivocados prediciendo inmensa longevidad) indicando que enfocarnos debiera solo ser al Redentor personal eterno.",
  },
];

// Generar una estructura the array with API text
(async () => {
  const result = [];
  try {
    for (const com of commentaries) {
      console.log(`Fetching chapter ${com.chapNum}...`);
      const res = await fetch(
        `https://bible-api.deno.dev/api/read/rv1960/juan/${com.chapNum}`,
      );
      const data = await res.json();

      const verses = data.vers.map((v) => ({
        verse: v.number,
        text: v.verse.trim(),
      }));

      result.push({
        capitulo: com.chapNum,
        titulo: com.title,
        explicacionSencilla: com.explicacionSencilla,
        interpretacionTeologica: com.interpretacionTeologica,
        simbolos: com.simbolos,
        datosHistoricos: com.datosHistoricos,
        versiculos: verses,
      });

      // Delay to respect API ratelimits slightly
      await new Promise((r) => setTimeout(r, 200));
    }

    // Save to file
    const outputDir = path.join(__dirname, "../src/data");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(outputDir, "capitulos.json"),
      JSON.stringify(result, null, 2),
      "utf-8",
    );

    console.log("Script completed successfully! capitulos.json created.");
  } catch (err) {
    console.error("Error fetching data:", err);
  }
})();
