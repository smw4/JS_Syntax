//need to formulate howOldNow()

function howOld(ageNow, userYear) {
	let currentYear = 2022;
	let birthYear = currentYear - ageNow;
	let yearsUntilX = userYear - currentYear; // how many years between the current year and the inputed year
	let howOld = ageNow + yearsUntilX; // how old you were or will be according to the userYear parameter.

	if (userYear > 2022) {
		//If the year is in the future
		return `You will be ${howOld} in the year ${userYear}`;
	} else if (userYear < birthYear) {
		//If the year was before the person was born.
		return `The year ${userYear} was ${howOld} years before you were born`;
	} else if (userYear < 2022 && userYear > birthYear) {
		//If year is in the past but not before the person was born
		return `You were ${howOld} in the year ${userYear}`;
	} else if ((userYear = birthYear)) {
		return `${userYear} was the year of your birth!`;
	} else {
		return 'error.';
	}
}

// Once your function is written, write function calls to test your code!
console.log(howOld(33, 1989));
