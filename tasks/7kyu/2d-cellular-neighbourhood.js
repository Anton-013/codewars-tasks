// 2D Cellular Neighbourhood (7 kyu)
// https://www.codewars.com/kata/5b2e5a02a454c82fb9000048

function getNeighbourhood(type, matrix, coordinates) {
    const [m, n] = coordinates
    const res = []

    if (!matrix
        || matrix.length === 0
        || !matrix[0]
        || m < 0
        || n < 0
        || m >= matrix.length
        || n >= matrix[0].length
        || matrix[0].length === 0
    ) {
        return res
    }

    let x = -1
    let y = -1
    for (let i = 0; i <= 2; i++) {
        y = -1
        for (let z = 0; z <= 2; z++) {
            if (!(x === 0 && y === 0)) {
                if (type === 'moore' || (x === 0 || y === 0)) {
                    if (matrix[m + x]?.[n + y] !== undefined) {
                        res.push(matrix[m + x][n + y])
                    }
                }
            }
            y++
        }
        x++
    }
    return res
}

// Test

const matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];

// Moore
console.log('Moore:');
console.log(getNeighbourhood('moore', matrix, [1, 1])); // [0, 1, 2, 3, 5, 6, 7, 8]
console.log(getNeighbourhood('moore', matrix, [0, 0])); // [1, 3, 4]
console.log(getNeighbourhood('moore', matrix, [2, 2])); // [4, 5, 7]
console.log(getNeighbourhood('moore', matrix, [-1, -1])); // []
console.log(getNeighbourhood('moore', matrix, [3, 3])); // []
console.log(getNeighbourhood('moore', [[]], [0, 0])); // []

// Von Neumann
console.log('\nVon Neumann:');
console.log(getNeighbourhood('von_neumann', matrix, [1, 1])); // [1, 3, 5, 7]
console.log(getNeighbourhood('von_neumann', matrix, [0, 0])); // [1, 3]
console.log(getNeighbourhood('von_neumann', matrix, [2, 2])); // [5, 7]
console.log(getNeighbourhood('von_neumann', matrix, [-1, -1])); // []
console.log(getNeighbourhood('von_neumann', matrix, [3, 3])); // []
console.log(getNeighbourhood('von_neumann', [[]], [0, 0])); // []