function CardStaff({ nombre, imagen, rol, colorId }) {
  const coloresEquipos = {
    1: "#7338cc",
    2: "#e62d4f",
    3: "#4bbab4",
    4: "#d2283d",
    5: "#fb91a3",
    6: "#00987a",
    7: "#eccf27",
    8: "#ee78a8",
    9: "#fde653",
    10: "#fe754e",
    11: "#41404b",
    12: "#f2db39",
  };

  const fondo = coloresEquipos[colorId] || "#f3ad35";

  return (
    <div
      className="card text-center shadow-sm"
      style={{
        width: "220px",
        backgroundColor: fondo,
        border: "2px solid black",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center p-2"
        style={{ height: "200px" }}
      >
        <img
          src={imagen}
          alt={nombre}
          className="img-fluid"
          style={{ maxHeight: "180px", objectFit: "contain" }}
        />
      </div>
      <div className="card-body p-2">
        <h6 className="card-title mb-1">{nombre}</h6>
        <small className="text-muted">{rol}</small>
      </div>
    </div>
  );
}

export default CardStaff;
