// Find the capitals (7 kyu)
// https://www.codewars.com/kata/539ee3b6757843632d00026b

var capitals = function (word) {
    const result = []
    word.split('').forEach((el, index) => {
        if (el === el.toUpperCase() && el !== el.toLowerCase()) {
            result.push(index)
        }
    });
    return result
};


// Test
console.log(capitals('CodEWaRs')) // [0, 3, 4, 6] "Input: \"CodEWaRs\""
console.log(capitals('aAbB')) // [1, 3], "Input: \"aAbB\""
console.log(capitals('AAA')) // [0, 1, 2], "Input: \"AAA\""
console.log(capitals('')) // [], "Input: \"\""