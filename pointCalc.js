// Declaring Goal Values
const TAKEOFF = 10;
const UNDER_ARCH = 5;
const ARCH_LOOP = 10;
const THROUGH_KEYHOLE = 10;
const KEYHOLE_LOOP = 15;
const THROUGH_CUBE = 20;
const LANDING_PAD = 25;
const BULLSEYE_BONUS = 15;

document.getElementById("takeOff").onchange = calculatePoints;
document.getElementById("underArch").onchange = calculatePoints;
document.getElementById("archLoop").onchange = calculatePoints;
document.getElementById("throughKeyhole").onchange = calculatePoints;
document.getElementById("keyholeLoop").onchange = calculatePoints;
document.getElementById("throughCube").onchange = calculatePoints;
document.getElementById("landingPad").onchange = calculatePoints;
document.getElementById("bullseyeBonus").onchange = calculatePoints;
document.getElementById("bonusUnderArch").onchange = calculatePoints;
document.getElementById("bonusArchLoop").onchange = calculatePoints;
document.getElementById("bonusThroughKeyhole").onchange = calculatePoints;
document.getElementById("bonusKeyholeLoop").onchange = calculatePoints;
document.getElementById("bonusThroughCube").onchange = calculatePoints;

function calculatePoints() {
    let totalBasePoints = 0;
    let totalBonusPoints = 0;
    let totalPoints = 0;

    let takeOff = document.getElementById("takeOff").checked;
    let underArch = document.getElementById("underArch").value;
    let archLoop = document.getElementById("archLoop").value;
    let throughKeyhole = document.getElementById("throughKeyhole").value;
    let keyholeLoop = document.getElementById("keyholeLoop").value;
    let throughCube = document.getElementById("throughCube").value;
    let landingPad = document.getElementById("landingPad").checked;

    let bullsyeBonus = document.getElementById("bullseyeBonus").checked;
    let bonusUnderArch = document.getElementById("bonusUnderArch").value;
    let bonusArchLoop = document.getElementById("bonusArchLoop").value;
    let bonusThroughKeyhole = document.getElementById("bonusThroughKeyhole").value;
    let bonusKeyholeLoop = document.getElementById("bonusKeyholeLoop").value;
    let bonusThroughCube = document.getElementById("bonusThroughCube").value;

    takeOff *= TAKEOFF;
    underArch *= UNDER_ARCH;
    archLoop *= ARCH_LOOP;
    throughKeyhole *= THROUGH_KEYHOLE;
    keyholeLoop *= KEYHOLE_LOOP;
    throughCube *= THROUGH_CUBE;
    landingPad *= LANDING_PAD;

    bullsyeBonus *= BULLSEYE_BONUS;
    bonusUnderArch *= UNDER_ARCH;
    bonusArchLoop *= ARCH_LOOP;
    bonusThroughKeyhole *= THROUGH_KEYHOLE;
    bonusKeyholeLoop *= KEYHOLE_LOOP;
    bonusThroughCube *= THROUGH_CUBE;

    totalBasePoints = takeOff + underArch + archLoop + throughKeyhole + keyholeLoop + throughCube + landingPad + bullsyeBonus;
    totalBonusPoints = bonusUnderArch + bonusArchLoop + bonusThroughKeyhole + bonusKeyholeLoop + bonusThroughCube;
    totalPoints = totalBasePoints + totalBonusPoints;

    document.getElementById("totalPoints").innerHTML = totalPoints;
}