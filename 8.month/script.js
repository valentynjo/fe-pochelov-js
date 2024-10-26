const month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"), 10);

if (month >= 1 && month <= 12) {
    switch (month) {
        case 1:
            alert("Січень — це зима.");
            break;
        case 2:
            alert("Лютий — це зима.");
            break;
        case 3:
            alert("Березень — це весна.");
            break;
        case 4:
            alert("Квітень — це весна.");
            break;
        case 5:
            alert("Травень — це весна.");
            break;
        case 6:
            alert("Червень — це літо.");
            break;
        case 7:
            alert("Липень — це літо.");
            break;
        case 8:
            alert("Серпень — це літо.");
            break;
        case 9:
            alert("Вересень — це осінь.");
            break;
        case 10:
            alert("Жовтень — це осінь.");
            break;
        case 11:
            alert("Листопад — це осінь.");
            break;
        case 12:
            alert("Грудень — це зима.");
            break;
    }
} else {
    alert("Будь ласка, введіть число від 1 до 12.");
}