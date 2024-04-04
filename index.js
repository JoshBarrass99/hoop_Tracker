let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0


//Home side

function homeAddOne() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function homeAddTwo() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function homeAddThree() {
    homeScore += 3
    homeScoreEl.innerText = homeScore 
}


//guest side

function guestAddOne() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function guestAddTwo() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function guestAddThree() {
    guestScore += 3
    guestScoreEl.innerText = guestScore 
}


