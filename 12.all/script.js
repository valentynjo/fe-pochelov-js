// splice
// Завдання 1: Використання splice для видалення елементів з середини масиву
const array1 = [1, 2, 3, 4, 5, 6, 7];
array1.splice(2, 3); // Видаляємо три елементи починаючи з індексу 2
console.log("Масив після видалення:", array1);

// Завдання 2: Функція для видалення елементів за допомогою splice
function deleteElements(arr, index, count) {
    arr.splice(index, count);
    return arr;
}
console.log("Масив після виклику функції deleteElements:", deleteElements([10, 20, 30, 40, 50], 1, 2));

// map
// Завдання 1: Створення нового масиву з квадратами чисел
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log("Квадрати чисел:", squares);

// Завдання 2: Функція для перетворення елементів за допомогою map
function transformArray(arr, transformFunc) {
    return arr.map(transformFunc);
}
const transformedArray = transformArray([1, 2, 3], num => `Number: ${num}`);
console.log("Перетворений масив:", transformedArray);

// filter
// Завдання 1: Створення нового масиву з парними числами
const numbersArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log("Парні числа:", evenNumbers);

// Завдання 2: Функція для фільтрації елементів за умовою
function filterArray(arr, conditionFunc) {
    return arr.filter(conditionFunc);
}
const filteredArray = filterArray([1, 2, 3, 4, 5], num => num > 3);
console.log("Відфільтрований масив:", filteredArray);

// Переопишіть цей код використовуючи let і const
// Замість var
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const message = 'test';
function example() {
    let message = 'Hello, world!';
    if (true) {
        console.log(message); // Виведе 'Hello, world!'
    }
    console.log(message); // Виведе 'Hello, world!'
}
example();

// Використовуючи for in для виведення значень з об'єкта
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
console.log("Виведення значень з об'єкта person:");
for (let key in person) {
    console.log(person[key]);
}

// Використовуючи for of та for in для виведення значень з об'єктів в масиві
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

console.log("Виведення значень з об'єктів у масиві students:");
for (let student of students) {
    for (let key in student) {
        console.log(`${key}: ${student[key]}`);
    }
}