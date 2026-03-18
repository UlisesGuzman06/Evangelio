import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commentaries = [
  {
    chapNum: 1,
    title: "La Ascensión y la elección de Matías",
    explicacionSencilla: "Antes de subir al cielo, Jesús promete enviar al Espíritu Santo. Los apóstoles eligen a Matías para completar el grupo de los Doce.",
    interpretacionTeologica: "Marca la transición del ministerio terrenal de Jesús al ministerio de la Iglesia guiada por el Espíritu.",
    simbolos: "La Nube (gloria divina), El Monte de los Olivos.",
    datosHistoricos: "Jerusalén bajo dominio romano; los discípulos esperan el cumplimiento de las promesas en comunidad.",
  },
  {
    chapNum: 2,
    title: "El día de Pentecostés",
    explicacionSencilla: "El Espíritu Santo desciende sobre los discípulos en forma de lenguas de fuego. Pedro predica y tres mil personas se bautizan.",
    interpretacionTeologica: "El nacimiento público de la Iglesia. El Espíritu revierte la confusión de Babel uniendo a las naciones en un solo mensaje.",
    simbolos: "Viento recio, Lenguas de fuego, El hablar en lenguas.",
    datosHistoricos: "La fiesta de Pentecostés atraía a judíos de toda la diáspora a Jerusalén.",
  },
  {
    chapNum: 3,
    title: "Curación de un cojo",
    explicacionSencilla: "Pedro y Juan sanan a un hombre cojo en la puerta del Templo llamada la Hermosa. Pedro explica que el milagro ocurrió por el poder de Jesús.",
    interpretacionTeologica: "La continuidad de los milagros de Jesús a través de sus apóstoles como prueba de su resurrección.",
    simbolos: "La Puerta Hermosa del Templo.",
    datosHistoricos: "El Templo de Herodes seguía siendo el centro de la vida religiosa judía y escenario inicial de la predicación cristiana.",
  },
  {
    chapNum: 4,
    title: "Pedro y Juan ante el Concilio",
    explicacionSencilla: "Las autoridades arrestan a Pedro y Juan por predicar. Ellos declaran valientemente que deben obedecer a Dios antes que a los hombres.",
    interpretacionTeologica: "El conflicto entre el poder mundano/religioso institucional y el poder profético del Espíritu.",
    simbolos: "La Piedra Angular.",
    datosHistoricos: "El Sanedrín era el tribunal supremo religioso de los judíos bajo autoridad romana.",
  },
  {
    chapNum: 5,
    title: "Ananías, Safira y los Apóstoles",
    explicacionSencilla: "Ananías y Safira mueren tras mentir al Espíritu Santo sobre una ofrenda. Los apóstoles son encarcelados y liberados milagrosamente por un ángel.",
    interpretacionTeologica: "La santidad requerida en la nueva comunidad y la imposibilidad de detener la Palabra de Dios.",
    simbolos: "La sombra de Pedro, Ánimas liberadas.",
    datosHistoricos: "Gamaliel, un respetado maestro de la ley, aconseja prudencia al Sanedrín respecto a los cristianos.",
  },
  {
    chapNum: 6,
    title: "Elección de los siete diáconos",
    explicacionSencilla: "Para atender a las viudas, se eligen siete hombres llenos del Espíritu. Esteban, uno de ellos, destaca por su gracia y poder.",
    interpretacionTeologica: "El servicio práctico (diaconía) es inseparable de la misión espiritual de la Iglesia.",
    simbolos: "La imposición de manos.",
    datosHistoricos: "Tensión entre judíos helenistas (de habla griega) y hebreos dentro de la comunidad cristiana primitiva.",
  },
  {
    chapNum: 7,
    title: "El discurso y martirio de Esteban",
    explicacionSencilla: "Esteban resume la historia de Israel ante el Sanedrín. Es apedreado hasta la muerte, convirtiéndose en el primer mártir cristiano.",
    interpretacionTeologica: "La culminación del rechazo de Israel a los profetas de Dios, ahora personificado en el juicio a Esteban.",
    simbolos: "Piedras de martirio, Rostro de ángel, Cielo abierto.",
    datosHistoricos: "Saulo (Pablo) aparece por primera vez consintiendo en la muerte de Esteban.",
  },
  {
    chapNum: 8,
    title: "Felipe en Samaria y el Etíope",
    explicacionSencilla: "La persecución dispersa a los creyentes. Felipe predica en Samaria y bautiza a un funcionario etíope en el camino a Gaza.",
    interpretacionTeologica: "El Evangelio rompe las barreras geográficas y étnicas, llegando a los excluidos del judaísmo oficial.",
    simbolos: "Agua del bautismo, El desierto.",
    datosHistoricos: "Samaria representaba el primer paso de la expansión del Evangelio fuera de Judea.",
  },
  {
    chapNum: 9,
    title: "La conversión de Saulo",
    explicacionSencilla: "Jesús se aparece a Saulo en el camino a Damasco. Él se queda ciego, se bautiza y comienza a predicar que Jesús es el Mesías.",
    interpretacionTeologica: "La gracia transformadora de Dios que convierte al mayor perseguidor en el mayor apóstol.",
    simbolos: "La luz del cielo, La ceguera temporal.",
    datosHistoricos: "Damasco era una ciudad clave con una importante comunidad judía.",
  },
  {
    chapNum: 10,
    title: "Pedro y Cornelio",
    explicacionSencilla: "Dios le muestra a Pedro que no debe llamar a nadie impuro. Pedro visita al centurión gentil Cornelio y el Espíritu desciende sobre ellos.",
    interpretacionTeologica: "La apertura oficial de la salvación a los gentiles sin necesidad de hacerse judíos primero.",
    simbolos: "El lienzo con animales, El Espíritu Santo sobre gentiles.",
    datosHistoricos: "Cesarea era la capital administrativa romana de Judea y residencia de oficiales como Cornelio.",
  },
  {
    chapNum: 11,
    title: "La Iglesia en Antioquía",
    explicacionSencilla: "Pedro defiende el bautismo de gentiles. En Antioquía nace una iglesia mixta e importante donde a los discípulos se les llama cristianos por primera vez.",
    interpretacionTeologica: "La validación comunitaria de la misión a los gentiles bajo la guía del Espíritu.",
    simbolos: "El nombre 'Cristiano'.",
    datosHistoricos: "Antioquía de Siria era la tercera ciudad más grande del Imperio Romano.",
  },
  {
    chapNum: 12,
    title: "Muerte de Jacobo y liberación de Pedro",
    explicacionSencilla: "El rey Herodes mata a Jacobo y encarcela a Pedro. Un ángel libera a Pedro de la prisión mientras la iglesia ora por él.",
    interpretacionTeologica: "El poder de la oración intercesora frente a la persecución política.",
    simbolos: "Cadenas rotas, El ángel libertador.",
    datosHistoricos: "Herodes Agripa I buscaba el favor de las autoridades judías persiguiendo a los líderes cristianos.",
  },
  {
    chapNum: 13,
    title: "Primer viaje misionero de Pablo",
    explicacionSencilla: "El Espíritu Santo aparta a Bernabé y Saulo (Pablo) para la misión. Viajan a Chipre y Galacia predicando en las sinagogas.",
    interpretacionTeologica: "El inicio sistemático de la misión mundial bajo la autoridad del Espíritu Santo.",
    simbolos: "La imposición de manos en Antioquía.",
    datosHistoricos: "Comienza el cambio de nombre de Saulo a Pablo mientras interactúa con el mundo romano.",
  },
  {
    chapNum: 14,
    title: "Ministerio en Iconio y Listra",
    explicacionSencilla: "En Listra sanan a un hombre, los confunden con dioses y luego apedrean a Pablo. Sobreviven y fortalecen las iglesias recién fundadas.",
    interpretacionTeologica: "La inconstancia de la gloria humana comparada con la perseverancia de los apóstoles.",
    simbolos: "Sacrificios paganos evitados, Piedras de persecución.",
    datosHistoricos: "Las ciudades de Licaonia presentaban un desafío de evangelización en contextos puramente paganos.",
  },
  {
    chapNum: 15,
    title: "El Concilio de Jerusalén",
    explicacionSencilla: "Los líderes se reúnen para decidir si los gentiles deben circuncidarse. Deciden que no, pidiendo solo que eviten prácticas ligadas a la idolatría.",
    interpretacionTeologica: "La salvación por la sola gracia es ratificada por toda la Iglesia.",
    simbolos: "La carta de los apóstoles.",
    datosHistoricos: "Primer gran debate eclesiástico que definió el futuro universal del cristianismo.",
  },
  {
    chapNum: 16,
    title: "El llamado a Macedonia",
    explicacionSencilla: "Pablo tiene una visión de un hombre pidiendo ayuda. Viajan a Filipos, donde se convierte Lidia y el carcelero después de un terremoto.",
    interpretacionTeologica: "El Espíritu dirige activamente el avance geográfico de la misión hacia Europa.",
    simbolos: "Visión de Macedonia, Terremoto en la cárcel.",
    datosHistoricos: "Filipos era una colonia romana importante en la Vía Egnacia.",
  },
  {
    chapNum: 17,
    title: "Tesalónica, Berea y Atenas",
    explicacionSencilla: "Pablo razona en Atenas ante el Aerópago sobre el 'Dios No Conocido'. En Berea, los judíos son elogiados por estudiar las Escrituras.",
    interpretacionTeologica: "El diálogo entre la fe cristiana y la filosofía/cultura griega clásica.",
    simbolos: "Altar al Dios No Conocido, El Areópago.",
    datosHistoricos: "Atenas todavía era el centro intelectual del mundo romano aunque su poder político había decaído.",
  },
  {
    chapNum: 18,
    title: "Pablo en Corinto",
    explicacionSencilla: "Pablo pasa un año y medio en Corinto trabajando con Aquila y Priscila. El Señor le da consuelo en visión para seguir predicando.",
    interpretacionTeologica: "La fidelidad de Dios que provee colaboradores y seguridad en medio de la oposición.",
    simbolos: "Telas de tiendas (trabajo manual).",
    datosHistoricos: "Corinto era una metrópolis comercial conocida por su diversidad y su moralidad relajada.",
  },
  {
    chapNum: 19,
    title: "Escándalo en Éfeso",
    explicacionSencilla: "El ministerio de Pablo afecta el negocio de los fabricantes de ídolos de Diana (Artemisa), provocando un gran disturbio en el teatro.",
    interpretacionTeologica: "El triunfo del Evangelio sobre las supersticiones y la idolatría económica.",
    simbolos: "Estatua de Diana, Libros de magia quemados.",
    datosHistoricos: "El templo de Artemisa en Éfeso era una de las maravillas del mundo antiguo.",
  },
  {
    chapNum: 20,
    title: "Despedida en Mileto",
    explicacionSencilla: "Pablo resucita a Eutico en Troas y da un emotivo discurso de despedida a los ancianos de Éfeso, sabiendo que no los volverá a ver.",
    interpretacionTeologica: "El ejemplo del pastor que entrega su vida con integridad y amor por el rebaño.",
    simbolos: "Lágrimas de despedida.",
    datosHistoricos: "Pablo comienza su viaje final hacia Jerusalén sabiendo que le esperan prisiones.",
  },
  {
    chapNum: 21,
    title: "Arresto en Jerusalén",
    explicacionSencilla: "A pesar de las advertencias, Pablo sube a Jerusalén. Es acusado falsamente de profanar el Templo y arrestado por los romanos.",
    interpretacionTeologica: "La disposición a sufrir por Cristo siguiendo sus mismos pasos hacia la pasión.",
    simbolos: "Cinto de Agabo.",
    datosHistoricos: "Las tensiones entre judíos y cristianos sobre la Ley estaban en su punto más alto.",
  },
  {
    chapNum: 22,
    title: "Defensa de Pablo",
    explicacionSencilla: "Pablo cuenta su conversión desde las gradas de la fortaleza. El pueblo se enfurece cuando menciona su misión a los gentiles.",
    interpretacionTeologica: "El testimonio personal como herramienta poderosa de evangelización y defensa.",
    simbolos: "Ciudadanía romana de Pablo.",
    datosHistoricos: "El uso legal de la ciudadanía romana salvó a Pablo de ser azotado sin juicio.",
  },
  {
    chapNum: 23,
    title: "Complot y traslado a Cesarea",
    explicacionSencilla: "Jesús se le aparece a Pablo para animarlo. Un grupo de judíos jura matarlo, pero es trasladado bajo escolta militar a Cesarea.",
    interpretacionTeologica: "La providencia divina que utiliza incluso estructuras estatales para proteger a sus siervos.",
    simbolos: "Inscripción de una carta de Claudio Lisias.",
    datosHistoricos: "El traslado nocturno con 470 soldados muestra la gravedad de la amenaza judía.",
  },
  {
    chapNum: 24,
    title: "Ante el gobernador Félix",
    explicacionSencilla: "Pablo se defiende de las acusaciones del orador Tértulo. Permanece preso dos años mientras Félix espera un soborno que nunca llega.",
    interpretacionTeologica: "La paciencia en la injusticia y la oportunidad de predicar ante gobernantes.",
    simbolos: "Cadenas con libertad relativa.",
    datosHistoricos: "Antonio Félix fue procurador de Judea entre los años 52 y 59 d.C.",
  },
  {
    chapNum: 25,
    title: "Apelación al César",
    explicacionSencilla: "El nuevo gobernador Festo intenta complacer a los judíos. Pablo, para evitar un juicio injusto en Jerusalén, apela al César.",
    interpretacionTeologica: "El uso sabio de los derechos legales para cumplir el propósito de Dios de llegar a Roma.",
    simbolos: "El tribunal de Festo.",
    datosHistoricos: "Ad Caesarem Appello: El derecho de un ciudadano romano a ser juzgado directamente por el Emperador.",
  },
  {
    chapNum: 26,
    title: "Pablo ante el rey Agripa",
    explicacionSencilla: "Pablo da su discurso de defensa más brillante. Agripa reconoce que Pablo no ha hecho nada digno de muerte ni prisión.",
    interpretacionTeologica: "La locura de la cruz ante los sabios y poderosos del mundo.",
    simbolos: "Poco falta para que me persuadas.",
    datosHistoricos: "Herodes Agripa II fue el último de la dinastía herodiana con autoridad real.",
  },
  {
    chapNum: 27,
    title: "Naufragio en el mar",
    explicacionSencilla: "Un gran temporal destruye el barco en el que Pablo viajaba a Roma. Todos sobreviven gracias a la promesa de Dios a Pablo.",
    interpretacionTeologica: "La fe inquebrantable que trae paz y salvación a los que rodean al creyente en medio de la tormenta.",
    simbolos: "El barco destrozado, El ancla de la esperanza.",
    datosHistoricos: "Navegación invernal en el Mediterráneo, extremadamente peligrosa en la antigüedad.",
  },
  {
    chapNum: 28,
    title: "Pablo llega a Roma",
    explicacionSencilla: "Después de tres meses en Malta, Pablo llega finalmente a Roma, donde vive dos años bajo arresto domiciliario predicando sin impedimento.",
    interpretacionTeologica: "El Evangelio ha llegado al centro del mundo conocido. La misión continúa abierta.",
    simbolos: "La víbora en Malta, La casa alquilada en Roma.",
    datosHistoricos: "El libro termina abruptamente, sugiriendo que la historia de la Iglesia sigue escribiéndose.",
  }
];

(async () => {
  const result = [];
  try {
    for (const com of commentaries) {
      console.log(`Fetching Acts chapter ${com.chapNum}...`);
      const res = await fetch(
        `https://bible-api.deno.dev/api/read/rv1960/hechos/${com.chapNum}`
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

      await new Promise((r) => setTimeout(r, 200));
    }

    const outputDir = path.join(__dirname, "../src/data");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(outputDir, "capitulosHechos.json"),
      JSON.stringify(result, null, 2),
      "utf-8"
    );

    console.log("Script completed successfully! capitulosHechos.json created.");
  } catch (err) {
    console.error("Error fetching data:", err);
  }
})();
