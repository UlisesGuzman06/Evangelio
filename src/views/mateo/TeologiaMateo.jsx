import React from "react";
import "../pages.css";

export function TeologiaMateo() {
  return (
    <div className="page-container">
      <header className="page-header text-center">
        <h1 className="title-large">Enfoque Teológico de Mateo</h1>
        <p className="subtitle">
          Cristología del Hijo de David y la Iglesia naciente.
        </p>
      </header>

      <section className="content-section card">
        <h2 style={{ fontSize: "1.8rem" }}>Emanuel: Dios con Nosotros</h2>
        <p>
          La Cristología de Mateo es la más exhaustiva en relación con el
          judaísmo. Comienza su relato del nacimiento anunciando a Jesús como
          "Emanuel" (Dios con nosotros, Mt 1:23), y termina su obra con la
          promesa de Jesús resucitado: "Yo estoy con vosotros todos los días"
          (Mt 28:20). Toda la deidad está contenida en este concepto de
          presencia divina.
        </p>
      </section>

      <div className="grid-2">
        <section className="content-section card highlight-card border-accent bg-accent-light">
          <h2>Jesús como el Nuevo Moisés</h2>
          <p>
            Mateo presenta la vida de Jesús intencionalmente en paralelo con la
            vida del gran libertador Moisés. Como él, Jesús fue salvado
            milagrosamente de una matanza de infantes ordenada por un tirano.
            Como Moisés, volvió de Egipto ("De Egipto llamé a mi hijo"). Como
            Moisés, pasó 40 días ayunando en el desierto antes de iniciar su
            obra y, crucialmente, entregó su nueva enseñanza suprema (el Sermón
            del Monte) desde un monte, igual que Moisés entregó la Ley desde el
            Sinaí.
          </p>
        </section>

        <section className="content-section card highlight-card border-accent">
          <h2>La Ekklesía (Iglesia)</h2>
          <p>
            Mateo es el <strong>único</strong> Evangelio que utiliza la palabra
            griega <em>ekklesía</em>
            para referirse a la asamblea o iglesia cristiana (ocurre en Mateo
            16:18 y 18:17). Proporciona una clara instrucción pastoral sobre
            cómo la comunidad de discípulos debe organizar su disciplina, su
            perdón y cómo la autoridad apostólica ataría y desataría en los
            cielos y tierra.
          </p>
        </section>
      </div>

      <section className="content-section card">
        <h2>Un Particularismo Judío y un Universalismo Trascendente</h2>
        <p>
          Por un lado, Jesús limita inicialmente su misión y la de sus apóstoles
          solo a "las ovejas perdidas de la casa de Israel" (Mateo 10:5-6).
          Muestra una fuerte afirmación de las leyes y costumbres patriarcales
          de la nación.
          <br />
          <br />
          Sin embargo, anticipa brillantemente un quiebre hacia todas las
          naciones gentiles, ejemplificado desde los magos orientales, la
          advertencia de que muchos "vendrán del oriente y occidente a sentarse
          con Abraham" (8:11), hasta culminar explosivamente en la{" "}
          <strong>Gran Comisión</strong> mandada a ir a todo el globo terráqueo.
        </p>
      </section>
    </div>
  );
}
