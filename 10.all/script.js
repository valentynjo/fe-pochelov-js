// Завдання 1: Підрахунок суми парних чисел
let start = 1;
let end = 20;
let sum = 0;
let i = start;
while (i <= end) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log("Сума всіх парних чисел від 1 до 20:", sum);

// Завдання 2: Таблиця множення
let number = 5;
console.log("Таблиця множення для числа", number);
for (let j = 1; j <= 10; j++) {
    console.log(`${number} * ${j} = ${number * j}`);
}

// Завдання 3: Зворотний лічильник
console.log("Зворотний лічильник від 10 до 1:");
for (let k = 10; k >= 1; k--) {
    console.log(k);
}

// Завдання 4: Перевірка парності числа
function checkParity(num) {
    for (let l = 0; l <= num; l++) {
        if (l % 2 === 0) {
            console.log(`${l} є парним`);
        } else {
            console.log(`${l} є непарним`);
        }
    }
}
checkParity(10);

// Завдання 5: Калькулятор з використанням switch
function calculator(operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Невірна операція";
    }
}
console.log("Результат операції +:", calculator('+', 10, 5));
console.log("Результат операції -:", calculator('-', 10, 5));
console.log("Результат операції *:", calculator('*', 10, 5));
console.log("Результат операції /:", calculator('/', 10, 5));

// Завдання 6: Переписати стрілкову функцію в звичайну
function multiplyValues(a, b, c) {
    return a * b * c;
}
console.log("Результат multiplyValues(2, 3, 4):", multiplyValues(2, 3, 4));

// Додаткова робота 1: Параметри та колбеки
function wellcomUser(users, hiUser) {
    users.forEach(user => hiUser(user));
}
function hiUser(user) {
    console.log(`Вітаю ${user}`);
}
wellcomUser(["Андрій", "Олена", "Ігор"], hiUser);

// Додаткова робота 2: Стрілкова функція
const wellcomUserArrow = (users, hiUser) => {
    users.forEach(user => hiUser(user));
};
wellcomUserArrow(["Анна", "Петро", "Марія"], hiUser);