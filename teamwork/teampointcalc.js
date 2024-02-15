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
document.getElementById("cubeLanding").onchange = calculatePoints;
document.getElementById("landingPadLanding").onchange = calculatePoints;
document.getElementById("bullseyeLanding").onchange = calculatePoints;

function calculatePoints() {
    let totalPoints = 0;

    let chamberCleared = document.getElementById("chamberCleared").value
    let ballScored = document.getElementById("ballScored").value;
    let pillarBallRemoved = document.getElementById("pillarBallRemoved").value;
    let totalEclipse = document.getElementById("totalEclipse").checked;
    let partialEclipse = document.getElementById("partialEclipse").checked;
    let cubeLanding = document.getElementById("cubeLanding").checked;
    let landingPadLanding = document.getElementById("landingPadLanding").checked;
    let bullseyeLanding = document.getElementById("bullseyeLanding").checked;

    chamberCleared *= CLEAR_CHAMBER;
    ballScored *= BALL_SCORED;
    pillarBallRemoved *= PILLAR_BALL_REMOVED;
    totalEclipse *= TOTAL_ECLIPSE;
    partialEclipse *= PARTIAL_ECLIPSE;
    cubeLanding *= CUBE_LANDING;
    landingPadLanding *= LANDING_PAD_LANDING;
    bullseyeLanding *= BULLSEYE_LANDING;

    totalPoints = chamberCleared + ballScored + pillarBallRemoved + totalEclipse + partialEclipse + cubeLanding + landingPadLanding + bullseyeLanding;

    document.getElementById("pointDisplay").innerHTML = totalPoints;
}
