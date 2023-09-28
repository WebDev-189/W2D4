/**
 * SELECTORS
 */
const gameElement = document.querySelector(".game")
const startButton = document.getElementById("btn-start")
const endGameScreen = document.getElementById("end-game-screen")
const scoreElement = document.querySelector("#score span")
const restartButton = endGameScreen.querySelector("button")
const readyToPlay = document.getElementById("ready-to-play")

/**
 * GLOBAL VARIABLES
 */

const size = 10
let cells = []
let playerPosition = 30

/**
 * JSDoc :
 * this is the score
 */

let score = 0

// function generateBoard() {
// 	gameElement.innerHTML = ""
// 	cells = []
// 	for (let i = 0; i < size * size; i++) {
// 		const cell = generateCell(i)
// 		gameElement.append(cell)
// 		cells.push(cell)
// 	}
// }

// function displayPlayer() {
// 	cells[playerPosition].classList.add("player")
// }
// function hidePlayer() {
// 	cells[playerPosition].classList.remove("player")
// }

// function startThatGame() {
// 	generateBoard()
// 	displayPlayer()
// 	console.log(cells)
// 	generateEnnemies(10)
// }

// function generateCell(index) {
// 	const cell = document.createElement("div")
// 	cell.textContent = index
// 	cell.classList.add("cell")
// 	return cell
// }

document.addEventListener("keydown", (event) => {
	console.log(event.key, event.code, event.keyCode)

	switch (event.key) {
		case "ArrowUp":
			if (playerPosition >= 10) {
				move("up")
			}
			break
		case "ArrowDown":
			if (playerPosition <= 89) {
				move("down")
			}
			break
		case "ArrowLeft":
			if (playerPosition % 10 !== 0) {
				// moveLeft()
				move("left")
			}
			break
		case "ArrowRight":
			if ((playerPosition + 1) % 10 !== 0) {
				// moveRight()
				move("right")
			}
			break
		default:
			console.log("Non valid key")
	}
})

// function move(direction) {
// 	hidePlayer()
// 	switch (direction) {
// 		case "right":
// 			playerPosition++
// 			break
// 		case "up":
// 			playerPosition -= 10
// 			break
// 		case "down":
// 			playerPosition += 10
// 			break
// 		case "left":
// 			playerPosition--
// 			break
// 	}

// 	if (cellContainEnnemy()) {
// 		removeEnnemy()
// 		console.log("HIT !")
// 		score += 10
// 		updateScore()
// 	}

// 	if (noEnnemiesLeft()) {
// 		// won the game
// 		console.log("WIN !")
// 		endGameScreen.showModal()
// 	}

// 	displayPlayer()
// }

// function updateScore() {
// 	scoreElement.textContent = score
// }

// /**
//  * This function check if there is no ennemies.
//  *
//  * @returns {Boolean}
//  */
// function noEnnemiesLeft() {
// 	return document.querySelectorAll(".boop").length === 0
// }

// function removeEnnemy() {
// 	cells[playerPosition].classList.remove("boop")
// }

// function cellContainEnnemy() {
// 	return cells[playerPosition].classList.contains("boop")
// }
// // function moveRight() {
// // 	/**
// // 	 * We need to hide the player on the current cell
// // 	 * Change the position
// // 	 * Show the player on the new cell
// // 	 */
// // 	hidePlayer()
// // 	playerPosition++
// // 	displayPlayer()
// // }

// // function moveLeft() {
// // 	hidePlayer()
// // 	playerPosition--
// // 	displayPlayer()
// // }

// // function moveDown() {
// // 	hidePlayer()
// // 	playerPosition += 10
// // 	displayPlayer()
// // }
// // function moveUp() {
// // 	hidePlayer()
// // 	playerPosition -= 10
// // 	displayPlayer()
// // }

// /**
//  * This function generate X amount of ennemies in the available Cells
//  *
//  *
//  * @param {Number} num
//  * @returns {undefined}
//  */
// function generateEnnemies(num) {
// 	for (let i = 0; i < num; i++) {
// 		const validCells = document.querySelectorAll(".cell:not(.player,.boop)")
// 		// console.log(validCells)
// 		const randomCell = validCells[Math.floor(Math.random() * validCells.length)]
// 		randomCell.classList.add("boop")
// 	}
// }

// function restartGame() {
// 	/**
// 	 * We need to close the modal
// 	 * score = 0
// 	 * playerPosition = 30
// 	 */
// 	// ! Big no no window.location.reload()
// 	endGameScreen.close()
// 	score = 0
// 	updateScore()
// 	playerPosition = 30
// 	startThatGame()
// }

startButton.addEventListener("click", startThatGame)
restartButton.addEventListener("click", restartGame)
readyToPlay.addEventListener("click", () => {
	document.querySelector("#game-screen").removeAttribute("hidden")
	document.querySelector("#main-screen").setAttribute("hidden", true)
})
