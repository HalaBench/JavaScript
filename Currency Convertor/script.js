currencies = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PRB",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"
    ]


let api = `https://v6.exchangerate-api.com/v6/980183870cff72ed2c19c0b0/latest/USD`

const fromDropDown = document.getElementById("from")
const toDropDown = document.getElementById("to")
const fromInput = document.getElementById("input")
    
    // create dropdown from currencies array
currencies.forEach((currency) => {
    let option = document.createElement("option")
    option.value = currency
    option.text = currency
    fromDropDown.appendChild(option)
})
    
currencies.forEach((currency) => {
    let option = document.createElement("option")
    option.value = currency
    option.text = currency
    toDropDown.appendChild(option)
})


// default values
fromDropDown.value = "USD"
toDropDown.value = "EUR"


let convertCurrency = () => {

    //Create Refrences
    const amount = fromInput.value
    const fromCurrency = fromDropDown.value
    const toCurrency = toDropDown.value

    //If amount field isn't empty
    if (amount != 0) {
        //Fetch the API
        fetch(api).then(resp => resp.json()).then(data => 
            {
                //Get the conversion rate
                let fromExchangeRate = data.conversion_rates[fromCurrency]
                let toExchangeRate = data.conversion_rates[toCurrency]

                //Calculate the conversion
                const conversionAmout = (amount/fromExchangeRate) * toExchangeRate
                document.getElementById("result").innerHTML = conversionAmout.toFixed(2)

            })
           
    }else{
        alert("Please enter a value")
    }
}

document
.getElementById("convert")
.addEventListener("click", convertCurrency)

window.addEventListener("load", convertCurrency)