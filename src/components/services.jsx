import "../styles/services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <h2>Servicios</h2>

      <div className="services-grid">

        <div className="service-card">
          <h3>Consultoría Ecosistémica</h3>
          <p>
            Diagnósticos y estrategias que combinan análisis ambiental 
            con herramientas digitales.
          </p>
        </div>

        <div className="service-card">
          <h3>Sistemas Digitales</h3>
          <p>
            Diseño y desarrollo de plataformas que integran 
            datos, interfaces y acciones reales.
          </p>
        </div>

        <div className="service-card">
          <h3>Experiencia Educativa</h3>
          <p>
            Programas y contenidos que fomentan la comprensión 
            del impacto humano desde una visión futurista.
          </p>
        </div>

      </div>
    </section>
  );
}
