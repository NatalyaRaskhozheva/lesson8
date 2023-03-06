function inputArray(amountOfCells) {
	let shipArray = []
	for (let i = 0; i < amountOfCells; i++) {
		shipArray.push(0)
	}
	return shipArray
}
function inputShips(messageArray, amountOfShips, amountOfCells) {
	for (let i = 0; i < amountOfShips; i++) {
		messageArray[Math.floor(Math.random() * amountOfCells)] = 1
	}
	return messageArray
}
function userPlay(newArray, amountOfShips) {
	let destroyed = 0
	do {
		const index = parseInt(prompt('Введіть номер клітинки', '1'))
		if (newArray[index - 1] === 1) destroyed++
		else destroyed
	} while (destroyed != amountOfShips);
	return destroyed
}

const amountOfShips = parseInt(prompt('Скільки у вас кораблів?', '0'))
const amountOfCells = parseInt(prompt('Скільки всього клітинок?', '0'))

const messageArray = inputArray(amountOfCells)
document.write(`${messageArray}<br>`)

const newArray = inputShips(messageArray, amountOfShips, amountOfCells)
document.write(`${newArray}<br>`)

const play = userPlay(newArray, amountOfShips)
document.write(`Всі ${play} кораблів збиті`)