var isTriangle = function(a, b, c) {
    return a + b + c > 2 * Math.max(a, b, c);
}

var getTriangleType = function(a, b, c) {
    if (isTriangle(a, b, c)) {
        if (a === b && b === c) {
            return "EQUILATERO";
        } else if (a == b || b == c || c == a) {
            return "ISOSCELE";
        } else {
            return "SCALENO";
        }
    } else {
        return "NOT TRIANGLE";
    }
}
/*
console.log(getTriangleType(11, 1, 1));
console.log(getTriangleType(11, 9, 3));
console.log(getTriangleType(4, 2, 4));
console.log(getTriangleType(8, 8, 8));
*/
console.log(getTriangleType(8, 8, 8));

var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet.indexOf('f'));
for(let letter of alphabet){
    console.log(letter);
}



