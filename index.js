const NUMBERINPUT = document.getElementById("number-input");
const CONVERTBTN = document.getElementById("convert-btn");
const PLENGTH = document.getElementById("p-length");
const PVOLUME = document.getElementById("p-volume");
const PMASS = document.getElementById("p-mass");


CONVERTBTN.addEventListener("click", function() {
    const INPUTVAL = Number(NUMBERINPUT.value);

    // Length Converter
    let metersToFeet = INPUTVAL * 3.281;
    let feetToMeters = INPUTVAL / 3.281;

    PLENGTH.innerHTML = `
        ${INPUTVAL} metres = ${metersToFeet.toFixed(3)} feet | 
        ${INPUTVAL} feet = ${feetToMeters.toFixed(3)} meters
    `

    // Volume Converter
    let litresToGallons = INPUTVAL * 0.264;
    let gallonsToLitres = INPUTVAL / 0.264;

    PVOLUME.innerHTML = `
        ${INPUTVAL} litres = ${litresToGallons.toFixed(3)} gallons | 
        ${INPUTVAL} gallons = ${gallonsToLitres.toFixed(3)} litres
    `

    // Mass Converter
    let kilosToPounds = INPUTVAL * 2.204;
    let poundsToKilos = INPUTVAL / 2.204;

    PMASS.innerHTML = `
        ${INPUTVAL} kilos = ${kilosToPounds.toFixed(3)} pounds | 
        ${INPUTVAL} pounds = ${poundsToKilos.toFixed(3)} kilos
    `
});