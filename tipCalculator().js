// tipCalculator() calculates the appropriate gratuity based on the quality of service ("tipGenerosity") and the expense of the meal ("mealCost").

const tipCalculator = (tipGenerosity, mealCost) => {
	switch (tipGenerosity) {
		case 'bad':
			tipIs = mealCost * 0.05; //calculate 5% tip;
			return `$${tipIs}`;
			break;
		case 'ok':
			tipIs = mealCost * 0.15; //calculate 15% tip;
			return `$${tipIs}`;
			break;
		case 'good':
			tipIs = mealCost * 0.2; //calculate 20% tip;
			return `$${tipIs}`;
			break;
		case 'excellent':
			tipIs = mealCost * 0.3; //calculate 30% tip;
			return `$${tipIs}`;
			break;
		default: //calculate 18% tip;
			tipIs = mealCost * 0.18;
			return `$${tipIs}`;
			break;
	}
};

console.log(tipCalculator('bad', 100)); //should return 20
