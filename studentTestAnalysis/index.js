const scores = [
    { name: "wiktor", score: 1 },
    { name: "julek", score: 99 },
    { name: "jan", score: 45 },
    { name: "adam", score: 67 },
    { name: "roman", score: 100 }
];

const calculateAverage = (results) => {
    const totalScore = results.reduce((a, { score }) => a + score, 0);
    const averageScore = totalScore / results.length;

    console.log(`srednia wynikow: ${averageScore.toFixed(2)}`);
};

const findHighestScore = (results) => {
    const highestScore = results.reduce((a, { score }) => (score > a ? score : a), -Infinity); // '?' dziala jako skrocony if else, gdzie (warunek ? wartosc gdy true : wartosc gdy false)
    const { name } = results.find(({ score }) => score === highestScore);

    console.log(`najwyzszy wynik: ${highestScore} ucznia ${name}`);
};

const findLowestScore = (results) => {
    const lowestScore = results.reduce((a, { score }) => (score < a ? score : a), Infinity);
    const { name } = results.find(({ score }) => score === lowestScore);

    console.log(`najnizszy wynik: ${lowestScore} ucznia ${name}`);
};

const displayResults = (results) => {
    console.log("wyniki:");
    results.forEach(({ name, score }) => {
        console.log(`uczen: ${name}, wynik: ${score}`);
    });
};

displayResults(scores);
calculateAverage(scores);
findHighestScore(scores);
findLowestScore(scores);
