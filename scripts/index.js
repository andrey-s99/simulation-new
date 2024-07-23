import Simulation from "./simulation.js";
const simulation = new Simulation();

const playPauseButton = document.getElementById("play-pause-button");

const processPlayPauseButton = () => {

    if (playPauseButton.classList.contains("fa-play")) {
        playPauseButton.classList.remove("fa-play");
        playPauseButton.classList.add("fa-pause");

        simulation.startSimulation();
    } else {
        playPauseButton.classList.remove("fa-pause");
        playPauseButton.classList.add("fa-play");

        simulation.pauseSimulation();
    }
}

playPauseButton.addEventListener("click", processPlayPauseButton);