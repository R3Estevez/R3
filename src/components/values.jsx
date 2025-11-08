import "../styles/values.css";

export default function Values() {
  return (
    <section className="values" id="values">

      <h2>Manifiesto R³</h2>

      <div className="values-grid">

        <div className="value">
          <div className="v-line"></div>
          <h3>RESISTIR</h3>
          <p>
            Resistir no es oponerse.  
            Es sostener la conciencia en medio del ruido.
          </p>
        </div>

        <div className="value">
          <div className="v-line"></div>
          <h3>RESPONDER</h3>
          <p>
            Responder es acción precisa: una intervención que transforma.
          </p>
        </div>

        <div className="value">
          <div className="v-line"></div>
          <h3>REVOLUCIONAR</h3>
          <p>
            Revolucionar es repensar lo que parecía fijo y abrir nuevas rutas.
          </p>
        </div>

      </div>

    </section>
  );
}
