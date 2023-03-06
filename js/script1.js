function getScore(score) {
	const K = parseInt(prompt('Введіть кількість предметів', '0'))

	let sum = 0
	let result
	let two = 0
	let three = 0
	let four = 0
	let five = 0
	let averageValue
	for (let i = 0; i < K; i++) {
		//score.push(Math.floor(Math.random() * (6 - 1) + 1))
		score[i] = Math.floor(Math.random() * (6 - 1) + 1)
		sum += score[i]
		if ((score[i] == 1) || (score[i] == 2)) {
			two++
		}
		else if (score[i] == 3) three++
		else if (score[i] == 4) four++
		else five++
		if (two > 0) result = 'Студент двійочник'
		else if (three > 0) result = 'Студент трійочник'
		else if (four > 0) result = 'Студент хорошист'
		else result = 'Студент відмінник'
	}
	averageValue = sum / K
	return `${averageValue}, ${result}`
}
let score = []
const message = getScore(score)
document.write(`Всі оцінки-${score}<br> Середнє значення - ${message}<br>`)