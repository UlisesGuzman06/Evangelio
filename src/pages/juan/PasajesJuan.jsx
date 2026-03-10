import React from "react";
import "../pages.css";

export function PasajesJuan() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Pasajes Clave</h1>
        <p className="subtitle">
          Exploración profunda de los momentos más icónicos.
        </p>
      </header>

      <section className="content-section card mb-5">
        <p>
          El Evangelio de Juan contiene narraciones extensas y ricas llenas de
          ironía divina, malentendidos reveladores y poderosas enseñanzas. A
          continuación, analizamos los pasajes más relevantes de este texto.
        </p>
      </section>

      <div
        className="features-grid"
        style={{ gridTemplateColumns: "1fr", gap: "2rem" }}
      >
        {/* Juan 1 - El Prólogo */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>1. El Prólogo (Juan 1:1-18)</h2>
          <p>
            <em>
              "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo
              era Dios... Y aquel Verbo fue hecho carne, y habitó entre
              nosotros."
            </em>
          </p>
          <p>
            Esta es la piedra angular teológica del cristianismo primitivo. El
            apóstol no empieza con un pesebre en Belén o una genealogía humana,
            sino en la eternidad pasada.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Dios no es un ser solitario
              e incomunicable; Él siempre ha tenido su 'Logos' (Su expresión
              perfecta). Al hacerse carne (encarnación), la deidad infinita se
              limitó voluntariamente en el espacio y el tiempo para revelar
              supremamente quién y cómo es Dios Padre realmente. El universo fue
              creado <em>por</em> Él, y ahora la salvación es provista{" "}
              <em>en</em> Él.
            </li>
          </ul>
        </div>

        {/* Nicodemo */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>2. Nicodemo y el Nuevo Nacimiento (Juan 3:1-21)</h2>
          <p>
            <em>
              "De cierto, de cierto te digo, que el que no naciere de nuevo, no
              puede ver el reino de Dios."
            </em>
          </p>
          <p>
            Jesús recibe de noche a uno de los maestros más educados e
            influyentes de Israel. Nicodemo malinterpreta la enseñanza de Jesús
            pensando en un nacimiento biológico literal.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Representa la insuficiencia
              total de la religión humana para salvar. Ni el conocimiento
              experto de la Torá (la ley), ni el rango social o las obras de
              justicia propias pueden sustituir la necesidad de una
              transformación espiritual drástica impulsada por la gracia de Dios
              por el Espíritu. Se introduce Juan 3:16 como resumen absoluto del
              evangelio.
            </li>
          </ul>
        </div>

        {/* La mujer samaritana */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>3. La Mujer Samaritana (Juan 4:1-42)</h2>
          <p>
            <em>
              "Mas el que bebiere del agua que yo le daré, no tendrá sed jamás;
              sino que el agua que yo le daré será en él una fuente de agua que
              salte para vida eterna."
            </em>
          </p>
          <div className="grid-2 mt-4" style={{ marginBottom: "0" }}>
            <div>
              <p>
                Jesús atraviesa territorio samaritano intencionalmente para
                encontrarse con una mujer de dudosa moral a plena luz del día,
                marginada por los suyos y odiada por los judíos ortodoxos.
              </p>
            </div>
            <div>
              <ul className="custom-list">
                <li>
                  <strong>Significado Profundo:</strong> Es la revelación de la
                  adoración universal. Dios busca adoradores 'en espíritu y en
                  verdad', abatiendo todas las barreras sociológicas y ritos
                  fríos. Ella experimenta tal transformación que deja su cántaro
                  (símbolo de su sed vacía de pasadas relaciones) y se convierte
                  en la primera gran evangelista de Samaria.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* El Pan de Vida */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>4. El Pan de Vida (Juan 6:25-59)</h2>
          <p>
            <em>
              "Yo soy el pan vivo que descendió del cielo; si alguno comiere de
              este pan, vivirá para siempre..."
            </em>
          </p>
          <p>
            Tras alimentar a 5,000 hombres, las multitudes buscan a Jesús para
            coronarlo rey terrenal, como un proveedor de sustento gratuito
            perpetuo, un nuevo Moisés dador del maná.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Jesús se niega al populismo
              superficial y entrega uno de sus discursos más chocantes ("El que
              come mi carne y bebe mi sangre, tiene vida eterna"). Utiliza
              lenguaje chocante y ofensivo deliberadamente para apartar a los
              discípulos superficiales de aquellos dotados espiritualmente.
              Comer y beber es creer e interiorizar desesperadamente la cruz,
              como es indispensable la comida material para subsistir
              físicamente.
            </li>
          </ul>
        </div>

        {/* Lázaro */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>5. La Resurrección de Lázaro (Juan 11:1-44)</h2>
          <p>
            <em>
              "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en
              mí, aunque esté muerto, vivirá."
            </em>
          </p>
          <p>
            El clímax de los milagros públicos. Jesús permite intencionalmente
            que Lázaro muera, posponiendo su ida hasta el cuarto día para evitar
            la excusa de un coma temporal.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Muestra su señorío sobre el
              último y gran enemigo humano: la Muerte. Jesús llora (la
              afirmación de su profunda empatía humana ante el dolor caído) pero
              ordena la victoria dando vida. Teológicamente, prefigura Su propia
              resurrección y sella su propia ejecución al atemorizar totalmente
              al Sanedrín por sus demostraciones sobrecogedoras.
            </li>
          </ul>
        </div>

        {/* El Lavatorio */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>6. El Lavatorio de los Pies (Juan 13:1-17)</h2>
          <p>
            <em>
              "Pues si yo, el Señor y el Maestro, he lavado vuestros pies,
              vosotros también debéis lavaros los pies los unos a los otros."
            </em>
          </p>
          <p>
            La Última Cena, antes de la pascua, el Maestro toma la toalla del
            esclavo de más bajo rango.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Es un símbolo visual
              (parábola en acción) de la cruz, el descendimiento máximo por
              sumisión amorosa salvífica del Hijo. El líder cristiano está
              llamado radicalmente a servir de manera abnegada, rompiendo los
              patrones del liderazgo mundano y jerárquico centrado en
              enaltecimientos.
            </li>
          </ul>
        </div>

        {/* La Pasión */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>7. La Pasión y la Cruz (Juan 18 - 19)</h2>
          <p>
            <em>
              "Cuando Jesús hubo tomado el vinagre, dijo: Consumado es. Y
              habiendo inclinado la cabeza, entregó el espíritu."
            </em>
          </p>
          <p>
            En el registro joánico de la crucifixión de Jesús apenas hay mención
            de su sufrimiento físico o la desolación y el abandono (reportado
            mayormente en Mateo y Marcos).
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Jesús es el Rey majestuoso
              en total control de la situación. Se rinde voluntariamente y
              avanza a la cruz como un monarca yendo al altar por los suyos. El
              'Consumado es' (en el griego <em>Tetelestai</em>) era un término
              contable que implicaba el pago de una deuda en su totalidad. Jesús
              canceló contablemente el costo moral de nuestras rebeliones con su
              sacrificio sustituto perfecto.
            </li>
          </ul>
        </div>

        {/* La Resurrección */}
        <div
          className="feature-item card highlight-card border-accent"
          style={{ padding: "2rem" }}
        >
          <h2>8. La Resurrección (Juan 20 - 21)</h2>
          <p>
            <em>
              "Porque me has visto, Tomás, creíste; bienaventurados los que no
              vieron, y creyeron."
            </em>
          </p>
          <p>
            La conquista sobre la sepultura, la tumba vacía, apariciones a una
            mujer en luto (María Magdalena), al núcleo miedoso, al pragmático
            Tomás y al arrepentido Pedro.
          </p>
          <ul className="custom-list mt-4">
            <li>
              <strong>Significado Profundo:</strong> Garantiza que todo lo
              predicado y afirmado durante los años pasados es rotundamente
              verdadero. Tomás aporta el título culminante del evangelio
              llamándole "Mi Señor y Mi Dios", terminando de establecer el
              propósito cristológico central del escritor hacia todas las
              futuras generaciones de creyentes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
