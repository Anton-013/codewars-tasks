// Calculate BMI (8 kyu)
// https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
    const bmiValue = weight / height ** 2

    if (bmiValue <= 18.5) return 'Underweight'
    if (bmiValue <= 25) return 'Normal'
    if (bmiValue <= 30) return 'Overweight'
    return 'Obese'
}

// Test
console.log(bmi(50, 1.80)) // "Underweight", "For weight = 50 and height = 1.80"
console.log(bmi(80, 1.80)) // "Normal", "For weight = 80 and height = 1.80"
console.log(bmi(90, 1.80)) // "Overweight", "For weight = 90 and height = 1.80"
console.log(bmi(100, 1.80)) // "Obese", "For weight = 100 and height = 1.80"