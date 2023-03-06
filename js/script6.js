const productsTitles = ['Роли', 'Булочка', 'Цукерки', 'Кефір', 'Ковбаса']
const productsPrices = [500, 45, 78, 89, 170]

function inputNewArray(productsPrices, productsTitles) {
	let newArray = []
	const money = parseFloat(prompt('Скільки у вас грошей?', '0'))
	for (let i = 0; i < productsPrices.length; i++) {
		if (productsPrices[i] <= money) {
			newArray.push(productsTitles[i])
		}
	}
	return newArray
}

document.write(`Доступні такі продукти: ${productsTitles}<br>`)
document.write(`Ціни: ${productsPrices}<br>`)

const messageNewArray = inputNewArray(productsPrices, productsTitles)
document.write(`Ви можете купити такі продукти: ${messageNewArray}`)
