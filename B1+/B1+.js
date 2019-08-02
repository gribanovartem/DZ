var userYear = +prompt("Введите год, чтобы узнать век");
function getCenture(year) {
	return Math.ceil(year/100);
}
alert(getCenture(userYear) +" век");
