var alphabeta = 'abcdefghijklmnopqrstuvwxyz';

function cript(sentence) {
    var response = '';
    for(var letter of sentence){
        var index = alphabeta.indexOf(letter);
        response += index + '.';
    }
    response = response.replace(/-1/g, '_');
    return response;
}

function decript(sentence) {
    var response = '';
    var array = sentence.split('.');
    for (var index of array){
        if (index === '_') {
            response += ' ';
        } else if (alphabeta[index]){
            response += alphabeta[index];
        }
    }
    return response;
}
//var x = 'ciao sono carlo!';
//var criptSentence = cript(x);
//console.log(criptSentence);
//console.log(decript(criptSentence));


function caesar(sentence, shift){
    var response = '';
    for(var letter of sentence) {
        var index = alphabeta.indexOf(letter);
        var finalIndex = index + shift;
        finalIndex = finalIndex % alphabeta.length;
        if (finalIndex < 0) {
            finalIndex = alphabeta.length + finalIndex;
        }
        var newLetter = alphabeta.charAt(finalIndex);
        response += newLetter;
    }
    return response;
}
var x = caesar('caio', 50);
console.log("x:", x);
var y = caesar(x, -50);
console.log("y:", y);
