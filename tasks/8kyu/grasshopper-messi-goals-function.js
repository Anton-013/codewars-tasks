// Grasshopper - Messi goals function (8 kyu)
// https://www.codewars.com/kata/55f73be6e12baaa5900000d4

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// Test
console.log(goals(0, 0, 0)) // 0
console.log(goals(43, 10, 5)) // 58