//Accessing the DOM
const homeScoreEl = document.getElementById("homeScore")
const guestScoreEl = document.getElementById("guestScore")
const addPointsHome = document.getElementById("addPointsHome")
const addPointsGuest = document.getElementById("addPointsGuest")
const newGameEl = document.getElementById("newGame")

let scoreHome = 0
let scoreGuest = 0

//Add some buttons to the HTML through JavaScript
addPointsHome.innerHTML = `
    <button id="addOneHome" class="btn addBtns">+1</button>
    <button id="addTwoHome" class="btn addBtns">+2</button>
    <button id="addThreeHome" class="btn addBtns">+3</button>
`

addPointsGuest.innerHTML = `
    <button id="addOneGuest" class="btn addBtns">+1</button>
    <button id="addTwoGuest" class="btn addBtns">+2</button>
    <button id="addThreeGuest" class="btn addBtns">+3</button>
`

//Home Score
homeScoreEl.innerText = scoreHome
document.getElementById("addOneHome").addEventListener("click", 
    ()=>{homeScoreEl.innerText = scoreHome += 1})
document.getElementById("addTwoHome").addEventListener("click", 
    ()=>{homeScoreEl.innerText = scoreHome += 2})
document.getElementById("addThreeHome").addEventListener("click", 
    ()=>{homeScoreEl.innerText = scoreHome += 3})
    
//Guest Score
guestScoreEl.innerText = scoreGuest
document.getElementById("addOneGuest").addEventListener("click", 
    ()=>{guestScoreEl.innerText = scoreGuest += 1})
document.getElementById("addTwoGuest").addEventListener("click", 
    ()=>{guestScoreEl.innerText = scoreGuest += 2})
document.getElementById("addThreeGuest").addEventListener("click", 
    ()=>{guestScoreEl.innerText = scoreGuest += 3})

//New Game Button 
newGameEl.innerHTML = `
    <button id="newGameBtn" class="btn newGameBtn">New Game</button>
    `
document.getElementById("newGameBtn").addEventListener("click", ()=> location.reload())








































