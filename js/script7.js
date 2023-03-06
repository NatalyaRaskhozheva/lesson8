function inputArray(amountMonth) {
	let array = []
	for (let i = 0; i < amountMonth; i++) {
		array[i] = Math.floor(Math.random() * (5 - 1) + 1)
	}
	return array
}
function getSum(messageArray, startMonth, endMonth) {
	let sum = 0
	for (let month = startMonth; month <= endMonth; month++) {
		sum += messageArray[month - 1]
	}
	return sum
}
function pairSum(messageArray, startMonth, endMonth) {
	let sum = 0
	for (let month = startMonth; month <= endMonth; month++) {
		if (month % 2 == 0) sum += messageArray[month - 1]
	}
	return sum
}
function firstMonth(messageArray, startMonth, endMonth) {
	let sum = 0
	for (let month = startMonth; month <= endMonth; month++) {
		if (month % 3 == 0) sum += messageArray[month - 1]
	}
	return sum
}
const messageArray = inputArray(12)
document.write(`Показники за кожен місяць року: ${messageArray}<br>`)

const year = getSum(messageArray, 1, 12)
document.write(`Сума за рік - ${year}<br>`)

const firstHalf = getSum(messageArray, 1, 6)
document.write(`Сума за першу половину ${firstHalf}<br>`)

const secondHalf = getSum(messageArray, 7, 12)
document.write(`Сума за другу половину ${secondHalf}<br>`)

const summer = getSum(messageArray, 6, 8)
document.write(`Сума за літо ${summer}<br>`)

const secondQuarter = getSum(messageArray, 4, 6)
document.write(`Сума за другий квартал ${secondQuarter}<br>`)

const pair = pairSum(messageArray, 1, 12)
document.write(`Сума парних місяців ${pair}<br`)

const firstSum = firstMonth(messageArray, 1, 12)
document.write(`Сума перших місяців сезону ${firstSum}`)