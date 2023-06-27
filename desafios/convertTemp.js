
const celsius = 32;
const fahrenheit = 80;

function convertCelsiusToFahrenheit(celsius){    
    return ((celsius * 9) / 5 + 32).toFixed(2);    
}

function convertFahrenheitToCelsius(fahrenheit){
    return (((fahrenheit - 32) * 5) / 9).toFixed(2);
}

console.log(`${celsius} graus Celsius equivalem a ${convertCelsiusToFahrenheit(celsius)} graus em Fahrenheit`);

console.log(`${fahrenheit} graus Fahrenheit equivalem a ${convertFahrenheitToCelsius(fahrenheit)} graus em Celsius`);