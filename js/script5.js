function inputArray(amount) {
	let arr = []
	for (let i = 0; i < amount; i++) {
		arr[i] = Math.floor(Math.random() * (6 - 1) + 1)
	}
	return arr
}
function getTwo(messageInput) {
	let two = 0
	for (let i = 0; i < messageInput.length; i++) {
		if (messageInput[i] === 2) two++
	}
	return two
}

function getGood(messageInput) {
	let good = 0
	for (let i = 0; i < messageInput.length; i++) {
		if (messageInput[i] >= 4) good++
	}
	return good
}

function getAverage(messageInput) {
	let average = 0
	for (let i = 0; i < messageInput.length; i++) {
		if (messageInput[i] <= 3) average++
	}
	return average
}

const amount = parseInt(prompt('Скільки всього оцінок?', '0'))

const messageInput = inputArray(amount)
document.write(`Весь масив з оцінками - ${messageInput}<br>`)

const messageTwo = getTwo(messageInput)
document.write(`Кількість двійок - ${messageTwo}<br>`)

const messageGood = getGood(messageInput)
document.write(`Кількість хороших оцінок - ${messageGood}<br>`)

const messageAverage = getAverage(messageInput)
document.write(`Кількість оцінок, які нижче середнього - ${messageAverage}`)