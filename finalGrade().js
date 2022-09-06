/*Write a function, finalGrade(). It should take three arguments (grades), take the average of those grades, and return a corresponding letter A-F as a final grade:
 */

const finalGrade = (num1, num2, num3) => {
	//take three arguments of type number
	numAvg = (num1 + num2 + num3) / 3; //find the average of those three numbers

	//return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
	if (num1 < 0 || num2 < 0 || num3 < 0) {
		return 'You have entered an invalid grade.';
	} else if (num1 > 100 || num2 > 100 || num3 > 100) {
		return 'You have entered an invalid grade.';
	}
	//    return the letter grade (as a string) that the average corresponds to //
	if (numAvg >= 0 && numAvg <= 59) {
		return 'F'; // 0-59 should return: 'F'
	} else if (numAvg > 59 && numAvg <= 69) {
		return 'D'; //60-69 should return: 'D'
	} else if (numAvg > 69 && numAvg <= 79) {
		return 'C'; //70-79 should return: 'C'
	} else if (numAvg > 79 && numAvg <= 89) {
		return 'B'; //80-89 should return: 'B'
	} else if (numAvg > 89 && numAvg <= 100) {
		return 'A'; //90-100 should return: 'A'
	} else {
		return 'errror!';
	}
};
console.log(finalGrade(48, 104, 63));
