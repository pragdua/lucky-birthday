const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

const checkDateIsLucky = () => {
  const dob = dateOfBirth.value;
  const sum = calcSum(dob);

  if (sum && dob && luckyNumber.value) {
    if (sum % luckyNumber.value === 0) {
      outputBox.innerText = "your birthday is lucky! 🎉🥳";
    } else {
      outputBox.innerText = "not lucky, sorry 😢";
    }
  } else {
    outputBox.innerText = "please enter both fields 😠😒";
  }
};

const calcSum = (dob) => {
  const newDate = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < newDate.length; i++) {
    sum += Number(newDate.charAt(i));
  }

  return sum;
};

checkNumberButton.addEventListener("click", checkDateIsLucky);
