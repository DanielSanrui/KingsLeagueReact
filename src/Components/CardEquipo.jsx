function CardEquipo({ team }) {
  return (
    <div
      className="card text-center shadow-sm"
      style={{
        width: "100px",
        backgroundColor: "#f6bb57ff",
        border: "2px solid black",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center p-2"
        style={{ height: "70px" }}
      >
        <img
          src={team.escudo}
          alt={team.nombre}
          className="img-fluid"
          style={{ maxHeight: "60px", objectFit: "contain" }}
        />
      </div>
      <div className="card-body p-1">
        <h6 className="card-title mb-0">{team.nombre}</h6>
      </div>
    </div>
  );
}

export default CardEquipo;
