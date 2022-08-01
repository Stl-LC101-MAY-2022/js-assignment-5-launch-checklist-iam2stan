// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) { 
    if(testInput === "") {
        alert("All Fields Are Required");
        return "Empty";
        
    }
    else if(Number(isNaN(testInput))){
        alert("You must enter a number");
        return "Not a Number";
    }
    else {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementbyId("pilotStatus");
    let copilotStatus = document.getElementbyId("copilotStatus");
    let fuelStatus = document.getElementbyId("fuelStatus");
    let cargoStatus = document.getElementbyId("cargoStatus");
    let launchStatus = document.getElementbyId("launchStatus");
    list = document.getElementbyId("faultyItems");
    pilot = document.querySelector("input[name=pilotName]");
    copilot = document.querySelector("input[name=copilotName]");
    fuelLevel = document.querySelector("input[name=fuelLevel]");
    cargoLevel = document.querySelector("input[name=cargoLevel]");

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
    alert("All fields are required!");
    event.preventDefault();
    }

    if (pilot.value != "" &&  validateInput(pilot) === "Not a Number"){
        pilotStatus = `${pilot} Ready`;
    }
    else if(copilot.value != "" &&  validateInput(copilot) === "Not a Number") {
        copilotStatus =  `${copilot} Ready`
    }
    else if (Number(fuelLevel) < 10000 && validateInput(Number(fuelLevel)) === "Is a Number" ) {
        list.style.visibility("visible");
        fuelStatus.innerHTML("There Is Not Enough Fuel For The Journey");
        launchStatus.innerHTML("Shuttle Not Ready For Launch");
        launchStatus.style.color("red");
    }
    else if (Number(cargoLevel) > 10000 && validateInput(Number(cargoLevel)) === "Is a Number" ) {
         list.style.visibility("visible");
        cargoStatus.innerHTML("There Is Too Much Mass For The Shuttle To Take Off");
        launchStatus.innerHTML("Shuttle not ready for launch");
    }
    else if(lauchStatus === "Shuttle is ready for launch") {
        launchStatus.style.color("red");
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
