const number = parseFloat(prompt("Введіть число:"));

if (number > 0) {
    console.log("Введене число є додатнім.");
} else if (number < 0) {
    console.log("Введене число є від'ємним.");
} else if (number === 0) {
    console.log("Введене число є нулем.");
} else {
    console.log("Введено некоректне значення.");
}