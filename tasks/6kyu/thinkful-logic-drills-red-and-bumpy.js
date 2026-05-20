// Thinkful - Logic Drills: Red and bumpy (6 kyu)
// https://www.codewars.com/kata/5864cdc483f7e6df980001c8

// вероятность = нужный_шарик / все_шарики_с_такой_текстурой
// обрезаем до 2 знаков без округления, возвращаем строку
function colorProbability(color, texture) {
    const bag = {
        'red bumpy': 4,
        'red smooth': 1,
        'yellow bumpy': 2,
        'yellow smooth': 1,
        'green bumpy': 1,
        'green smooth': 1,
    }
    const marbleSoughtAfter = bag[color + ' ' + texture]
    let marbleSoughtAfterTexture = 0
    for (let key in bag) {
        if (key.includes(texture)) {
            marbleSoughtAfterTexture += bag[key]
        }
    }
    return (Math.floor(marbleSoughtAfter / marbleSoughtAfterTexture * 100) / 100).toFixed(2)
}

// Test
console.log(colorProbability("red", "bumpy")) // "0.57"
console.log(colorProbability("green", "bumpy")) // "0.14"
console.log(colorProbability("yellow", "smooth")) // "0.33"