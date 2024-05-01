function generateRandomNum() {
    return Math.floor(Math.random() * 101);
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

export { generateRandomNum, celsiusToFahrenheit };