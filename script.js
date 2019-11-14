var quantityWords = 50;
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var result = {};

function random (minLetters, maxLetters) {
    for (var i = 0; i < quantityWords; i++) {
        var word = '';
        var length = Math.floor(Math.random() * (maxLetters - minLetters) + minLetters);
        for (var j = 0; j < length; j++) {
            var symbol = Math.floor(Math.random() * (alphabet.length - 1))
            word =+ alphabet.symbol;
        }

        if (result[length]) {
            result[length].push(word);
        } else {
            result[length] = [];
            result[length].push(word);
        }
    }
}
random (5, 15);

function res () {
    for (var key in result) {
        console.log('You have ' + result[key].length + ' words with ' + key + ' characters');
    }
}
res ();


