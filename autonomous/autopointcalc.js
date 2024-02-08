// Declaring Goal Values
const TAKEOFF = 10;
const UNDER_ARCH = 5;
const ARCH_LOOP = 10;
const THROUGH_KEYHOLE = 10;
const KEYHOLE_LOOP = 15;
const LANDING_PAD = 25;
const COLOR_MAT = 15;

document.getElementById("takeOff").onchange = calculatePoints;
document.getElementById("underArch").onchange = calculatePoints;
document.getElementById("archLoop").onchange = calculatePoints;
document.getElementById("throughKeyhole").onchange = calculatePoints;
document.getElementById("keyholeLoop").onchange = calculatePoints;
document.getElementById("landingPad").onchange = calculatePoints;
document.getElementById("colorMat").onchange = calculatePoints;


function calculatePoints() {
    let totalPoints = 0;

    let takeOff = document.getElementById("takeOff").checked;
    let underArch = document.getElementById("underArch").value;
    let archLoop = document.getElementById("archLoop").value;
    let throughKeyhole = document.getElementById("throughKeyhole").value;
    let keyholeLoop = document.getElementById("keyholeLoop").value;
    let landingPad = document.getElementById("landingPad").checked;
    let colorMat = document.getElementById("colorMat").value;

    takeOff *= TAKEOFF;
    underArch *= UNDER_ARCH;
    archLoop *= ARCH_LOOP;
    throughKeyhole *= THROUGH_KEYHOLE;
    keyholeLoop *= KEYHOLE_LOOP;
    landingPad *= LANDING_PAD;
    colorMat *= COLOR_MAT;

    totalPoints = takeOff + underArch + archLoop + throughKeyhole + keyholeLoop + landingPad + colorMat;

    document.getElementById("pointDisplay").innerHTML = totalPoints;
}
