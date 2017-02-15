const randomWord = require("random-word");
var words = [];
function addDict(dict, key, value) {
    dict.push({ key: key, value: value });
};
for (i = 0; i < 15; i++){
    word = randomWord();
    addDict(words, i, word);
};
console.log(words)
