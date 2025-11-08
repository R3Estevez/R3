import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <h2>Identidad Visual</h2>

      <div className="about-grid">

        <div className="about-text">
          <p>
            La identidad de <strong>R³</strong> no busca complacer. 
            Su propósito es revelar la tensión constante entre naturaleza, 
            tecnología y resistencia.
          </p>

          <p>
            El sistema visual se construye desde tres principios: 
            materia oscura <span>—negro petróleo—</span> como base, 
            energía vital <span>—rojo carmesí—</span> como detonante, 
            y el vacío <span>—blanco—</span> como espacio para pensar.
          </p>

          <p>
            Cada componente responde a un gesto simbólico: líneas que cortan, 
            espacios que respiran, contrastes que despiertan.
          </p>
        </div>

        <div className="about-line"></div>

      </div>
    </section>
  );
}
