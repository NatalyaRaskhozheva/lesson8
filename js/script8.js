function inputArray(amount) {
	let array = []
	let max = 500
	let min = -500
	for (let i = 0; i < amount; i++) {
		array[i] = Math.floor(Math.random() * (max - min) + min)
	}
	return array
}
function userPlay(messageArray) {
	let sum = 0
	for (let i = 0; i < messageArray.length; i++) {
		let index = parseInt(prompt(`Введіть номер комірки, який хочете відкрити, від 1 до ${amount}`))
		if (isNaN(index)) break
		else sum += messageArray[index - 1]
	}
	return sum
}

const amount = parseInt(prompt('Скільки елементів?', '0'))
const messageArray = inputArray(amount)
document.write(`Весь масив - ${messageArray}<br>`)
const play = userPlay(messageArray)
document.write(`Ви виграли ${play}`)
