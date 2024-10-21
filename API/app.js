const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  console.log("fromCurr", fromCurr);
  console.log("toCurr", toCurr);
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

  // const result = "https://api.exchangerate.host/latest?base=USD&symbols=EUR";

  // console.log("result ", result);
  // let response = await fetch(URL);
  // let data = await response.json();
  // console.log(data);
  // let rate = data[toCurr.value.toLowerCase()];

  const result = "https://api.exchangerate-api.com/v4/latest/";

  console.log("Result URL:", result);

  try {
    // Use result as the URL
    let response = await fetch(result);

    // Parse the response
    let data = await response.json();
    console.log("API Data:", data);

    // Assuming toCurr is an input field or a variable holding currency code like 'EUR'
    let toCurr = { value: "EUR" }; // Mocking toCurr for now
    let rate = data.rates[toCurr.value.toUpperCase()]; // Access the rate using toCurr value

    console.log(
      `Exchange rate for USD to ${toCurr.value.toUpperCase()}:`,
      rate
    );
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
