import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardEquipo from "./Components/CardEquipo";
import CardJugador from "./Components/CardJugador";
import CardStaff from "./Components/CardStaff";

function App() {
  const [teams, setTeams] = useState([]);
  const [teamsData, setTeamsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const resTeams = await fetch(
          "http://www.ies-azarquiel.es/paco/apikl/team"
        );
        const dataTeams = await resTeams.json();
        const teamsArray = dataTeams.teams || [];
        setTeams(teamsArray);

        const teamsWithPlayers = [];
        for (const team of teamsArray) {
          try {
            const resPlayers = await fetch(
              `http://www.ies-azarquiel.es/paco/apikl/team/${team.id}/player`
            );
            const dataPlayers = await resPlayers.json();

            teamsWithPlayers.push({
              ...team,
              players: Array.isArray(dataPlayers.players)
                ? dataPlayers.players
                : [],
            });
          } catch (err) {
            console.error("Error cargando jugadores del equipo", team.id, err);
          }
        }
        setTeamsData(teamsWithPlayers);
      } catch (err) {
        console.error("Error cargando equipos:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column p-0 m-0"
      style={{ backgroundColor: "#f3ad35" }}
    >
      <header
        className="text-center mb-4"
        style={{
          backgroundColor: "black",
          color: "white",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <h1 className="m-0">
          <img
            src="./public/Kingsleaguelogo.png"
            alt="Logo Kings League"
            style={{ width: "68px", height: "auto" }}
            className="me-2"
          />
          Kings League
        </h1>
      </header>

      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        {teams.map((team) => (
          <CardEquipo key={team.id} team={team} />
        ))}
      </div>

      {loading ? (
        <p className="text-center">Cargando equipos y jugadores...</p>
      ) : (
        teamsData.map((team) => (
          <section key={team.id} className="mb-5">
            <h2 className="text-center mb-3">{team.nombre}</h2>

            <div className="text-center mb-3">
              <img
                src={team.poster}
                alt={team.nombre}
                className="img-fluid rounded shadow"
                style={{ maxHeight: "480px" }}
              />
            </div>

            <h2 className="d-flex justify-content-center gap-4 mb-4">
              Presidente y Entrenador
            </h2>
            <div className="d-flex justify-content-center gap-4 mb-4">
              <CardStaff
                nombre={team.nombrepresidente}
                imagen={team.imagenpresidente}
                rol="Presidente"
                colorId={team.id}
              />
              <CardStaff
                nombre={team.nombreentrenador}
                imagen={team.imagenentrenador}
                rol="Entrenador"
                colorId={team.id}
              />
            </div>

            <h4 className="text-center mb-3">Jugadores</h4>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {team.players.map((player) => (
                <CardJugador key={player.id} player={player} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}

export default App;
