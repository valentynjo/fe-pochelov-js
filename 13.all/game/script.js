function playGame(userChoice) {
    const options = ["камінь", "ножиці", "папір"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    
    // Логіка визначення результату
    let resultMessage = `Ви обрали: ${userChoice}<br>Комп'ютер обрав: ${computerChoice}<br>`;
    if (userChoice === computerChoice) {
        resultMessage += "Нічия!";
    } else if (
        (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
    ) {
        resultMessage += "Ви виграли!";
    } else {
        resultMessage += "Ви програли!";
    }

    // Відображення результату
    document.getElementById("result").innerHTML = resultMessage;
}