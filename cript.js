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


/*function caesar(sentence, shift){
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
console.log("y:", y);*/
 

function machineCoin (value) {
    var coinSize = {
        "500":0,
        "200":0,
        "100":0,
        "50":0,
        "20":0,
        "10":0,
        "5":0,
        "2":0,
        "1":0,
    }
    for (var key of Object.keys(coinSize).reverse()) {
        while (value >= parseInt(key)){
            coinSize[key]++;
            value -= parseInt(key);
        }
    }
    return coinSize;
}
console.log(machineCoin(67));


