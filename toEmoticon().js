// Write your function here:

const toEmoticon = (emotiString) => {
	switch (emotiString) {
		case 'shrug':
			return '|_{"}_|';
			break;
		case 'smiley face':
			return ':)';
			break;
		case 'frowny face':
			return ':(';
			break;
		case 'winky face':
			return ';)';
			break;
		case 'heart':
			return '<3';
			break;
		default:
			return '|_(* ~ *)_|';
			break;
	}
};

console.log(toEmoticon('shrug')); // Should print  '|_(* ~ *)_|'

/*

Glossary: 
'shrug'           |_{"}_|
'smiley face'     :)
'frowny face'     :(
'winky face'      ;)
'heart'           <3
any other input   |_(* ~ *)_|

*/
