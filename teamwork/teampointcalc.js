// Declaring Goal Values
const CLEAR_CHAMBER = 5;
const BALL_SCORED = 1;
const PILLAR_BALL_REMOVED = 8;
const TOTAL_ECLIPSE = 25;
const PARTIAL_ECLIPSE = 5;
const CUBE_LANDING = 10;
const LANDING_PAD_LANDING = 5;
const BULLSEYE_LANDING = 15;

document.getElementById("chamberCleared").onchange = calculatePoints;
document.getElementById("ballScored").onchange = calculatePoints;
document.getElementById("pillarBallRemoved").onchange = calculatePoints;
document.getElementById("totalEclipse").onchange = calculatePoints;
document.getElementById("partialEclipse").onchange = calculatePoints;
document.getElementById("cubeLanding1").onchange = calculatePoints;
document.getElementById("cubeLanding2").onchange = calculatePoints;
document.getElementById("landingPadLanding1").onchange = calculatePoints;
document.getElementById("landingPadLanding2").onchange = calculatePoints;
document.getElementById("bullseyeLanding1").onchange = calculatePoints;
document.getElementById("bullseyeLanding2").onchange = calculatePoints;

function calculatePoints() {
    let totalPoints = 0;

    let chamberCleared = document.getElementById("chamberCleared").value
    let ballScored = document.getElementById("ballScored").value;
    let pillarBallRemoved = document.getElementById("pillarBallRemoved").value;
    let totalEclipse = document.getElementById("totalEclipse").checked;
    let partialEclipse = document.getElementById("partialEclipse").checked;
    let cubeLanding1 = document.getElementById("cubeLanding1").checked;
    let cubeLanding2 = document.getElementById("cubeLanding2").checked;
    let landingPadLanding1 = document.getElementById("landingPadLanding1").checked;
    let landingPadLanding2 = document.getElementById("landingPadLanding2").checked;
    let bullseyeLanding1 = document.getElementById("bullseyeLanding1").checked;
    let bullseyeLanding2 = document.getElementById("bullseyeLanding2").checked;


    chamberCleared *= CLEAR_CHAMBER;
    ballScored *= BALL_SCORED;
    pillarBallRemoved *= PILLAR_BALL_REMOVED;
    totalEclipse *= TOTAL_ECLIPSE;
    partialEclipse *= PARTIAL_ECLIPSE;
    cubeLanding1 *= CUBE_LANDING;
    cubeLanding2 *= CUBE_LANDING;
    landingPadLanding1 *= LANDING_PAD_LANDING;
    landingPadLanding2 *= LANDING_PAD_LANDING;
    bullseyeLanding1 *+ BULLSEYE_LANDING;
    bullseyeLanding2 *+ BULLSEYE_LANDING;

    totalPoints = chamberCleared + ballScored + pillarBallRemoved + totalEclipse + partialEclipse + cubeLanding1 + cubeLanding2 + landingPadLanding1 + landingPadLanding2 + bullseyeLanding1 + bullseyeLanding2;

    document.getElementById("pointDisplay").innerHTML = totalPoints;
}
