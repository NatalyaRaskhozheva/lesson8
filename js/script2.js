function getArray(itemsNumber) {
	let arr = []
	for (let i = 0; i < itemsNumber; i++) {
		//arr[i] = Math.floor(Math.random() * (101 - 1) + 1)
		const dayAmount = Math.floor(Math.random() * (101 - 1) + 1)
		arr.push(dayAmount)
	}
	return arr
}
function twentyArray(messageArray) {
	let newArray = []
	for (let a = 0; a < messageArray.length; a++) {
		if (messageArray[a] < 20) {
			let index = a + 1
			newArray.push(index)
		}
	}
	return newArray
}
function minItem(messageArray) {
	let minDay = 0
	let min = messageArray[0]
	for (let i = 0; i < messageArray.length; i++) {
		if (messageArray[i] < min) { min = messageArray[i]; minDay = i + 1 }
	}
	return minDay
}
function maxItem(messageArray) {
	let maxDay = 0
	let max = messageArray[0]
	for (let i = 0; i < messageArray.length; i++) {
		if (messageArray[i] > max) { max = messageArray[i]; maxDay = i + 1 }
	}
	return maxDay
}
function getControl(messageArray, startDay, endDay) {
	let sum = 0
	for (let day = startDay; day <= endDay; day++) {
		sum = sum + messageArray[day - 1]
	}
	return sum
}

const messageArray = getArray(7)
document.write(`Кількість відвідувачів за кожний день тижня - ${messageArray}<br>`)

const messageTwenty = twentyArray(messageArray)
document.write(`Номери днів з кількістю відвідувачів менше 20: ${messageTwenty}<br>`)

const messageMin = minItem(messageArray)
document.write(`Номер дня з мінімальною кількістю відвідувачів за день - ${messageMin}<br>`)

const messageMax = maxItem(messageArray)
document.write(`Номер дня з максимальною кількістю відвідувачів за день - ${messageMax}<br>`)

const messageControlWork = getControl(messageArray, 1, 5)
document.write(`Кількість відвідувачів у робочі дні - ${messageControlWork}<br>`)

const messageControl = getControl(messageArray, 6, 7)
document.write(`Кількість відвідувачів у вихідні дні - ${messageControl}`)


