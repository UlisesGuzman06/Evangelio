import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const detailedStudies = {
  1: {
    titulo: "La Ascensión y la Preparación de la Iglesia",
    explicacionSencilla: "Jesús da sus últimas instrucciones, prometiendo el bautismo con el Espíritu Santo. Tras su ascensión, los discípulos esperan en Jerusalén y eligen a Matías para sustituir a Judas Iscariote, completando así el número de los doce apóstoles.",
    interpretacionTeologica: "Establece el fundamento de la autoridad apostólica y la dependencia absoluta del Espíritu Santo. La ascensión no es una ausencia, sino una nueva forma de presencia soberana a través de la Iglesia.",
    simbolos: "La Nube: Representa la Shekhiná o gloria divina presente en el desierto y el Sinaí. El Monte de los Olivos: Escenario profético de la venida del Mesías.",
    datosHistoricos: "El 'camino de un sábado' (v. 12) hace referencia a la restricción rabínica de caminar solo unos 1.000 metros en el día de reposo."
  },
  2: {
    titulo: "Pentecostés: El Nacimiento de la Iglesia Mundial",
    explicacionSencilla: "El Espíritu Santo desciende con poder; Pedro predica un sermón transformador que conecta las profecías de Joel con Jesús. Tres mil personas se bautizan, formando la primera comunidad cristiana caracterizada por el compartir y la oración.",
    interpretacionTeologica: "Pentecostés es la reversión de Babel. Allí los lenguajes dividieron a la humanidad; aquí el Espíritu unifica a todas las naciones en el entendimiento del Evangelio.",
    simbolos: "Lenguas de Fuego: Purificación y presencia de Dios (como en la zarza ardiendo). Estruendo de Viento: El 'Pneuma' o aliento vivificante de Dios que crea vida nueva.",
    datosHistoricos: "Pentecostés (Shavuot) era una fiesta de cosecha que atraía a judíos de todo el Imperio Romano, facilitando la difusión inmediata del mensaje por todo el mundo."
  },
  3: {
    titulo: "Poder en el Nombre de Jesús: La Sanidad del Cojo",
    explicacionSencilla: "Pedro y Juan sanan a un hombre cojo de nacimiento en la puerta del Templo. El milagro atrae a la multitud y Pedro aprovecha para predicar sobre el arrepentimiento y la restauración de todas las cosas a través de Jesús.",
    interpretacionTeologica: "La sanidad física es una 'parábola en acción' de la sanidad espiritual que Jesús ofrece. El nombre de Jesús no es una fórmula mágica, sino la expresión de su autoridad presente.",
    simbolos: "La Puerta Hermosa: El contraste entre la belleza arquitectónica ritual y la necesidad humana real que solo Dios puede saciar.",
    datosHistoricos: "La hora novena (v. 1) era la hora del sacrificio de la tarde (3:00 PM), un tiempo de oración comunitaria esencial en el judaísmo."
  },
  4: {
    titulo: "Conflictos y Victoria: El Primer Desafío ante el Sanedrín",
    explicacionSencilla: "Los líderes religiosos arrestan a Pedro y Juan. Pedro declara que 'no hay otro nombre' bajo el cual podamos ser salvos. La iglesia ora por denuedo y es llena nuevamente del Espíritu, compartiendo todo en común.",
    interpretacionTeologica: "El choque entre el Reino de Dios y los sistemas religiosos humanos. La valentía apostólica es la prueba irrefutable de la resurrección de Cristo.",
    simbolos: "La Piedra Angular: Cristo como el fundamento que los constructores (líderes de Israel) rechazaron pero que Dios exaltó.",
    datosHistoricos: "Anás y Caifás representaban a la aristocracia saducea, quienes negaban la resurrección, lo que explica su especial hostilidad hacia el mensaje de Pedro."
  },
  5: {
    titulo: "Santidad y Persecución: La Integridad de la Comunidad",
    explicacionSencilla: "La mentira de Ananías y Safira revela que el pecado puede infiltrarse en la iglesia. Los apóstoles son encarcelados, liberados por un ángel y continúan predicando a pesar de las amenazas y los azotes del consejo.",
    interpretacionTeologica: "El Espíritu Santo es una presencia real y santa dentro de la comunidad. Engañar a la iglesia es engañar a Dios mismo. La liberación milagrosa muestra la soberanía divina sobre la prisión.",
    simbolos: "La Sombra de Pedro: No es magia, sino la manifestación de la gloria divina (Shekhiná) que fluye a través de sus representantes autorizados.",
    datosHistoricos: "Gamaliel (v. 34) fue uno de los rabinos más famosos de la historia, maestro de Saulo de Tarso y líder de la escuela liberal de Hillel."
  },
  6: {
    titulo: "Servicio y Sabiduría: Los Siete Diáconos y Esteban",
    explicacionSencilla: "Surgen quejas por la atención a las viudas griegas. La iglesia elige a siete hombres 'llenos del Espíritu' para servir. Esteban destaca por sus prodigios y es llevado ante el concilio mediante falsas acusaciones.",
    interpretacionTeologica: "La organización de la iglesia nace de necesidades prácticas pero se gestiona bajo criterios espirituales. No hay división entre el servicio social y el espiritual.",
    simbolos: "La Imposición de Manos: La transmisión de autoridad y la identificación de la comunidad con los ministros elegidos.",
    datosHistoricos: "Los 'Libertinos' (v. 9) eran judíos que habían sido esclavos en Roma y recuperado su libertad, formando su propia sinagoga en Jerusalén."
  },
  7: {
    titulo: "El Clímax del Rechazo: El Martirio de Esteban",
    explicacionSencilla: "Esteban hace una defensa magistral mostrando que Israel siempre ha rechazado a sus libertadores. Denuncia la dureza de corazón del concilio y ve a Jesús a la diestra de Dios antes de ser apedreado.",
    interpretacionTeologica: "El Templo no puede contener a Dios. El rechazo a Jesús es la continuación del rechazo histórico de Israel a la voz de Dios. El martirio de Esteban abre la puerta a la misión mundial.",
    simbolos: "Jesús de Pie: Generalmente se dice que está sentado, pero Esteban lo ve de pie, como si se hubiera levantado para recibir al primer mártir de su Iglesia.",
    datosHistoricos: "El apedreamiento era la pena prescrita por la ley judía para la blasfemia, pero bajo el dominio romano el Sanedrín no tenía potestad legal para ejecutarla (v. Juan 18:31), lo que implica que fue un acto de linchamiento."
  },
  8: {
    titulo: "Expansión hacia lo Impensable: Samaria y el Etíope",
    explicacionSencilla: "La persecución dispersa a los creyentes. Felipe predica en Samaria (un lugar despreciado por los judíos) con gran éxito. Luego, bautiza a un funcionario de Etiopía en el desierto, llevando el Evangelio hacia África.",
    interpretacionTeologica: "Dios utiliza la tragedia de la persecución para cumplir la Gran Comisión. El Espíritu rompe las barreras de raza, religión y estatus social.",
    simbolos: "El Agua en el Desierto: Símbolo de la provisión divina inopinada y de que la gracia llega hasta el lugar más árido.",
    datosHistoricos: "El eunuco etíope era probablemente un prosélito judío de alto rango encargado del tesoro de la Kandake (título de las reinas de Meroe, Sudán)."
  },
  9: {
    titulo: "De Perseguidor a Apóstol: La Conversión de Saulo",
    explicacionSencilla: "En el camino de Damasco, Saulo se encuentra con Jesús y queda ciego. Es sanado y bautizado por Ananías. Comienza a predicar que Jesús es el Hijo de Dios, asombrando a todos con su transformación radical.",
    interpretacionTeologica: "La conversión no es un cambio de opinión, es una resurrección espiritual. Cristo se identifica tanto con su Iglesia que dice: '¿Por qué ME persigues?'.",
    simbolos: "Las Escamas que caen: La ceguera espiritual del legalismo es quitada por la luz de Cristo. La Luz del Cielo: La gloria de Dios que juzga y salva simultáneamente.",
    datosHistoricos: "Las 'cartas' para Damasco (v. 2) eran documentos oficiales que permitían al Sanedrín pedir la extradición de criminales religiosos en comunidades judías fuera de Israel."
  },
  10: {
    titulo: "El Pentecostés de los Gentiles: Pedro y Cornelio",
    explicacionSencilla: "Pedro tiene una visión de animales impuros que Dios declara limpios. El Espíritu le ordena ir a casa del centurión Cornelio. Mientras Pedro predica, el Espíritu desciende sobre los gentiles, confirmando su entrada en el Reino.",
    interpretacionTeologica: "El muro de separación entre judíos y gentiles ha caído. La salvación es para todos los que temen a Dios, sin necesidad de adoptar la ley dietética judía.",
    simbolos: "El Gran Lienzo: La inclusión de toda la humanidad en el plan divino. Los animales: Representan a las naciones que anteriormente se consideraban excluidas del pacto.",
    datosHistoricos: "Cornelio era un centurión de la 'Cohorte Itálica', una unidad militar de voluntarios ciudadanos romanos destacados en Cesarea, la capital administrativa."
  },
  11: {
    titulo: "Confirmación en Jerusalén y Visión en Antioquía",
    explicacionSencilla: "Pedro explica su visión en Jerusalén y convence a la iglesia sobre la inclusión de gentiles. En Antioquía, Bernabé y Saulo fortalecen una iglesia multicultural donde nace el nombre de 'cristianos'.",
    interpretacionTeologica: "La Iglesia aprende a discernir la voluntad de Dios a través de la experiencia guiada por el Espíritu. La unidad en la diversidad es el sello del Reino.",
    simbolos: "El término 'Cristiano': Originalmente pudo ser un apodo externo de burla, pero la iglesia lo adoptó como su mayor título de honor y pertenencia a Cristo.",
    datosHistoricos: "Antioquía de Siria era la tercera ciudad más importante del mundo romano, después de Roma y Alejandría, lo que la hacía el centro estratégico ideal para la misión mundial."
  },
  12: {
    titulo: "Mártires y Milagros: El Juicio Final de Herodes",
    explicacionSencilla: "Herodes Agripa mata a Jacobo y encarcela a Pedro. Un ángel libera a Pedro de forma milagrosa. Herodes es herido por un ángel tras aceptar honores divinos y muere, mientras la Palabra de Dios sigue creciendo.",
    interpretacionTeologica: "El poder político que se exalta contra Dios acaba en juicio, pero la Palabra de Dios no puede ser encadenada. El contraste entre el ángel que libera (Pedro) y el ángel que hiere (Herodes).",
    simbolos: "Cadenas Rotas: Símbolo de la libertad que Cristo trae frente a la tiranía del pecado y del mundo.",
    datosHistoricos: "El historiador Flavio Josefo confirma los detalles de la muerte de Herodes Agripa I en el teatro de Cesarea, coincidiendo con el relato bíblico sobre su súbita enfermedad."
  },
  13: {
    titulo: "Hacia los Confines: El Inicio de la Misión a las Naciones",
    explicacionSencilla: "La iglesia de Antioquía envía a Bernabé y Saulo bajo la guía del Espíritu. Viajan a Chipre y Galacia. Pablo comienza su patrón de predicar en la sinagoga antes de dirigirse a los gentiles.",
    interpretacionTeologica: "El Espíritu Santo es el verdadero estratega de la misión. El Evangelio se presenta como la 'Palabra de Salvación' que cumple las esperanzas de Israel y de todo hombre.",
    simbolos: "Ceguera de Elimas: Un juicio espiritual que refleja su ceguera ante la verdad para que el procónsul pueda ver la luz espiritual.",
    datosHistoricos: "Sergio Paulo (v. 7) era el procónsul de Chipre. Inscripciones arqueológicas han confirmado la existencia de esta importante familia romana en esa época."
  },
  14: {
    titulo: "Idolatría y Perseverancia en Galacia",
    explicacionSencilla: "Pablo sana a un hombre en Listra; la multitud intenta adorarlos como dioses griegos. Poco después, la misma multitud apedrea a Pablo hasta darlo por muerto. Pablo sobrevive y regresa a animar a las iglesias.",
    interpretacionTeologica: "Es necesario pasar por muchas tribulaciones para entrar en el Reino de Dios. La gloria del mundo es voluble; la fidelidad de Cristo es constante.",
    simbolos: "Zeus y Hermes: Los dioses con los que intentaron identificar a Bernabé y Pablo, mostrando el trasfondo puramente pagano que enfrentaban.",
    datosHistoricos: "Listra era una ciudad rural y menos helenizada que Corinto o Éfeso, lo que explica la reacción supersticiosa y violenta de la población local."
  },
  15: {
    titulo: "El Gran Concilio: La Gracia como Único Camino",
    explicacionSencilla: "Surge un conflicto sobre si los gentiles deben guardar la Ley de Moisés. Los apóstoles y ancianos deciden en Jerusalén que la salvación es solo por gracia, pidiendo a los gentiles solo evitar prácticas que escandalicen a sus hermanos judíos.",
    interpretacionTeologica: "La Ley ya no es el criterio de pertenencia al pueblo de Dios, sino la fe en Jesús. El Espíritu une a ambos grupos en una nueva humanidad.",
    simbolos: "El Yugo: Imagen de la carga de la ley ritual que ni los padres judíos pudieron llevar, contrastada con la libertad en Cristo.",
    datosHistoricos: "Santiago (hermano de Jesús) cita a Amós 9:11-12 para demostrar que Dios siempre planeó restaurar el trono de David incluyendo a todas las naciones."
  },
  16: {
    titulo: "El Evangelio entra en Europa: Filipos",
    explicacionSencilla: "Pablo recibe la visión del varón macedonio. En Filipos, ganan a Lidia (una comerciante rica) y a un carcelero tras un terremoto milagroso en la prisión. Pablo usa su ciudadanía romana para proteger el honor de la iglesia.",
    interpretacionTeologica: "El Espíritu guía el avance geográfico de la misión, cerrando puertas y abriendo otras. El Reino de Dios libera tanto a la elite intelectual como a los oprimidos por la esclavitud y el pecado.",
    simbolos: "El Terremoto: Manifestación del poder divino que no solo rompe cadenas físicas sino que abre el corazón del carcelero.",
    datosHistoricos: "La colonia de Filipos gozaba del 'ius italicum', lo que significaba que sus ciudadanos tenían los mismos derechos que si vivieran en la propia Italia/Roma."
  },
  17: {
    titulo: "Filosofía y Fe: Pablo en el Aerópago de Atenas",
    explicacionSencilla: "En Tesalónica los acusan de 'trastornar el mundo entero'. En Atenas, Pablo razona con filósofos epicúreos y estoicos sobre el 'Dios no conocido', presentándoles al Creador y la resurrección.",
    interpretacionTeologica: "El Evangelio confronta tanto la religión tradicional como la filosofía racionalista. El Dios de la Biblia no vive en templos hechos por manos humanas y juzgará al mundo con justicia.",
    simbolos: "El Dios No Conocido: El puente que Pablo utiliza para explicar que lo que ellos intuían vagamente se ha revelado plenamente en Jesucristo.",
    datosHistoricos: "El Areópago era el tribunal más antiguo de Atenas, encargado de asuntos religiosos y éticos, donde se examinaban las nuevas enseñanzas."
  },
  18: {
    titulo: "Establecimiento en Corinto y Colaboradores",
    explicacionSencilla: "Pablo pasa 18 meses en Corinto, trabajando con Aquila y Priscila. Dios le anima en visión: 'Tengo mucho pueblo en esta ciudad'. Galión, el procónsul, se niega a juzgarlo por asuntos religiosos, facilitando su permanencia.",
    interpretacionTeologica: "Dios otorga periodos de tranquilidad y compañerismo para fortalecer la obra. El trabajo manual (hacer tiendas) es dignificado como parte del ministerio de Dios.",
    simbolos: "Sacudirse los vestidos: Un acto profético de Pablo que simboliza el traspaso de la responsabilidad de la salvación a manos de quienes rechazan el mensaje.",
    datosHistoricos: "Lucio Junio Galión (v. 12) fue procónsul de Acaya en el 51-52 d.C., una fecha clave que permite datar cronológicamente toda la vida de Pablo con precisión arqueológica."
  },
  19: {
    titulo: "Éfeso: Poder sobre la Magia y la Idolatría",
    explicacionSencilla: "Pablo enseña en Éfeso durante dos años. El poder de Dios es tan grande que incluso pañuelos de Pablo sanan enfermos. La quema de libros de magia y la crisis de los plateros de Diana muestran el impacto cultural del Evangelio.",
    interpretacionTeologica: "El Reino de Dios destruye las fortalezas del ocultismo y la explotación económica. El nombre de Jesús no es una fórmula mágica que pueda ser manipulada (v. hijos de Esceva).",
    simbolos: "Los Libros Quemados: Renuncia total al pasado pecaminoso y al poder de las tinieblas. La estatua caída de Júpiter: Representa la caída inminente del paganismo.",
    datosHistoricos: "El Templo de Artemisa (Diana) en Éfeso era una de las siete maravillas del mundo antiguo y el motor económico de toda la región."
  },
  20: {
    titulo: "El Pastor y su Rebaño: Despedida a los Efesios",
    explicacionSencilla: "Pablo viaja por Grecia y Troas (donde Eutico resucita). En Mileto, llama a los ancianos de Éfeso para una despedida lacrimosa, advirtiéndoles de los falsos maestros y encomendándolos a la palabra de su gracia.",
    interpretacionTeologica: "El liderazgo cristiano es un servicio de vigilancia y sacrificio. La 'Palabra de su Gracia' es la única herramienta capaz de edificar y dar herencia a los santificados.",
    simbolos: "Lágrimas de Pablo: Muestran que el ministerio apostólico no es frío ni burocrático, sino lleno de amor pastoral profundo.",
    datosHistoricos: "La reunión en el piso alto (v. 8) muestra la práctica de la iglesia primitiva de celebrar la Santa Cena (partimiento del pan) el primer día de la semana (domingo)."
  },
  21: {
    titulo: "El Camino a la Pasión: Arresto en Jerusalén",
    explicacionSencilla: "A pesar de las profecías sobre su cautiverio, Pablo decide entrar en Jerusalén. Tras seguir un rito de purificación, la multitud lo ataca falsamente en el Templo. Los soldados romanos lo rescatan de ser linchado.",
    interpretacionTeologica: "Siguiendo los pasos de Jesús, Pablo está 'dispuesto no solo a ser atado, sino también a morir'. La fidelidad al Espíritu supera el instinto de autopreservación.",
    simbolos: "El Cinto de Agabo: Un acto simbólico profético (como los de los profetas del A.T.) que predecía el destino de quien lo usara.",
    datosHistoricos: "Trofimo de Éfeso (v. 29) fue el desencadenante accidental; los judíos creían que Pablo lo había introducido en el atrio interior, un delito castigado con la muerte en la ley judía."
  },
  22: {
    titulo: "Defensa ante el Pueblo y la Ciudadanía Romana",
    explicacionSencilla: "Pablo habla a la multitud hebrea en su propia lengua, contando su origen y conversión. Al mencionar la misión a los gentiles, estalla el caos. Pablo invoca su ciudadanía romana para evitar ser torturado.",
    interpretacionTeologica: "El testimonio personal es la defensa más valiente. La 'misión a los gentiles' sigue siendo el obstáculo para aquellos que quieren un Dios exclusivo para su propia nación.",
    simbolos: "La lengua hebrea (arameo): Símbolo de identidad y respeto de Pablo hacia sus raíces, intentando ganar el corazón de sus oyentes.",
    datosHistoricos: "El sistema de ciudadanía romana era complejo; unos la compraban (como el tribuno) y otros nacían con ella (como Pablo), lo que otorgaba privilegios legales inmensos."
  },
  23: {
    titulo: "Providencia en medio del Complot",
    explicacionSencilla: "Pablo causa división entre fariseos y saduceos en el Sanedrín. Dios le asegura que testificará en Roma. Un grupo de 40 hombres jura matarlo, pero el complot es descubierto y Pablo es enviado bajo fuerte escolta a Cesarea.",
    interpretacionTeologica: "Dios usa incluso las divisiones teológicas del mundo y los sistemas militares para proteger sus promesas. La palabra de Dios es más poderosa que los juramentos de muerte.",
    simbolos: "Especie de Pared Blanqueada: El insulto de Pablo al Sumo Sacerdote, denunciando su hipocresía (limpio por fuera, sucio por dentro).",
    datosHistoricos: "El uso de una escolta de 470 soldados (v. 23) demuestra el nivel de inestabilidad y violencia de las facciones zelotes en la Judea de esa década."
  },
  24: {
    titulo: "Dos años en Cesarea: El Juicio ante Félix",
    explicacionSencilla: "El orador Tértulo acusa a Pablo de sedición. Pablo se defiende con calma. El gobernador Félix lo mantiene preso dos años para complacer a los judíos y esperando un soborno, aunque escucha a Pablo hablar de la justicia y el juicio futuro.",
    interpretacionTeologica: "El Evangelio confronta la conciencia de los poderosos. La dilación humana (Félix) contrasta con el propósito inalterable de Dios.",
    simbolos: "La Justicia, el Domino Propio y el Juicio: Los tres temas que hicieron temblar a Félix, revelando la autoridad moral del preso sobre el gobernante.",
    datosHistoricos: "Drusila (v. 24) era la hija de Herodes Agripa I y hermana de Agripa II, casada con Félix tras abandonar a su primer marido, lo que explica la mención del 'dominio propio' de Pablo."
  },
  25: {
    titulo: "Apelación al César: El Giro Estratégico",
    explicacionSencilla: "El nuevo gobernador Festo intenta llevar a Pablo a Jerusalén. Consciente del peligro, Pablo afirma: 'A César apelo'. Agripa y Berenice llegan a Cesarea y muestran interés en escuchar al prisionero.",
    interpretacionTeologica: "El uso de los mecanismos legales mundanos no es falta de fe, sino sabiduría para cumplir la voluntad de Dios de llegar a Roma.",
    simbolos: "El Tribunal de Festo: Símbolo del poder imperial romano bajo el cual se decidiría el futuro legal de la fe cristiana.",
    datosHistoricos: "La apelación al César (Provocatio) era un derecho constitucional de los ciudadanos romanos que suspendía todo proceso local y trasladaba el caso a la capital."
  },
  26: {
    titulo: "Resplandor ante los Reyes: La Gran Defensa ante Agripa",
    explicacionSencilla: "Pablo da su discurso más extenso y brillante ante el rey Agripa, explicando la esperanza de la resurrección y su obediencia a la visión celestial. Agripa admite que Pablo es inocente y pudo haber sido liberado si no hubiera apelado al César.",
    interpretacionTeologica: "El Evangelio no es un secreto oscuro, sino el cumplimiento de las Escrituras. El objetivo no es solo la libertad física, sino la persuasión de los oyentes hacia la verdad de Cristo.",
    simbolos: "La Visión Celestial: El motor irreprensible de la vida de Pablo que lo llevó de perseguidor a prisionero por la fe.",
    datosHistoricos: "Agripa II era experto en las costumbres judías (v. 3), por lo que Pablo apela a su conocimiento de las profecías del Antiguo Testamento."
  },
  27: {
    titulo: "Soberanía en la Tormenta: El Naufragio en Malta",
    explicacionSencilla: "Durante el peligroso viaje a Roma en invierno, una gran tormenta azota el barco por 14 días. Pablo ofrece esperanza y guía a la tripulación. Finalmente, el barco encalla y todos llegan sanos y salvos a la isla de Malta.",
    interpretacionTeologica: "La presencia de un solo creyente fiel puede traer protección a muchos. Dios cumple su palabra incluso cuando todas las circunstancias externas sugieren el desastre total.",
    simbolos: "Las Cuatro Anclas: Metáfora de la estabilidad en medio de la crisis. El Partimiento del Pan en la tormenta: Un acto de fe y acción de gracias que transforma el naufragio en una mesa de comunión.",
    datosHistoricos: "El 'Euroclidón' (v. 14) era un viento noreste violento y temido por los navegantes antiguos, capaz de arrastrar barcos hacia las arenas movedizas de la Sirte en África."
  },
  28: {
    titulo: "Roma: El Evangelio sin Impedimento",
    explicacionSencilla: "Tras tres meses en Malta, Pablo llega a Roma. Aunque está bajo arresto domiciliario, recibe a los líderes judíos y gentiles, predicando el Reino de Dios durante dos años. El libro termina con el mensaje avanzando con total libertad.",
    interpretacionTeologica: "El cumplimiento de Hechos 1:8. El Evangelio ha llegado al centro del mundo pagano. Aunque el mensajero está en cadenas, la Palabra de Dios está libre.",
    simbolos: "La Víbora en el fuego: Símbolo del poder protector de Dios sobre sus siervos. Las Cadenas de Pablo: Símbolo de que el sufrimiento cristiano es el vehículo para la gloria de Dios.",
    datosHistoricos: "La 'casa alquilada' (v. 30) era un arresto domiciliario (custodia libera) donde el acusado pagaba sus gastos mientras esperaba que el emperador Nerón escuchara su caso."
  }
};

(async () => {
    try {
        const filePath = path.join(__dirname, "../src/data/capitulosHechos.json");
        const rawData = fs.readFileSync(filePath, "utf-8");
        const chapters = JSON.parse(rawData);

        const updatedChapters = chapters.map(ch => {
            const study = detailedStudies[ch.capitulo];
            if (study) {
                return {
                    ...ch,
                    ...study
                };
            }
            return ch;
        });

        fs.writeFileSync(filePath, JSON.stringify(updatedChapters, null, 2), "utf-8");
        console.log("Success: capitulosHechos.json updated with high-quality, unique study content.");
    } catch (err) {
        console.error("Error updating JSON:", err);
    }
})();
