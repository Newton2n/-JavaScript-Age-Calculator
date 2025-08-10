const userInput = document.getElementById("date");
const submit = document.getElementById("butt");
const output = document.getElementById("output");

submit.addEventListener("click", calculateAge);

function calculateAge() {
  const birthDate = new Date(userInput.value);
  if (isNaN(birthDate)) {
    output.innerText = "Please enter a valid date.";
    return;
  }

  const today = new Date();
  if (birthDate > today) {
    output.innerText = "Date cannot be in the future.";
    return;
  }
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust if day is negative
  if (days < 0) {
    months--;
    const prevMonth = (today.getMonth() - 1 + 12) % 12;
    const prevYear =
      prevMonth === 11 ? today.getFullYear() - 1 : today.getFullYear();
    days += daysInMonth(prevYear, prevMonth);
  }

  // Adjust if month is negative
  if (months < 0) {
    years--;
    months += 12;
  }
  output.innerText = `Your Age Is ${years} Year${
    years !== 1 ? "s" : ""
  } ${months} Month${months !== 1 ? "s" : ""} ${days} Day${
    days !== 1 ? "s" : ""
  }`;
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
