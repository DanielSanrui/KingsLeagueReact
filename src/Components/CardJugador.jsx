function CardJugador({ player }) {
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

  const fondo = coloresEquipos[player.team] || "#f3ad35";
  return (
    <div
      className="card text-center shadow-sm"
      style={{
        width: "260px",
        backgroundColor: fondo,
        border: "2px solid black",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center p-2"
        style={{
          height: "240px",
        }}
      >
        <img
          src={player.imagen}
          alt={player.nombre}
          className="img-fluid"
          style={{ maxHeight: "200px", objectFit: "contain" }}
        />
      </div>

      <div className="card-body p-1">
        <h6 className="card-title mb-0" style={{ fontSize: "0.9rem" }}>
          {player.nombre}
        </h6>
        <small className="text-muted d-block">{player.demarcacion}</small>
        {player.media && (
          <div className="mt-1">
            <span className="badge bg-primary">Media: {player.media}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardJugador;
