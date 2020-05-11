// 1. define amount
let amount = prompt("Enter the amount")

// 2. define From currency
let from = prompt("Choose your currency").toUpperCase()


// 3. define To currency
let to = prompt("Choose the currency you want to convert your amount to").toUpperCase()

// Exchange rates
// USD to VND
let exchangeRateUV = 23192.93
// JPY to USD
let exchangeRateJU = 0.0093
// JPY to VND
let exchangeRateJV = 216.49

// Define result
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
} else if(from === "USD" && to === "JPY") {
    result = usdToJpy();
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(usdToJpy()))
} else if(from === "JPY" && to === "VND") {
    result = jpyToVnd();
    console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(jpyToVnd()))
} else if(from === "VND" && to === "JPY") {
    result = vndToJpy();
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(vndToJpy()))
} else {
    alert("Please enter existing currency")
}

// Calculation functions
// USD - VND
function usdToVnd() {
    return amount * exchangeRateUV
}
function vndToUsd() {
    return amount / exchangeRateUV
}

// JPY - USD
function jpyToUsd() {
    return amount * exchangeRateJU
}
function usdToJpy() {
    return amount / exchangeRateJU
}

// JPY - VND
function jpyToVnd() {
    return amount * exchangeRateJV
}
function vndToJpy() {
    return amount / exchangeRateJV
}
