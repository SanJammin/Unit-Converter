const NUMBERINPUT = document.getElementById("number-input");
const CONVERTBTN = document.getElementById("convert-btn");
const PLENGTH = document.getElementById("p-length");
const PVOLUME = document.getElementById("p-volume");
const PMASS = document.getElementById("p-mass");


CONVERTBTN.addEventListener("click", function() {
    const INPUTVAL = Number(NUMBERINPUT.value);


    let metersToFeet = INPUTVAL * 3.281;
    let feetToMeters = INPUTVAL / 3.281;

    PLENGTH.innerHTML = `
        ${INPUTVAL} metres = ${metersToFeet.toFixed(3)} feet | 
        ${INPUTVAL} feet = ${feetToMeters.toFixed(3)}
    `
});