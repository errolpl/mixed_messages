let userClan = document.getElementById("clan")

function generateClan () {
    const clanList =["Hidden leaf village (konohagakure)",
    "Hidden mist village (kirigakure)",
    "Hidden sand village (sunagakure)",
    "Hidden cloud village (kumogakure)",
    "Hidden stone village (Iwagakure)",
    "Hidden sound village (otogakure)",
    "Hidden waterfall village (takigakure)",
    "Hidden hot spring village (yugagakure)"]
    userClan.innerHTML = clanList[2]
}

const clanBtn = document.getElementById("button")
clanBtn.onclick = ()=> generateClan()