const average = scores => {
    let sum = 0;
    scores.forEach(s => sum += s);
    return sum / scores.length;
};

const scores = [85, 90, 78, 92];
console.log("점수:", scores);
console.log("평균:", average(scores));
