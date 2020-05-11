// 1. define amount
let amount = prompt("Enter the amount")

// 2. define From currency
let from = prompt("Choose your currency")

// 3. define To currency
let to = prompt("Choose the currency you want to convert your amount to")

// 4. define exchange rate (23,161.39)
// USD to VND
let exchangeRateUV = 23192.93
// JPY to USD
let exchangeRateJU = 0.0093

// 5. define result
let result = 0

if(from === "USD" && to === "VND") {
    result = usdToVnd();
    console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND', }).format(usdToVnd()))
} else if(from === "VND" && to === "USD") {
    result = vndToUsd();
    console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(vndToUsd()))
} else if(from === "JPY" && to === "USD") {
    result = jpyToUsd();
    console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(jpyToUsd()))
} else {
    console.log("Please enter existing currency")
}

// 6. define converting function
function usdToVnd() {
    // 6-a. amount * currency ratio = result
    return amount * exchangeRateUV
}

function vndToUsd() {
    return amount / exchangeRateUV
}

function jpyToUsd() {
    return amount * exchangeRateJU
}
