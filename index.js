const words = ['orange', 'lemon', 'lime', 'kiwi', 'pear', 'banana', 'melon', 'pomelo', 'peach', 'plum', 'apple', 'grape', 'cherry', 'papaya'];
const word = words[Math.floor(Math.random() * words.length)];

const answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
};
let remainingLetters = word.length;

let userName = prompt('Greetings! What is your name?');
let properName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

if (properName !== null) {
    if (properName.length === 0) {
        properName = 'mate';
    }

    while (remainingLetters > 0) {
        alert('The word is ' + answerArray.join(' '));
    
        let guess = prompt('Guess a letter, or Cancel to stop playing.');
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert('Please enter a single letter.');
        } else {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    answerArray[i] = guess;
                    remainingLetters--;
                }
            }
        }
    }

    alert('Good job, ' + properName + '! The answer was ' + word + '.');
}
