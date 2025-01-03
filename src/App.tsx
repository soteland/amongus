import { useState } from "react";

export const App = () => {
  const [numPlayers, setNumPlayers] = useState(4);
  const [includeSheriff, setIncludeSheriff] = useState(false);
  const [roles, setRoles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    const roleArray = ["Imposter"];
    if (includeSheriff) {
      roleArray.push("Sheriff");
    }
    while (roleArray.length < numPlayers) {
      roleArray.push("Crewmate");
    }
    // Shuffle roles
    const shuffledRoles: any = roleArray.sort(() => Math.random() - 0.5);
    setRoles(shuffledRoles);
    setCurrentIndex(0);
    setGameStarted(true);
  };

  const handleNextPlayer = () => {
    if (currentIndex < roles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameStarted(false);
    }
  };

  const handleReset = () => {
    setNumPlayers(4);
    setIncludeSheriff(false);
    setRoles([]);
    setCurrentIndex(0);
    setGameStarted(false);
  };

  return (
    <div className="min-h-screen gameBG bg-cover bg-center">
      <div className="min-h-screen my-auto flex flex-col items-center justify-center  text-gray-800 p-4">
        {!gameStarted ? (
          <div className="w-full max-w-md bg-white bg-opacity-70 rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">AM0NG US</h1>

            <p>En pitteliten web-app for de som vil forenkle styringen av spillet "AM0MG US" som barna liker å leke. Du velger antall spillere, om de skal ha med sheriff og så kan du vise hver spiller en egen skjerm med valget.</p>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Antall spillere</label>
              <input
                type="number"
                min="3"
                value={numPlayers}
                onChange={(e) => setNumPlayers(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4 flex gap-2">
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => setNumPlayers(4)}
              >
                4
              </button>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => setNumPlayers(5)}
              >
                5
              </button>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => setNumPlayers(6)}
              >
                6
              </button>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => setNumPlayers(7)}
              >
                7
              </button>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => setNumPlayers(8)}
              >
                8
              </button>

            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeSheriff}
                  onChange={(e) => setIncludeSheriff(e.target.checked)}
                  className="mr-2"
                />
                Ta med sheriff
              </label>
            </div>

            <button
              onClick={handleStartGame}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Start rollefordeling
            </button>

            <button
              onClick={handleReset}
              className="w-full mt-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Null ut innstillinger
            </button>
          </div>
        ) : (
          <div className="w-full max-w-md bg-white bg-opacity-80 rounded-lg shadow px-6 py-8">
            {currentIndex < roles.length ? (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">Spiller {currentIndex + 1}</h2>
                <p className="text-4xl font-bold text-black mb-4">{roles[currentIndex]}</p>
                <button
                  onClick={handleNextPlayer}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Neste
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">Alle roller er tildelt!</h2>
                <button
                  onClick={handleStartGame}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Start på nytt
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}