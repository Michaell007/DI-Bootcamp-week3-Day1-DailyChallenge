// html page background black
document.body.style.background = "black";

// Create an array which value is the planets of the solar system
let planets = ["Mercury", "Venus", "Earth", "Jupiter", "Saturn", "Uranus", "Neptune"];

// selector section
let section = document.querySelector(".listPlanets");

// For each planet in the array, create a <div>
let listColors = ["blue", "orange", "green", "red", "yellow", "white", "grey"];

// Bonus: Do the same process to create the moons
let planetsMoons = [
    {
        name: "Mercury",
        amountMoons: 0
    },
    {
        name: "Venus",
        amountMoons: 0
    },
    {
        name: "Earth",
        amountMoons: 1
    },
    {
        name: "Jupiter",
        amountMoons: 80
    },
    {
        name: "Saturn",
        amountMoons: 83
    },
    {
        name: "Uranus",
        amountMoons: 27
    },
    {
        name: "Neptune",
        amountMoons: 80
    }
];

planetsMoons.forEach((el, index) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("planet", listColors[index]);

    // set Moons number
    for (let index = 0; index < el.amountMoons; index++) {
        let tmpDiv = document.createElement("div");
        tmpDiv.classList.add("moon");

        // append each div to the <section>
        newDiv.appendChild(tmpDiv);
    }

    // append each div to the <section>
    section.appendChild(newDiv);
})