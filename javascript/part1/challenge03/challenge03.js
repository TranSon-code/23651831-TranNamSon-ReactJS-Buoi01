
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(`Average Scores - Dolphins: ${scoreDolphins.toFixed(1)}, Koalas: ${scoreKoalas.toFixed(1)}`);


if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy! 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy! 🏆");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy! (It's a draw) 🤝");
} else {
    console.log("No team wins the trophy because no one reached 100 points. 😢");
}