function findIvan(nameArray) {
	let amountIvan = 0
	for (let i = 0; i < nameArray.length; i++) {
		if (nameArray[i] === 'Іван') amountIvan++
	}
	return amountIvan
}


const nameArray = ['Наталя', 'Іван', 'Одарка', 'Марічка', 'Олесандр', 'Іван', 'Олександр']
document.write(`Весь масив - ${nameArray}<br>`)

const messageFindIvan = findIvan(nameArray)
document.write(`Іван зустрічається ${messageFindIvan} раз`)