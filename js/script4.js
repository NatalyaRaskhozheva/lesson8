function inputArray(amount) {
	let arr = []
	for (let i = 0; i < amount; i++) {
		const number = prompt(`Введіть ${i + 1} номер`)
		arr.push(number)
	}
	return arr
}
function getLetterA(messageArray) {
	let letterA = 0
	for (let i = 0; i < messageArray.length; i++) {
		if (messageArray[i][0] === "A") letterA++
	}
	return letterA++
}
function getSameLetters(messageArray) {
	let sameLetters = 0
	for (let i = 0; i < messageArray.length; i++) {
		if (messageArray[i][0] === messageArray[i][messageArray[i].length - 1]) sameLetters++
	}
	return sameLetters
}
function getSizeWord(messageArray) {
	let sizeWord = 0
	for (let i = 0; i < messageArray.length; i++) {
		if (messageArray[i].length > 5) sizeWord++
	}
	return sizeWord
}
const amount = parseInt(prompt('Скільки номерів авто реба ввести?', '0'))

const messageArray = inputArray(amount)
document.write(`Весь масив номерів - ${messageArray}<br>`)

const messageLetterA = getLetterA(messageArray)
document.write(`Кількість номерів, які починаються на літеру А - ${messageLetterA}<br>`)

const messageSameLetters = getSameLetters(messageArray)
document.write(`Кількість номерів, в яких перша і остання літери співпадають - ${messageSameLetters}<br>`)

const messageSizeWord = getSizeWord(messageArray)
document.write(`Кількість номері в в яких більше 5 букв - ${messageSizeWord}`)