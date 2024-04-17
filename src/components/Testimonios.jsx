// Importando React
import React from "react";

// Importando los estilos del componente
import "../css/Testimonios.css";

// Estructura de componente
// Usando exportacion nombrada
export function Testimonio({
  imagen,
  nombre,
  pais,
  cargo,
  empresa,
  testimonio,
}) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imgs/testimonio-${imagen}.png`)}
        alt="Fotografia de Emma"
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{nombre}</strong> en {pais}
        </p>
        <p className="cargo-testimonio">
          {cargo} en <strong>{empresa}</strong>
        </p>
        <p className="texto-testimonio">{testimonio}</p>
      </div>
    </div>
  );
}

// Exportando para poder usar el componente
// export default Testimonio;
